<template>
  <div class="container" style="box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2); margin-top: 20px; height: calc(100vh - 40px);">
    <div class="columns is-multiline is-mobile m-0">
      <div class="column is-3 p-0" style="background-color: white; border-right: 1px solid #e1e1e1; position: relative">

        <div class="booklist-canvas" v-if="books.length > 0" style="width: 100%; height: calc(100% - 78px); border-bottom: 1px solid #e1e1e1; overflow-y: scroll; overflow-x: hidden">
            <div class="columns px-4 pt-4">
              <div class="column" v-for="book in books" style="border-bottom: 1px solid #e1e1e1; word-wrap: break-word;">
                <i class="bi bi-x-circle-fill" style="color: red"></i> {{ book }}
              </div>
            </div>

            <p style="text-align: center; font-weight: bold; color: lightgrey">
              {{books.length}} / {{ totalBooks }}
            </p>
        </div>
        <div v-else>
          <p class="pt-5" style="color: gray; text-align: center">
            No books selected
          </p>
        </div>

        <button class="button is-danger booklist-bottom-btn" style="position: absolute; bottom: 20px; left: 50%; transform: translateX(-50%);">
            Completed
        </button>

      </div>
      <div class="column is-9 p-0">
        <div class="main-canvas" style="position: relative">

          <div style="position: absolute; width: 100%; height: 100%;  overflow: hidden; z-index: -1">
            <img src="/background.jpg" alt=""
                 style="width: 100%; height: 100%; object-fit: cover">
          </div>

          <div class="navigation-bar">
            <img class="avatar" src="/slush-pana.png">
            <span class="username">
                    Enoch
                  </span>
            <!--        <button class="reset-conversation-btn" @click="resetConversationBtnTap">開啓新對話</button>-->
            <!--            <button class="end-conversation-btn" @click="endConversationBtnTap">End Chat</button>-->
          </div>

          <div class="chat-canvas" ref="chatCanvas">
            <div class="columns is-mobile is-multiline">
              <div class="column is-full">
                <div class="default-prompt" v-html="defaultPrompt">

                </div>
              </div>
              <div class="column is-full" v-for="message in messages">
                <div :class="[message.role === 'assistant' ? 'receive-canvas' : 'send-canvas']"
                     v-html="message.content + formatDate(message.time)">
                </div>
              </div>

              <div class="column is-full" v-if="isLoading">
                <div :class="['receive-canvas']">
                        <span v-html="tempMessage">

                        </span>
                  <span class='blinking-cursor'>▋</span>
                </div>
              </div>

              <!--          <div class="column is-full" v-if="!isLoading">-->
              <!--            <div :class="['receive-end-canvas']">-->
              <!--            <span @click="endConversationBtnTap">-->
              <!--              我已經得到想要的結果，請幫我結束對話-->
              <!--            </span>-->
              <!--            </div>-->
              <!--          </div>-->

              <div class="column is-full" v-if="!isLoading">
                <div :class="['export-current-conversation-records']" @click="exportCurrentConversationRecords">
                  Copy the current conversation log
                </div>
              </div>
            </div>
          </div>

          <div class="chat-input-canvas">
                    <textarea class="chat-input-textarea" ref="inputTextRef" v-model="inputText"
                              :placeholder="[isLoading ? 'Loading...':'Say something']"
                              @keyup.enter.exact="sendBtnTap" :disabled="isLoading"></textarea>
            <button :class="['chat-send-button', isLoading ? 'chat-send-button-disable' : '']" @click="sendBtnTap"
                    :disabled="isLoading">Send
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import {store} from "@/data/store";
import {Base64} from "js-base64";
import {fetchEventSource} from "@microsoft/fetch-event-source";
import moment from "moment";

