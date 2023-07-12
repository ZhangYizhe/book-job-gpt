<template>
  <div class="container">
    <section class="hero is-fullheight">
      <div class="hero-body">
        <div class="columns is-multiline main-canvas">
          <div class="column is-full">
            <div class="columns is-mobile">
              <div class="column">
                <p style="font-size: 1.8rem;font-weight: bold; margin-bottom: 20px; text-align: center" v-html="title"></p>
                <p style="font-size: 1.3rem" v-html="description"></p>
              </div>
            </div>
          </div>
          <div class="column is-full">
            <label class="checkbox mb-5">
              <input type="checkbox" v-model="store.isAgreeConsent">
              I indicate that I am 18 years of age or older with full knowledge of all the foregoing; I have read the information presented in this <a href="/InformedConsentStatement.pdf" target="_blank">Informed Consent Statement</a> about the study. I agree of my own free will to participate in this study.
            </label>
            <button :class="['button is-link', isLoading ? 'is-loading' : '']" style="width: 100%; font-size: 1.5rem" @click="startBtnTap" :disabled="!store.isAgreeConsent || isLoading">START</button>

            <label class="checkbox mt-5 mb-3" v-if="store.debug">
              <input type="checkbox" v-model="store.isPrompts">
              Prompts group
            </label>
            <label class="checkbox mt-5 mb-3" v-else>
<!--              <template v-if="store.isPrompts">-->
<!--                Group A-->
<!--              </template>-->
<!--              <template v-else>-->
<!--                Group B-->
<!--              </template>-->
            </label>
          </div>
        </div>
      </div>
      <div class="hero-foot pb-5">
        <div class="container is-max-widescreen">
          <div class="content has-text-centered">
            <a href="https://hci.comp.hkbu.edu.hk" target="_blank"><img src="/public/logos/PI-Lab-Logo-Small.jpg" alt="logo" style="height: 30px; margin-right: 20px"></a>
            <a href="https://www.comp.hkbu.edu.hk" target="_blank"><img src="/public/logos/comp-logo.png" alt="logo" style="height: 30px; margin-right: 20px"></a>
            <a href="https://hkbu.edu.hk" target="_blank"><img src="/public/logos/bu-logo.png" alt="logo" style="height: 30px;"></a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { doc, getDoc, updateDoc } from "firebase/firestore";
import {useDefaultStore} from "@/data/store";

export default {
  name: 'HomeView',
  components: {},
  data() {
    return {
      store:  useDefaultStore(),
      db: null,
      isLoading: true,

      startCount: 0,
      bookNum: 0,
      jobNum: 0,

      title: "Experiment on Recommender Bots based on ChatGPT",
      description: "Thank you for participating in this experiment! This experiment aims to investigate whether a chatbot based on ChatGPT can provide a satisfying user experience in accomplishing two tasks:  book recommendation task and job recommendations task.<br><small style='font-style: italic; color: #2455af'><strong style='color: #2455af''>Note:</strong> ChatGPT is an AI language model developed by OpenAI. It is designed to generate human-like responses in text-based conversations. ChatGPT uses deep learning techniques to produce language-based conversations and is capable of engaging in dynamic and interactive exchanges with users.</small><br><br>In this experiment, you will use a recommender chatbot based on ChatGPT. It could understand your needs by communicating with you, and make recommendations accordingly."

          + "<p style='padding-top: 10px; padding-bottom: 10px; font-size: 1.0rem'><span style='font-size: 1.3rem;'>There are six steps in this experiment (lasting around 20-30 minutes):</span>"

          + "<br>&nbsp;&nbsp;&nbsp;&nbsp;Step 1: Fill out the pre-study questionnaire."

          + "<br>&nbsp;&nbsp;&nbsp;&nbsp;Step 2: Read the first task and complete the related quiz, then choose five items to create the first wish list by talking with the chatbot."

          + "<br>&nbsp;&nbsp;&nbsp;&nbsp;Step 3: Fill out the experience questionnaire for the first task."

          + "<br>&nbsp;&nbsp;&nbsp;&nbsp;Step 4: Read the second task and complete the related quiz, then choose five items to create the second wish list by talking with the chatbot."

          + "<br>&nbsp;&nbsp;&nbsp;&nbsp;Step 5: Fill out the experience questionnaire for the second task."

          + "<br>&nbsp;&nbsp;&nbsp;&nbsp;Step 6: Fill out the open-ended questionnaire."

          + "</p> If you would like to start the experiment, please click the <span style=\"color: #2455af; font-weight: bold\">START</span> button.",
    };
  },

  mounted() {
    this.store.$reset();

    this.db = this.store.db;

    this.initialize();
  },

  methods: {
    async startBtnTap() {
      this.isLoading = true;

      const docRef = doc(this.db, "basic", "info");
      await updateDoc(docRef, {
        startCount: this.startCount,
        bookNum: this.bookNum,
        jobNum: this.jobNum,
      })

      this.store.startDate = Date.now();

      const query = {
        round: 1,
        position: 0,
      }
      this.$router.push({path: '/survey', query: query});
    },

    async initialize() {
      this.shuffle(this.store.order);

      // getOrder
      const docRef = doc(this.db, "basic", "info");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const info = docSnap.data();
        this.store.elecoxyKey = info["elecoxyKey"];

        this.bookNum = parseInt(info["bookNum"]);
        this.jobNum = parseInt(info["jobNum"]);

        if (this.bookNum === this.jobNum) {
          this.shuffle(this.store.order);
          if (this.store.order[0] === 'book') {
            this.bookNum += 1;
          } else {
            this.jobNum += 1;
          }
        } else if (this.bookNum > this.jobNum) {
          this.store.order = ['job', 'book']
          this.jobNum += 1;
        } else {
          this.store.order = ['book', 'job']
          this.bookNum += 1;
        }

        this.startCount = parseInt(info["startCount"]) + 1;
        this.store.isPrompts = this.startCount % 2 === 0;

        this.isLoading = false;
      } else {
        alert('Sorry, unable to start the experiment, please refresh the page and try again later!');
      }

    },
    shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
  },
};
</script>

<style scoped>
.main-canvas {
  width: 100%;
}
</style>