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
            <button class="button is-link" style="width: 100%; font-size: 1.5rem" @click="startBtnTap" :disabled="!store.isAgreeConsent">START</button>

            <label class="checkbox mt-5">
              <input type="checkbox" v-model="store.isPrompts">
              Prompts group
            </label>
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
export default {
  name: 'HomeView',
  components: {},
  data() {
    return {
      store,

      title: "Hong Kong Baptist University",
      description: "Thank you for participating in this experiment. This experiment aims to investigate whether chatbots can provide a better experience in the book recommendation task.<br><br>In this experiment, you will experience a book chatbot based on Chat-GPT. It can understand your needs by communicating with you, and recommend books to you based on your preferences.<br><br> If you would like to start the experiment, please click the <span style=\"color: #2455af; font-weight: bold\">START</span> button.",
    };
  },

  methods: {
    async startBtnTap() {
      const query = {
        round: 1,
        position: 0,
      }
      this.$router.push({path: '/survey', query: query});
    }
  },
};

</script>

<style scoped>
.main-canvas {
  width: 100%;
}
</style>