<template>
  <div class="container"
       style="box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2); margin-top: 20px; height: calc(100vh - 40px);">
    <div class="columns is-multiline is-mobile m-0">
      <!--Wish List-->
      <ChatWishListView class="column is-3 p-0" style="background-color: white; border-right: 1px solid #e1e1e1; position: relative" :store="store" :items="items" :item-rates="itemRates" :total-items="totalItems" :messages="messages" @dis-favorite-btn-tap="(title) => disFavoriteBtnTap(title)" @end-conversation-btn-tap="endConversationBtnTap" @fill-content-btn-tap="(content) => fillContentBtnTap(content)"/>

      <div class="column is-9 p-0">
        <div class="main-canvas" style="position: relative">

          <div style="position: absolute; width: 100%; height: 100%;  overflow: hidden; z-index: -1">
            <img src="/background.jpg" alt=""
                 style="width: 100%; height: 100%; object-fit: cover">
          </div>

          <div class="navigation-bar">
            <div class="avatar">
              <svg viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg" stroke-width="1.5" class="h-6 w-6"
                   role="img"><title>ChatGPT</title>
                <text x="-9999" y="-9999">ChatGPT</text>
                <path
                    d="M37.5324 16.8707C37.9808 15.5241 38.1363 14.0974 37.9886 12.6859C37.8409 11.2744 37.3934 9.91076 36.676 8.68622C35.6126 6.83404 33.9882 5.3676 32.0373 4.4985C30.0864 3.62941 27.9098 3.40259 25.8215 3.85078C24.8796 2.7893 23.7219 1.94125 22.4257 1.36341C21.1295 0.785575 19.7249 0.491269 18.3058 0.500197C16.1708 0.495044 14.0893 1.16803 12.3614 2.42214C10.6335 3.67624 9.34853 5.44666 8.6917 7.47815C7.30085 7.76286 5.98686 8.3414 4.8377 9.17505C3.68854 10.0087 2.73073 11.0782 2.02839 12.312C0.956464 14.1591 0.498905 16.2988 0.721698 18.4228C0.944492 20.5467 1.83612 22.5449 3.268 24.1293C2.81966 25.4759 2.66413 26.9026 2.81182 28.3141C2.95951 29.7256 3.40701 31.0892 4.12437 32.3138C5.18791 34.1659 6.8123 35.6322 8.76321 36.5013C10.7141 37.3704 12.8907 37.5973 14.9789 37.1492C15.9208 38.2107 17.0786 39.0587 18.3747 39.6366C19.6709 40.2144 21.0755 40.5087 22.4946 40.4998C24.6307 40.5054 26.7133 39.8321 28.4418 38.5772C30.1704 37.3223 31.4556 35.5506 32.1119 33.5179C33.5027 33.2332 34.8167 32.6547 35.9659 31.821C37.115 30.9874 38.0728 29.9178 38.7752 28.684C39.8458 26.8371 40.3023 24.6979 40.0789 22.5748C39.8556 20.4517 38.9639 18.4544 37.5324 16.8707ZM22.4978 37.8849C20.7443 37.8874 19.0459 37.2733 17.6994 36.1501C17.7601 36.117 17.8666 36.0586 17.936 36.0161L25.9004 31.4156C26.1003 31.3019 26.2663 31.137 26.3813 30.9378C26.4964 30.7386 26.5563 30.5124 26.5549 30.2825V19.0542L29.9213 20.998C29.9389 21.0068 29.9541 21.0198 29.9656 21.0359C29.977 21.052 29.9842 21.0707 29.9867 21.0902V30.3889C29.9842 32.375 29.1946 34.2791 27.7909 35.6841C26.3872 37.0892 24.4838 37.8806 22.4978 37.8849ZM6.39227 31.0064C5.51397 29.4888 5.19742 27.7107 5.49804 25.9832C5.55718 26.0187 5.66048 26.0818 5.73461 26.1244L13.699 30.7248C13.8975 30.8408 14.1233 30.902 14.3532 30.902C14.583 30.902 14.8088 30.8408 15.0073 30.7248L24.731 25.1103V28.9979C24.7321 29.0177 24.7283 29.0376 24.7199 29.0556C24.7115 29.0736 24.6988 29.0893 24.6829 29.1012L16.6317 33.7497C14.9096 34.7416 12.8643 35.0097 10.9447 34.4954C9.02506 33.9811 7.38785 32.7263 6.39227 31.0064ZM4.29707 13.6194C5.17156 12.0998 6.55279 10.9364 8.19885 10.3327C8.19885 10.4013 8.19491 10.5228 8.19491 10.6071V19.808C8.19351 20.0378 8.25334 20.2638 8.36823 20.4629C8.48312 20.6619 8.64893 20.8267 8.84863 20.9404L18.5723 26.5542L15.206 28.4979C15.1894 28.5089 15.1703 28.5155 15.1505 28.5173C15.1307 28.5191 15.1107 28.516 15.0924 28.5082L7.04046 23.8557C5.32135 22.8601 4.06716 21.2235 3.55289 19.3046C3.03862 17.3858 3.30624 15.3413 4.29707 13.6194ZM31.955 20.0556L22.2312 14.4411L25.5976 12.4981C25.6142 12.4872 25.6333 12.4805 25.6531 12.4787C25.6729 12.4769 25.6928 12.4801 25.7111 12.4879L33.7631 17.1364C34.9967 17.849 36.0017 18.8982 36.6606 20.1613C37.3194 21.4244 37.6047 22.849 37.4832 24.2684C37.3617 25.6878 36.8382 27.0432 35.9743 28.1759C35.1103 29.3086 33.9415 30.1717 32.6047 30.6641C32.6047 30.5947 32.6047 30.4733 32.6047 30.3889V21.188C32.6066 20.9586 32.5474 20.7328 32.4332 20.5338C32.319 20.3348 32.154 20.1698 31.955 20.0556ZM35.3055 15.0128C35.2464 14.9765 35.1431 14.9142 35.069 14.8717L27.1045 10.2712C26.906 10.1554 26.6803 10.0943 26.4504 10.0943C26.2206 10.0943 25.9948 10.1554 25.7963 10.2712L16.0726 15.8858V11.9982C16.0715 11.9783 16.0753 11.9585 16.0837 11.9405C16.0921 11.9225 16.1048 11.9068 16.1207 11.8949L24.1719 7.25025C25.4053 6.53903 26.8158 6.19376 28.2383 6.25482C29.6608 6.31589 31.0364 6.78077 32.2044 7.59508C33.3723 8.40939 34.2842 9.53945 34.8334 10.8531C35.3826 12.1667 35.5464 13.6095 35.3055 15.0128ZM14.2424 21.9419L10.8752 19.9981C10.8576 19.9893 10.8423 19.9763 10.8309 19.9602C10.8195 19.9441 10.8122 19.9254 10.8098 19.9058V10.6071C10.8107 9.18295 11.2173 7.78848 11.9819 6.58696C12.7466 5.38544 13.8377 4.42659 15.1275 3.82264C16.4173 3.21869 17.8524 2.99464 19.2649 3.1767C20.6775 3.35876 22.0089 3.93941 23.1034 4.85067C23.0427 4.88379 22.937 4.94215 22.8668 4.98473L14.9024 9.58517C14.7025 9.69878 14.5366 9.86356 14.4215 10.0626C14.3065 10.2616 14.2466 10.4877 14.2479 10.7175L14.2424 21.9419ZM16.071 17.9991L20.4018 15.4978L24.7325 17.9975V22.9985L20.4018 25.4983L16.071 22.9985V17.9991Z"
                    fill="currentColor"></path>
              </svg>
            </div>

            <span class="username">
                    <template v-if="tag === 'book'">
                      Book Chatbot
                    </template>
                    <template v-else>
                      Job Chatbot
                    </template>
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
                <div
                    :class="[message.role === 'assistant' ? 'receive-canvas' : 'send-canvas', 'normal-chat-content-canvas']"
                    v-html="message.content + formatDate(message.time)">
                </div>
              </div>

              <div class="column is-full" v-if="isLoading">
                <div :class="['receive-canvas', 'temp-chat-content-canvas']">
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

              <div class="column is-full" v-if="!isLoading && store.debug">
                <div :class="['export-current-conversation-records']">
                  <p><span @click="exportCurrentConversationRecords" style="cursor: pointer;">Copy the current conversation log</span>
                  </p>
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
  <template v-if="currentItemTitle">
    <ChatRateView :current-item-title="currentItemTitle" :current-item-rate="currentItemRate" @cancelBtnTap="currentItemTitle = ''; currentItemRate = null" @change-current-item-rate="changeFavoriteRate" @favorite-btn-tap="favoriteBtnTap"/>
  </template>
