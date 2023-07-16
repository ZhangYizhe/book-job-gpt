<script setup>
const props = defineProps(['tag', 'currentItemTitle', 'currentItemRate'])

const emit = defineEmits(['changeCurrentItemRate', 'favoriteBtnTap', 'cancelBtnTap'])

function currentItemRateBtnTap(rate) {
  emit('changeCurrentItemRate', rate)
}

</script>

<template>
  <div class="rate-canvas">
    <div class="rate-canvas-pop">
      <p style="font-weight: bold; font-style: italic; color: red">
        <template v-if="tag === 'book'">
          How much would you like this book:
        </template>
        <template v-else>
          How much would you like this job:
        </template>
      </p>
      <p class="mb-3" style="text-align: left">
        <strong>
          {{ currentItemTitle }}
        </strong>
      </p>

      <div class="buttons has-addons is-centered is-hidden-mobile">
        <button :class="['button', currentItemRate === 1 ? 'is-warning' : 'is-light']" style="color: orange" @click="currentItemRateBtnTap(1)"><i class="bi bi-star-fill"></i></button>
        <button :class="['button', currentItemRate === 2 ? 'is-warning' : 'is-light']" style="color: orange" @click="currentItemRateBtnTap(2)"><i class="bi bi-star-fill"></i><i
            class="bi bi-star-fill"></i></button>
        <button :class="['button', currentItemRate === 3 ? 'is-warning' : 'is-light']" style="color: orange" @click="currentItemRateBtnTap(3)"><i class="bi bi-star-fill"></i><i
            class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></button>
        <button :class="['button', currentItemRate === 4 ? 'is-warning' : 'is-light']" style="color: orange" @click="currentItemRateBtnTap(4)"><i class="bi bi-star-fill"></i><i
            class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></button>
        <button :class="['button', currentItemRate === 5 ? 'is-warning' : 'is-light']" style="color: orange" @click="currentItemRateBtnTap(5)"><i class="bi bi-star-fill"></i><i
            class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i
            class="bi bi-star-fill"></i></button>
      </div>

      <div class="buttons is-centered is-hidden-tablet">
        <button :class="['button', currentItemRate === 1 ? 'is-warning' : 'is-light']" style="color: orange" @click="currentItemRateBtnTap(1)"><i class="bi bi-star-fill"></i></button>
        <button :class="['button', currentItemRate === 2 ? 'is-warning' : 'is-light']" style="color: orange" @click="currentItemRateBtnTap(2)"><i class="bi bi-star-fill"></i><i
            class="bi bi-star-fill"></i></button>
        <button :class="['button', currentItemRate === 3 ? 'is-warning' : 'is-light']" style="color: orange" @click="currentItemRateBtnTap(3)"><i class="bi bi-star-fill"></i><i
            class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></button>
        <button :class="['button', currentItemRate === 4 ? 'is-warning' : 'is-light']" style="color: orange" @click="currentItemRateBtnTap(4)"><i class="bi bi-star-fill"></i><i
            class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></button>
        <button :class="['button', currentItemRate === 5 ? 'is-warning' : 'is-light']" style="color: orange" @click="currentItemRateBtnTap(5)"><i class="bi bi-star-fill"></i><i
            class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i
            class="bi bi-star-fill"></i></button>
      </div>

      <div class="buttons is-centered is-hidden-mobile">
        <button class="button is-dark" @click="$emit('cancelBtnTap')">Cancel</button>
        <button class="button is-link" @click="$emit('favoriteBtnTap')" :disabled="currentItemRate === null">Submit</button>
      </div>

      <div class="buttons is-centered is-hidden-tablet">
        <button class="button is-link" @click="$emit('favoriteBtnTap')" :disabled="currentItemRate === null">Submit</button>
        <button class="button is-dark" @click="$emit('cancelBtnTap')">Cancel</button>
      </div>

    </div>
    <div style="width: 100%; height: 100%; background: rgba(0, 0, 0, 0.2);"
         @click="$emit('cancelBtnTap')">
    </div>
  </div>
</template>

<style scoped>
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