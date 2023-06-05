<template>
  <div class="container">
    <section class="hero is-fullheight">
      <div class="hero-body">
        <div class="columns  is-vcentered main-canvas">
          <div class="column">
            <div class="columns is-mobile">
              <div class="column">
                <img src="/public/endpoint-cuate.png" alt="logo" style="width: 80%">
                <p style="font-size: 1.8rem;font-weight: bold">
                  Hong Kong Baptist University
                </p>
                <p style="font-size: 1.3rem">
                  Thank you for your participation. <br>
                  The experiment is finished.
                </p>
              </div>
            </div>
          </div>
          <div class="column">
            <button class="button is-warning" style="width: 100%; font-size: 1.5rem;" @click="backBtnTap">Back to Home</button>
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
            <a href="https://www.comp.hkbu.edu.hk" target="_blank"><img src="/public/logos/comp-logo.png" alt="logo"
                                                                        style="height: 30px; margin-right: 20px"></a>
            <a href="https://hkbu.edu.hk" target="_blank"><img src="/public/logos/bu-logo.png" alt="logo"
                                                               style="height: 30px;"></a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import {store} from "@/data/store";

export default {
  name: 'EndView',
  components: {},
  data() {
    return {
      store,
    };
  },

  methods: {
    backBtnTap() {
      this.store.reset();
      this.$router.push('/');
    },
  },
}
</script>


<style scoped>
.main-canvas {
  width: 100%;
}
</style>