<template>

  <div class="container" style="box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2); margin-top: 20px; height: calc(100vh - 40px);">
    <div class="columns is-multiline is-mobile m-0">
      <div class="column is-3 p-0" style="background-color: white; border-right: 1px solid #e1e1e1; position: relative">
        <p class="pt-3 pb-3" style="color: gray; text-align: center; border-bottom: 1px solid #e1e1e1; font-size: 1.3rem; font-weight: bold; color: black">
          Task {{round}} Book List
        </p>
        <div class="pb-4" v-if="books.size > 0" style="width: 100%; height: calc(100vh - 177px); overflow-y: scroll; overflow-x: hidden">
            <div class="columns is-multiline is-mobile px-4 pt-4">
              <div class="column is-full" v-for="book in books" style="border-bottom: 1px solid #e1e1e1; word-wrap: break-word;">
                <i class="bi bi-x-circle mr-2" style="color: red; cursor: pointer" @click="disFavoriteBtnTap(book)"></i>
                <template v-for="i in bookRates[book]">
                  <i class="bi bi-star-fill" style="color: orange"></i>
                </template>
                <br>
                {{ book }}

              </div>
            </div>

            <p style="text-align: center; font-weight: bold; color: lightgrey">
              {{books.size}} / {{ totalBooks }}
            </p>
        </div>
        <div v-else>
          <p class="pt-5" style="color: gray; text-align: center">
            No books selected
          </p>
        </div>

        <div style="position: absolute; width: 100%; bottom: 20px; padding-top: 20px; border-top: 1px solid #e1e1e1; background-color: white">
          <button class="button is-link booklist-bottom-btn" style="left: 50%; transform: translateX(-50%);" @click="endConversationBtnTap" :disabled="!isCompleted && !store.debug">
            Next Step
          </button>
        </div>


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
                    Book Recommender Bot
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
                <div :class="[message.role === 'assistant' ? 'receive-canvas' : 'send-canvas', 'normal-chat-content-canvas']"
                     v-html="message.content + formatDate(message.time)">
                </div>
              </div>

              <div class="column is-full" v-if="isLoading">
                <div :class="['receive-canvas', 'temp-chat-content-canvas']">
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
                <div :class="['export-current-conversation-records']">
                  <p><span @click="exportCurrentConversationRecords" style="cursor: pointer;">Copy the current conversation log</span></p>
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

  <div class="rate-canvas" v-if="currentBookTitle">
    <div class="rate-canvas-pop">
        <p>
          <template v-if="round === 1">
            How much do you think your family member likes this book:
          </template>
          <template v-else>
            How much do you like this book:
          </template>
        </p>
        <p class="mb-3" style="text-align: center">
          <strong>
            {{ currentBookTitle }}
          </strong>
        </p>

      <div class="buttons has-addons is-centered">
        <button class="button" style="color: orange" @click="favoriteBtnTap(1)"><i class="bi bi-star-fill"></i></button>
        <button class="button" style="color: orange" @click="favoriteBtnTap(2)"><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></button>
        <button class="button" style="color: orange" @click="favoriteBtnTap(3)"><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></button>
        <button class="button" style="color: orange" @click="favoriteBtnTap(4)"><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></button>
        <button class="button" style="color: orange" @click="favoriteBtnTap(5)"><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></button>
      </div>

      <div class="buttons has-addons is-centered">
        <button class="button is-danger" @click="currentBookTitle = null">Cancel</button>
      </div>

    </div>
    <div style="width: 100%; height: 100%; background: red; background: rgba(0, 0, 0, 0.2);" @click="currentBookTitle = null">

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
      round: 1,

      inputText: '',

      isLoading: false,

      tempMessage: "",
      messages: [],
      totalBooks: 5,
      books: new Set(),
      bookRates: {},
      currentBookTitle: "",

      systemMessage: [
        {
          role: "system",
          content: 'You are a book bot. You need to follow the below steps to create your answer.\n' +
              '\n' +
              '1. When recommending a book, make sure to surround the title with the <book></book> tags. \n' +
              '2. Double-check your response before sending it to ensure that all book titles have been properly tagged. \n' +
              '3. Test your response to verify that the book titles are displaying correctly with the tags. \n' +
              '\n' +
              'For example:\n' +
              '"""\n' +
              '<book>"How Steel Was Tempered"</book>\n' +
              '<book>"The Old Man and the Sea"</book>\n' +
              'However, out of the three books I recommended, <book>"Draw Your Day: An Inspiring Guide to Keeping a Sketch Journal"</book> by Samantha Dion Baker might be the most appealing to someone who enjoys drawing.\n' +
              '"""\n' +
              '\n' +
              'Please make sure that your reply not only includes the title but also surrounds it with <book></book> tags.'
          ,
        }
      ]
    }
  },
  computed: {
    token() {
      return "";
    },

    defaultPrompt() {

      const roundStr = this.round === 1 ? 'First' : 'Second';

      const welcomeMessage = "Hi, I'm a book recommender bot based on Chat-GPT, and I'm happy to assist you! I can provide you with a book list based on your needs. Please give me a try!\nNote: \n - Please follow <strong>the " + roundStr +  " task requirement</strong> to create the book list. \n - If you want to add a book to your booklist, please click the <span style='color: orange;'><i class='bi bi-plus-circle'></i></span> icon."


      if (this.store.isPrompts) {
        return welcomeMessage + "\n\nYou may start the conversation with me in this way:\n" +
        "<strong>“I would like you to act as a personalized book recommender to help me find books as a gift for someone in my life. You can ask me questions one by one and wait for my answers. Try to adjust the recommendations based on my answers. You can also help me compare different books so that I can make the right choices. Let’s start with this first question.”</strong>"
      } else {
        return welcomeMessage
      }
    },

    isCompleted() {
      return this.books.size >= this.totalBooks;
    }
  },
  mounted() {
    window.chooseFavoriteBtnTap = this.chooseFavoriteBtnTap;
  },
  created() {
    this.$watch(
        () => this.$route.params,
        () => {
          this.round = this.$route.query.round === undefined ? 1 : parseInt(this.$route.query.round);
          this.books = this.round === 1 ? store.firstBooks : store.secondBooks;
          this.bookRates = this.round === 1 ? store.firstBookRates : store.secondBookRates;
        },
        // fetch the data when the view is created and the data is
        // already being observed
        {immediate: true}
    )
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

    chooseFavoriteBtnTap(title) {
      if (this.books.size >= this.totalBooks) {
        alert("You have already selected " + this.totalBooks + " books.")
        return
      }

      this.currentBookTitle = Base64.decode(title);
    },

    favoriteBtnTap(rate) {
      if (this.books.size >= this.totalBooks) {
        return
      }

      this.books.add(this.currentBookTitle);
      this.bookRates[this.currentBookTitle] = rate;

      this.currentBookTitle = null;
    },

    disFavoriteBtnTap(title) {
      this.books.delete(title);
    },

    async request() {
      this.isLoading = true;
      const subThis = this;

      await fetchEventSource(this.store.aiProxy + '/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // 'Authorization': 'Bearer ' + this.token
        },
        body: JSON.stringify({
          model: this.store.modelVersion,
          messages: [...this.systemMessage, ...this.messages.map((message) => {
            return {
              "role": message.role,
              "content": message.content
            }
          })],
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
          const msgData = JSON.parse(msg.data)

          const delta = msgData['choices'][0]['delta']
          // const finish_reason = msgData['choices'][0]['finish_reason']


          if (delta['content'] !== undefined) {
            let content = delta["content"]
            let tempMessage = subThis.tempMessage + content;

            const re = new RegExp("<book>(.*?)</book>", "g");
            const titles = tempMessage.match(re);

            for (const i in titles) {
              const title = titles[i].replace("<book>", "").replace("</book>", "");
              const titleEncode = Base64.encode(title);
              tempMessage = tempMessage.replaceAll(titles[i], "<span class=\'book-btn\' onclick=\'chooseFavoriteBtnTap(\"" + titleEncode + "\")\'><i class=\'bi bi-plus-circle\'></i>" + title + "</span>")
            }
            subThis.tempMessage = tempMessage;
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
      this.tempMessage = ""
      this.messages = []
      this.books = new Set()

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
      if (confirm('Are you sure you have completed the book list？')) {
        if (this.round === 1) {
          this.store.firstMessages = this.messages;
          this.store.firstBooks = this.books;
          this.store.firstBookRates = this.bookRates;

          const query = {
            position: 2,
            round: 1,
          }
          this.$router.push({path: '/survey', query: query});
        } else {
          this.store.secondMessages = this.messages;
          this.store.secondBooks = this.books;
          this.store.secondBookRates = this.bookRates;

          const query = {
            position: 2,
            round: 2,
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

.temp-chat-content-canvas :deep(.book-btn) {
  color: gray;
  font-size: 1rem;
  cursor: not-allowed;
}

.temp-chat-content-canvas :deep(.book-btn:hover) {
  color: black;
}

.normal-chat-content-canvas :deep(.book-btn) {
  color: orange;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  text-decoration: underline;
}

.normal-chat-content-canvas :deep(.book-btn:hover) {
  color: #e39402;
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

.rate-canvas {
  position: fixed;
  z-index: 1000;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
}

.rate-canvas-pop {
  border-radius: 10px;
  padding: 20px;
  background: white;
  position: absolute;
  margin-left: 50vw;
  margin-top: 50vh;
  transform: translate(-50%, -50%);
}
</style>