</template>

<script>
import {useDefaultStore} from "@/data/store";
import {Base64} from "js-base64";
import moment from "moment";
import {nextTick} from "vue";
import ChatRateView from "@/components/chat/ChatRateView.vue";
import ChatWishListView from "@/components/chat/ChatWishListView.vue";
import axios from "axios";

export default {
  name: "ChatView",
  components: {ChatWishListView, ChatRateView},
  data() {
    return {
      store: useDefaultStore(),
      round: 1,

      inputText: '',

      isLoading: false,

      originalMessage: [],
      messages: [],

      totalItems: 5,
      items: new Set(),
      itemRates: {},
      currentItemTitle: "",
      currentItemRate: null,

      systemMessage: [
        {
          role: "system",
          content: 'You are a recommendation bot. You need to follow the below steps to create your answer.\n' +
              '\n' +
              '1. When recommending an item, make sure to surround the title with the <name></name> tags. \n' +
              '2. Double-check your response before sending it to ensure that all item titles have been properly tagged. \n' +
              '3. Test your response to verify that the titles are displaying correctly with the tags. \n' +
              '\n' +
              'For example:\n' +
              '"""\n' +
              '<name>"How Steel Was Tempered"</name>\n' +
              '<name>"The Old Man and the Sea"</name>\n' +
              'However, out of the three items I recommended, <name>"Draw Your Day: An Inspiring Guide to Keeping a Sketch Journal"</name> by Samantha Dion Baker might be the most appealing to someone who enjoys drawing.\n' +
              '<name>UX Designer</name>\n' +
              '<name>Product Manager</name>\n' +
              '"""\n' +
              '\n' +
              'Please make sure that your reply not only includes the titles but also surrounds it with <name></name> tags.'
          ,
        }
      ]
    }
  },
  computed: {
    token() {
      return "";
    },

    tag() {
      return this.store.order[this.round - 1];
    },

    defaultPrompt() {

      const notes = this.tag === 'book' ? "\n- You could ask the bot for more details about a recommended item, e.g., asking the bot about what is the abstract for a book.\n- You could also ask the bot to adjust the recommendations, e.g., asking the bot about which books are about American history." : "\n- You could ask the bot for more details about a recommended item, e.g., asking the bot about what kinds of skills this job type requires.\n- You could also ask the bot to adjust the recommendations, e.g., asking the bot about what kinds of jobs for Ph.D. graduates."

      const welcomeMessage = "Hi, I'm a " + this.tag + " recommender chatbot based on ChatGPT, and I'm happy to assist you!\n\nNotes: \n - You need to choose <strong>FIVE " + (this.tag === 'book' ? 'books' : 'job types') + "</strong> for creating the wish list. \n - <strong>If you want to add a " + (this.tag === "book" ? "book" : "job type") + " to your wish list, please click the <span style='color: orange;'><i class='bi bi-plus-circle'></i></span> icon.</strong>" + (this.tag === 'job' ? '\n - This job chatbot is designed to provide recommendations for <strong>job types</strong>, not for specific job positions.' : '') + notes + "<p> - Regarding item selection:</p><img src='/book-job-gpt/chatbot/chat-note.png' alt='chat note' style='max-height: 300px'>"

      let button = ""

      if (this.originalMessage.length === 0) {
        button = "<br><div class='button mt-2 is-link' onclick=\'fillContentBtnTap(\"" + this.firstPrompt + "\")\'>Ask me in this way</div>"
      }


      if (this.store.isPrompts) {
        return welcomeMessage + "\n\n<strong>You can start the conversation with me in this way:</strong>\n" +
            "“<span>" + this.firstPrompt + "</span>”" + button

      } else {
        return welcomeMessage
      }
    },

    firstPrompt() {
      return this.tag === "book" ? "I would like you to act as a personalised book recommender to help me find books that may match my interests. You can ask me questions one by one and wait for my answers, and try to adjust your recommendations based on my answers. You can also help me compare different books so that I can make the right choices. You can ask me the first question now." : "I would like you to act as a personalised job recommender to help me find job types which suit my skills and knowledge. You can ask me questions one by one and wait for my answers, and try to adjust your recommendations based on my answers. You can also help me compare different job types so that I can make the right choices. You can ask me the first question now."
    },
  },
  mounted() {
    window.chooseFavoriteTap = this.chooseFavoriteTap;
    window.fillContentBtnTap = this.fillContentBtnTap;
  },

  created() {
    this.$watch(
        () => this.$route.params,
        () => {
          this.round = this.$route.query.round === undefined ? 1 : parseInt(this.$route.query.round);
          const tag = this.store.order[this.round - 1]

          this.items = this.round === 1 ? this.store.items[tag] : this.store.items[tag];
          this.itemRates = this.round === 1 ? this.store.itemsRates[tag] : this.store.itemsRates[tag];
        },
        // fetch the data when the view is created and the data is
        // already being observed
        {immediate: true}
    )
  },
  watch: {
    inputText() {
      const self = this
      nextTick(() => {
        self.resizeTextarea()
      })
    },
  },
  methods: {
    sendBtnTap() {
      let message = this.inputText.trim();
      if (message === '') {
        return
      }

      const userMessage = {
        role: "user",
        content: message,
        time: Math.floor(Date.now() / 1000)
      }

      this.originalMessage.push(userMessage)
      this.messages.push(userMessage)

      this.scrollToBottom();

      this.inputText = '';
      this.resizeTextarea();

      this.request();
    },

    fillContentBtnTap(content) {
      this.inputText = content;

      this.sendBtnTap();
    },

    chooseFavoriteTap(title) {
      if (this.items.size >= this.totalItems) {
        alert("You have already selected " + this.totalItems + " items. You can click the “Next Step” button.")
        return
      }

      const decodeTitle = decodeURI(Base64.decode(title));

      try {
        if (this.items.has(decodeTitle)) {
          alert('You have already selected it.')
          return;
        }
      } catch {
        // console.log('error')
      }

      this.currentItemTitle = decodeTitle;
    },

    changeFavoriteRate(rate) {
      this.currentItemRate = rate;
    },

    favoriteBtnTap() {

      if (this.currentItemRate === null) {
        return
      }

      if (this.items.size >= this.totalItems) {
        return
      }

      try {
        this.items.add(this.currentItemTitle);
        this.itemRates[this.currentItemTitle] = this.currentItemRate;
      } catch {
        this.items = new Set()
        this.itemRates = {}

        this.items.add(this.currentItemTitle);
        this.itemRates[this.currentItemTitle] = this.currentItemRate;
      }

      this.currentItemTitle = '';
      this.currentItemRate = null;
    },

    disFavoriteBtnTap(title) {
      this.items.delete(title);
    },

    async request() {
      this.isLoading = true;
      const subThis = this;

      axios.post(
          this.store.aiProxy,
          {
            messages: [...this.systemMessage, ...this.originalMessage.map((message) => {
              return {
                "role": message.role,
                "content": message.content
              }
            })],
          },
          {
            headers: {
              'Content-Type': 'application/json',
            }
          }
      ).then(function (response) {
        try {
          subThis.isLoading = false;

          const data = response.data;
          if (data.error !== undefined) {
            alert(data.error.message);
            return;
          }
          const message = data.choices[0].message;
          let content = message["content"]
          let tempMessage = content;

          const re = new RegExp("<name>(.*?)</name>", "g");
          const titles = tempMessage.match(re);

          for (const i in titles) {
            const title = titles[i].replace("<name>", "").replace("</name>", "");
            const titleEncode = Base64.encode(encodeURI(title));
            tempMessage = tempMessage.replaceAll(titles[i], "<span class=\'item-btn\' onclick=\'chooseFavoriteTap(\"" + titleEncode + "\")\'><i class=\'bi bi-plus-circle\'></i>" + title + "</span>")
          }

          subThis.originalMessage.push({
            "role": "assistant",
            "content": content,
            "time": Math.floor(Date.now() / 1000)
          });
          subThis.messages.push({
            "role": "assistant",
            "content": tempMessage,
            "time": Math.floor(Date.now() / 1000)
          });

          subThis.isLoading = false;

          subThis.scrollToBottom();
        } catch (e) {
          alert(e)
        }
      }).catch(function (error) {
        subThis.isLoading = false;
        alert(error);
      })
    },

    // resetConversationBtnTap() {
    //   if (confirm('Are you sure you want to restart the conversation? This will lose all current session content.')) {
    //     this.resetConversation();
    //   }
    // },

    // resetConversation() {
    //   if (this.isLoading) {
    //     alert("Please wait for a complete reply.")
    //     return;
    //   }
    //
    //   this.originalMessage = []
    //   this.messages = []
    //   this.items = new Set()
    //
    //   this.inputText = ''
    //   this.resizeTextarea()
    // },

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

      nextTick(() => {
        const el = self.$refs.chatCanvas;
        el.scrollTop = el.scrollHeight;
      })
    },

    // scrollToBottomWithoutTimer() {
    //   nextTick(() => {
    //     const el = this.$refs.chatCanvas;
    //     el.scrollTop = el.scrollHeight;
    //   })
    // },

    endConversationBtnTap() {
      const confirmStr = this.tag === "book" ? "Are you sure you have found all the suitable books in this list?" : "Are you sure you have found all the suitable job types in this list?"
      if (confirm(confirmStr)) {
        const tag = this.store.order[this.round - 1]

        this.store.messages[tag] = this.originalMessage;
        this.store.items[tag] = this.items;
        this.store.itemsRates[tag] = this.itemRates;

        let query = {}

        if (this.round === 1) {
          query = {
            position: 2,
            round: 1,
          }
        } else {
          query = {
            position: 2,
            round: 2,
          }
        }
        this.$router.push({path: '/survey', query: query});
      }
    },

    exportCurrentConversationRecords() {
      let logStr = '';
      for (const index in this.originalMessage) {
        const message = this.originalMessage[index];

        logStr += moment.unix(message.time).format('YYYY/MM/DD HH:mm:ss') + ' - ' + message.role + ': ' + '\n' + message.content + '\n\n';
      }

      // Copy the text inside the text field
      navigator.clipboard.writeText(logStr)
          .then(() => {
            alert("The records have been copied to the clipboard.");
          })
          .catch(() => {
            alert("something went wrong");
          });
    },

    formatDate(timestamp) {
      return "<p style='text-align: right; color: darkgray'>" + moment.unix(timestamp).format('HH:mm') + "</p>";
    },

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
  padding: 5px;
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
  box-shadow:0 0 5px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
}

.default-prompt :deep(.item-btn) {
  color: orange;
  font-size: 1rem;
  cursor: pointer;
//text-decoration: underline;
}

.default-prompt :deep(.item-btn:hover) {
  color: #d98e06;
}

.temp-chat-content-canvas :deep(.item-btn) {
  color: rgb(128, 128, 128);
  font-size: 1rem;
  cursor: not-allowed;
}

.temp-chat-content-canvas :deep(.item-btn:hover) {
  color: black;
}

.normal-chat-content-canvas :deep(.item-btn) {
  color: orange;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
//text-decoration: underline;
}

.normal-chat-content-canvas :deep(.item-btn:hover) {
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
  box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.2);
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
//text-decoration: underline; background-color: white;
  box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.2);
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
  box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.2);
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
//text-decoration: underline;
}
</style>