export default {
  name: "ChatView",
  components: {},
  data() {
    return {
      store,

      defaultPrompt: "Hi, I'm Book Bot called Enoch, and I'm happy to assist you!\nI can provide you with a book list based on your needs. Please give me a try!\n\nYou may start the conversation with me in this way:" +
          "\n" +
          "<strong>“I would like you to act as a personalized book recommender to help me find books as a gift for someone in my life. You can ask me questions one by one and wait for my answers. Try to adjust the recommendations based on my answers. You can also help me compare different books so that I can make the right choices. Let’s start with this first question.”</strong>",

      inputText: '',

      isLoading: false,

      tempMessage: "",
      messages: [],
      totalBooks: 5,
      books: [],
    }
  },
  computed: {
    token() {
      return Base64.decode(store.chatToken);
    },
  },
  mounted() {
    this.resetConversation();
  },
  watch: {
    inputText() {
      const self = this
      setTimeout(function () {
        self.resizeTextarea()
      }, 10);
    },
  },
  methods: {
    sendBtnTap() {
      let message = this.inputText.trim();
      if (message === '') {
        return
      }

      this.messages.push({
        role: "user",
        content: message,
        time: Math.floor(Date.now() / 1000)
      })

      this.scrollToBottom();

      this.inputText = '';
      this.resizeTextarea();

      this.request();
    },

    favoriteBtnTap(event) {
      console.log(event);
    },

    async request() {
      this.isLoading = true;
      const subThis = this;

      await fetchEventSource(this.store.aiProxy + '/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.token
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: this.messages.map((message) => {
            return {
              "role": message.role,
              "content": message.content
            }
          }),
          stream: true,
        }),
        async onopen(response) {
          if (response.ok) {
            subThis.tempMessage = "";
            return;
          }

          switch (response.status) {
            case 401 :
              alert(`Error Code: ${response.status}, invalid Authentication, please try again later.`);
              break;
            case 429 :
              alert(`Error Code: ${response.status}, rate limit reached for requests, please try again later.`);
              break;
            case 500 :
              alert(`Error Code: ${response.status}, the server had an error while processing your request, please try again later.`);
              break;
            default:
              alert(`Error Code: ${response.status}, please try again later.`);
              break;
          }
        },
        onmessage(msg) {
          if (msg.data === '[DONE]') {
            subThis.isLoading = false;
            return;
          }
          const msgData = JSON.parse(msg.data)

          const delta = msgData['choices'][0]['delta']
          const finish_reason = msgData['choices'][0]['finish_reason']

          if (finish_reason === 'stop') {
            const stopMessage = {
              "role": "assistant",
              "content": subThis.tempMessage,
              "time": Math.floor(Date.now() / 1000)
            }

            subThis.isLoading = false;
            subThis.tempMessage = "";

            subThis.messages.push(stopMessage);
            return;
          }

          if (delta['content'] !== undefined) {
            let content = delta["content"].replace(' "', '<span style=\'color: orange; border: none; background: transparent; margin-left: 2px;\' @click="favoriteBtnTap($event)"><i class=\"bi bi-star\"></i>"');
            content = content.replace('" ', '"</span> ');
            subThis.tempMessage += content;
            subThis.scrollToBottomWithoutTimer();
          }
        },
        onclose() {

        },
        onerror(err) {

        }
      })

      this.isLoading = false;
      this.scrollToBottom();

    },

    resetConversationBtnTap() {
      if (confirm('Are you sure you want to restart the conversation? This will lose all current session content.')) {
        this.resetConversation();
      }
    },

    resetConversation() {
      if (this.isLoading) {
        alert("Please wait for a complete reply.")
        return;
      }

      this.messages = [
        // {
        //   role: "assistant",
        //   content: "",
        //   time: Math.floor(Date.now() / 1000)
        // }
      ]

      this.inputText = ''
      this.resizeTextarea()
    },

    resizeTextarea() {
      this.$refs.inputTextRef.style.height = 0 + 'px';
      let height = this.$refs.inputTextRef.scrollHeight;

      if (height > 120) {
        height = 120;
      }

      this.$refs.inputTextRef.style.height = height + 'px';
    },

    scrollToBottom() {
      self = this;

      setTimeout(function () {
        const el = self.$refs.chatCanvas;
        el.scrollTop = el.scrollHeight;
      }, 10)
    },

    scrollToBottomWithoutTimer() {
      const el = this.$refs.chatCanvas;
      el.scrollTop = el.scrollHeight;
    },

    endConversationBtnTap() {
      if (confirm('Are you sure you want to end the conversation?')) {
        if (this.store.round === 1) {
          this.store.firstMessages = this.messages;
          this.store.round = 2;
          const query = {
            position: 1,
          }
          this.$router.push({path: '/survey', query: query});
        } else {
          this.store.secondMessages = this.messages;
          const query = {
            position: 2,
          }
          this.$router.push({path: '/survey', query: query});
        }
      }
    },

    exportCurrentConversationRecords() {
      // const logStr = JSON.stringify(this.messages);

      let logStr = '';
      for (const index in this.messages) {
        const message = this.messages[index];

        logStr += moment.unix(message.time).format('YYYY/MM/DD HH:mm:ss') + ' - ' + message.role + ': ' + '\n' + message.content + '\n\n';
      }


      // Copy the text inside the text field
      navigator.clipboard.writeText(logStr);

      alert('The records have been copied to the clipboard.');
    },

    formatDate(timestamp) {
      return "<p style='text-align: right; color: darkgray'>" + moment.unix(timestamp).format('HH:mm') + "</p>";
    }

  }
}
</script>


