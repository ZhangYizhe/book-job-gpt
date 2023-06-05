<template>
  <div class="container">
    <section class="hero is-fullheight">
      <div class="hero-body">
        <div class="columns  is-vcentered main-canvas">
          <div class="column">
            <div class="columns is-mobile">
              <div class="column">
                <img src="/public/logos/PI-Lab-Logo-Small.jpg" alt="logo" style="width: 50%">
                <p style="font-size: 1.8rem;font-weight: bold">
                  Hong Kong Baptist University
                </p>
                <p style="font-size: 1.3rem">
                  Welcome to participate this research activity. <br> If you would like to start the experiment, please click the <span style="color: #2455af; font-weight: bold">START</span> button.
                </p>
              </div>
            </div>
          </div>
          <div class="column">
            <button class="button is-link" style="width: 100%; font-size: 1.5rem" @click="startBtnTap">START</button>
          </div>
        </div>
      </div>
      <div class="hero-foot pb-5">
        <div class="container is-max-widescreen">
          <div class="content has-text-centered">
            <p>
              Copyright © 2023 <a href="https://hci.comp.hkbu.edu.hk"><strong>PI Lab</strong></a>. All Rights Reserved.
            </p>
            <p>
              <a href="https://bupdpo.hkbu.edu.hk/policies-and-procedures/pps-pics/" target="_blank">Privacy Policy</a> |
              <a href="https://storyset.com" target="_blank">Illustrations by Storyset</a>
            </p>
            <a href="https://www.comp.hkbu.edu.hk" target="_blank"><img src="/public/logos/comp-logo.png" alt="logo" style="height: 30px; margin-right: 20px"></a>
            <a href="https://hkbu.edu.hk" target="_blank"><img src="/public/logos/bu-logo.png" alt="logo" style="height: 30px;"></a>
          </div>
        </div>
      </div>
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
    };
  },

  methods: {
    async startBtnTap() {
      const query = {
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