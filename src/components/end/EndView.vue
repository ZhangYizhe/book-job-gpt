<template>
  <div class="container">
    <section class="hero is-fullheight">
      <div class="hero-body">
        <div class="columns  is-vcentered main-canvas">
          <div class="column">
            <div class="columns is-mobile">
              <div class="column">
                <img src="/public/endpoint-cuate.png" alt="logo" style="height: 30vh">
<!--                <p style="font-size: 1.8rem;font-weight: bold">-->
<!--                  Hong Kong Baptist University-->
<!--                </p>-->
                <p style="font-size: 1.3rem; font-weight: bold">
                  Thank you for your time in participating this study! <br>
                  The experiment is finished.
                </p>
                <p v-if="prolific" style="font-weight: bold; font-size: 1.4rem; color: #204d9b">
                  Code for participants: <span style="color: red">{{ prolific }}</span>
                </p>
              </div>
            </div>
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
<!--            <a href="https://www.comp.hkbu.edu.hk" target="_blank"><img src="/public/logos/comp-logo.png" alt="logo"-->
<!--                                                                        style="height: 30px; margin-right: 20px"></a>-->
<!--            <a href="https://hkbu.edu.hk" target="_blank"><img src="/public/logos/bu-logo.png" alt="logo"-->
<!--                                                               style="height: 30px;"></a>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
    </section>
  </div>
</template>

<script>
import {useDefaultStore} from "@/data/store";

export default {
  name: 'EndView',
  components: {},
  data() {
    return {
      store:  useDefaultStore(),
      prolific: null,
    };
  },

  created() {
    // watch 路由的参数，以便再次获取数据
    this.$watch(
        () => this.$route.query,
        () => {
          this.prolific = this.$route.query.prolific;
        },
        // 组件创建完后获取数据，
        // 此时 data 已经被 observed 了
        { immediate: true }
    )
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