<style scoped>

.main-canvas {
  width: 100%;
  height: calc(100vh - 40px);
  overflow: hidden;
}

.navigation-bar {
  background-color: #f6f6f6;
  width: 100%;
  height: 80px;
  padding: 0 20px 0 20px;
  position: sticky;
  top: 0;
  left: 0;
}

.navigation-bar .avatar {
  position: absolute;
  margin-top: 17px;
  width: 46px;
  height: 46px;
  border-radius: 23px;
  background-color: white;
  overflow: hidden;
}

.navigation-bar .username {
  position: absolute;
  font-size: 1.2rem;
  font-weight: bold;
  height: 80px;
  line-height: 80px;
  margin-left: 60px;
}

.reset-conversation-btn {
  float: right;
  margin-top: 15px;
  height: 50px;
  border: none;

  font-size: 1.2rem;
  font-weight: 700;
  color: #3175f1;
  background-color: rgba(197, 197, 197, 0.2);
  border-radius: 5px;
}

.reset-conversation-btn:active {
  color: #2455af;
  background-color: rgba(197, 197, 197, 0.3);
}

.end-conversation-btn {
  float: right;
  margin-top: 15px;
  height: 50px;
  border: none;

  font-size: 1.2rem;
  font-weight: 700;
  color: #d50f0f;
  background-color: rgba(197, 197, 197, 0.2);
  border-radius: 5px;
}

.end-conversation-btn:active {
  color: #940b0b;
  background-color: rgba(197, 197, 197, 0.3);
}

.chat-canvas {
  width: 100%;
  height: calc(100% - 160px);
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 20px 0 40px 0;
}

.default-prompt {
  width: calc(100% - 40px);
  margin-left: 20px;
  padding: 10px;
  white-space: pre-line;
  background-color: white;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
}

.receive-canvas {
  max-width: calc(100% - 100px);
  width: fit-content;
  margin-left: 20px;
  white-space: pre-line;

  border-radius: 10px;
  padding: 10px 15px 10px 15px;
  font-weight: normal;
  word-wrap: break-word;

  background-color: white;
  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
}

.receive-end-canvas {
  max-width: calc(100% - 100px);
  width: fit-content;
  margin-left: 20px;
  white-space: pre-line;

  border-radius: 10px;
  padding: 10px 15px 10px 15px;
  font-weight: bold;
  word-wrap: break-word;

  color: #2455af;
  text-decoration: underline;

  background-color: white;
  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
}

.send-canvas {
  float: right;
  margin-right: 20px;
  max-width: calc(100% - 100px);
  width: fit-content;
  white-space: pre-line;

  border-radius: 10px;
  padding: 10px 15px 10px 15px;
  font-weight: normal;
  word-wrap: break-word;

  background-color: #e8fed7;
  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
}

.chat-input-canvas {
  background-color: #f6f6f6;
  width: 100%;
  min-height: 80px;
  position: sticky;
  bottom: 0;
  left: 0;
}

.chat-input-textarea {
  border: none;
  resize: none;

  width: calc(100% - 115px);
  height: 40px;
  font-size: 17px;
  line-height: 20px;
  padding: 10px 20px 10px 20px;
  border-radius: 25px;

  margin: 10px 5px 20px 15px;
}

.chat-send-button {
  position: absolute;
  bottom: 30px;
  border: None;
  width: 80px;
  height: 40px;
  font-size: 1.2rem;
  font-weight: 700;
  color: white;
  margin-left: 5px;

  border-radius: 20px;
  background-color: #3175f1;
}

.chat-send-button-disable {
  background-color: lightgrey;
}

.chat-send-button:active {
  background-color: #204d9b;
}

.blinking-cursor {
  color: black;
  animation: cursor-blink 1s step-end infinite;
}

@keyframes cursor-blink {
  from, to {
    color: transparent;
  }
  50% {
    color: black;
  }
}

.export-current-conversation-records {
  width: 100%;
  text-align: center;
  font-size: 0.9rem;
  font-weight: bold;
  color: #2455af;
  text-decoration: underline;
}
</style>