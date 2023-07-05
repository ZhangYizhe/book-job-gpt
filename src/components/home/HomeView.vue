<template>
  <div class="container">
    <section class="hero is-fullheight">
      <div class="hero-body">
        <div class="columns is-multiline main-canvas">
          <div class="column is-full">
            <div class="columns is-mobile">
              <div class="column">
                <img src="/public/logos/PI-Lab-Logo-Small.jpg" alt="logo" style="height: 10vh">
                <p style="font-size: 1.8rem;font-weight: bold" v-html="title">

                </p>
                <p style="font-size: 1.3rem" v-html="description">

                </p>
              </div>
            </div>
          </div>
          <div class="column is-full">
            <label class="checkbox mb-5">
              <input type="checkbox" v-model="store.isAgreeConsent">
              I indicate that I am 18 years of age or older with full knowledge of all the foregoing; I have read the information presented in this <a href="/bookbot/InformedConsentStatement.pdf" target="_blank">Informed Consent Statement</a> about the study. I agree of my own free will to participate in this study.
            </label>
            <button :class="['button is-link', isLoading ? 'is-loading' : '']" style="width: 100%; font-size: 1.5rem" @click="startBtnTap" :disabled="!store.isAgreeConsent">START</button>

            <label class="checkbox mt-5 mb-3">
              <input type="checkbox" v-model="store.isPrompts">
              Prompts group
            </label>

            <p style=''>[1] ChatGPT - ChatGPT is an advanced language model developed by OpenAI. ChatGPT has been trained on a vast amount of text data from the internet, allowing it to provide informative and engaging responses to various questions or prompts.</p>
          </div>
        </div>
      </div>
<!--      <div class="hero-foot pb-5">-->
<!--        <div class="container is-max-widescreen">-->
<!--          <div class="content has-text-centered">-->
<!--            <p>-->
<!--              Copyright © 2023 <a href="https://hci.comp.hkbu.edu.hk"><strong>PI Lab</strong></a>. All Rights Reserved.-->
<!--            </p>-->
<!--            <p>-->
<!--              <a href="https://bupdpo.hkbu.edu.hk/policies-and-procedures/pps-pics/" target="_blank">Privacy Policy</a> |-->
<!--              <a href="https://storyset.com" target="_blank">Illustrations by Storyset</a>-->
<!--            </p>-->
<!--            <a href="https://www.comp.hkbu.edu.hk" target="_blank"><img src="/public/logos/comp-logo.png" alt="logo" style="height: 30px; margin-right: 20px"></a>-->
<!--            <a href="https://hkbu.edu.hk" target="_blank"><img src="/public/logos/bu-logo.png" alt="logo" style="height: 30px;"></a>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
    </section>
  </div>
</template>

<script>
import {store} from "@/data/store";
import { doc, getDoc, updateDoc } from "firebase/firestore";

export default {
  name: 'HomeView',
  components: {},
  data() {
    return {
      store,
      db: store.db,
      isLoading: true,

      title: "Hong Kong Baptist University",
      description: "Thank you for participating in this experiment! This experiment aims to investigate whether a chatbot based on ChatGPT<small>[1]</small> can provide a satisfying user experience in accomplishing two tasks:  book recommendation task and job recommendations task.<br><br>In this experiment, you will use a recommender chatbot based on ChatGPT. It may understand your needs by communicating with you, and recommend books (or job titles) to you (the order of the two recommendation tasks will be randomly shuffled).<br><br> If you would like to start the experiment, please click the <span style=\"color: #2455af; font-weight: bold\">START</span> button.",
    };
  },

  mounted() {
    this.initialize();
  },

  methods: {
    startBtnTap() {
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

        let visitCount = parseInt(info["visitCount"]) + 1;
        this.store.isPrompts = visitCount % 2 === 0;
        await updateDoc(docRef, {
          visitCount: visitCount,
        })

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