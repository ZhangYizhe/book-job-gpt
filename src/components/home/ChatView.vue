<template>

  <div class="section main-canvas p-0">

    <div class="navigation-bar">
      <img class="avatar" src="/slush-pana.png">
      <span class="username">
        Surprise Bot
      </span>
      <button class="reset-conversation-btn" @click="resetConversationBtnTap">開啓新對話</button>
    </div>

    <div class="chat-canvas" ref="chatCanvas" style="background-image: url('public/background.jpg');">
      <div class="columns is-mobile is-multiline">
        <div class="column is-full" v-for="message in messages">
          <div :class="[message.role === 'assistant' ? 'receive-canvas' : 'send-canvas']" v-html="message.content">
          </div>
        </div>

        <div class="column is-full" v-if="isLoading">
          <div :class="['receive-canvas']">
            <span v-html="tempMessage">

            </span>
            <span class='blinking-cursor'>▋</span>
          </div>
        </div>
      </div>
    </div>

    <div class="chat-input-canvas">
      <textarea class="chat-input-textarea" ref="inputTextRef" v-model="inputText" :placeholder="[isLoading ? '請等待完成回覆。':'請輸入內容']" @keyup.enter.exact="sendBtnTap" :disabled="isLoading"></textarea>
      <button :class="['chat-send-button', isLoading ? 'chat-send-button-disable' : '']" @click="sendBtnTap" :disabled="isLoading">發送</button>
    </div>


  </div>

</template>

<script>
import {store} from "@/data/store";
import {Base64} from "js-base64";
import { fetchEventSource } from "@microsoft/fetch-event-source"

export default {
  name: "ChatView",
  components: {},
  data() {
    return {
      store,

      inputText: '',

      isLoading: false,

      tempMessage: "",
      messages: [],
    }
  },
  computed: {
    token() {
      return Base64.decode(store.chatToken);
    }
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
      })

      this.scrollToBottom();

      this.inputText = '';
      this.resizeTextarea();

      this.request();
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
          messages: this.messages,
          stream: true,
        }),
        async onopen(response) {
          if (response.ok) {
            subThis.tempMessage = "";
          } else if (response.status >= 400 && response.status < 500) {
            alert(`Error Code: ${response.status}, please try again later.`);
          } else {
            alert("Undefined error");
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
              "content": subThis.tempMessage
            }

            subThis.isLoading = false;
            subThis.tempMessage = "";

            subThis.messages.push(stopMessage);
            return;
          }

          if (delta['content'] !== undefined) {
            subThis.tempMessage += delta["content"];
            subThis.scrollToBottomWithoutTimer();
          }
        },
        onclose() {

        },
        onerror(err) {

        }
      })

      this.isLoading = false;

    },

    resetConversationBtnTap() {
      if(confirm('你確認要重新開始對話嗎？這會丟失當前所有會話內容。')) {
        this.resetConversation();
      }
    },

    resetConversation() {
      if (this.isLoading) {
        alert("請等待完成回覆。")
        return;
      }

      this.messages = [
        {
          role: "assistant",
          content: "你好，我是 Surprise Bot，很高興為你服務！我可以根據你的需求推薦對應的內容給你，請試試看吧！\n\n例如：\n1. 請幫我爲女朋友生日挑選5本書。\n2.請你幫我推薦10首中文歌曲爲今天晚上的大學畢業歡送會。",
        }
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

  }
}
</script>


<style scoped>

.main-canvas {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
}

.navigation-bar {
  background-color: #f6f6f6;
  width: 100%;
  height: 80px;
  padding: 0 20px 0 20px;
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
  height: 80px;
  border: none;

  font-size: 1.2rem;
  font-weight: 700;
  color: #3175f1;
  background-color: transparent;
}

.reset-conversation-btn:active {
  color: #2455af;
}

.chat-canvas {
  width: 100%;
  height: calc(100vh - 148px);
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 20px 0 40px 0;
}

.receive-canvas {
  max-width: calc(100% - 100px);
  width: fit-content;
  margin-left: 20px;
  white-space: pre-line;

  border-radius: 10px;
  padding: 10px 15px 10px 15px;
  font-weight: bold;
  word-wrap: break-word;

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
  font-weight: bold;
  word-wrap: break-word;

  background-color: #e8fed7;
  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
}

.chat-input-canvas {
  background-color: #f6f6f6;
  width: 100%;
  min-height: 80px;
  position: fixed;
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
  //background-color: transparent;
  position: absolute;
  bottom: 30px;
  border: None;
  width: 80px;
  height: 40px;
  font-size: 1.2rem;
  font-weight: 700;
  color: #3175f1;
  margin-left: 5px;
}

.chat-send-button-disable {
  color: gray;
}

.chat-send-button:active {
  color: #2455af;
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

</style>