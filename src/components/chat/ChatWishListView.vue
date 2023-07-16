<script setup>
import 'animate.css'
import {computed, onMounted, onUnmounted, ref} from "vue";

const props = defineProps(['store', 'items', 'itemRates', 'totalItems', 'messages'])
const emit = defineEmits(['disFavoriteBtnTap', 'endConversationBtnTap', 'fillContentBtnTap'])

const isCompleted = computed(() => {
  return props.items.size >= props.totalItems;
})

const isStartConversation = computed(() => {
  return props.messages.length > 1;
})

const wishlistBottomCanvas = ref(null)
const wishlistBottomCanvasHeight =ref(0)

function handleResize() {
  wishlistBottomCanvasHeight.value = wishlistBottomCanvas.value.offsetHeight;
}

onMounted(() => {
  handleResize()
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})

</script>

<template>
  <div>
    <p class="pt-3 pb-3"
       style="color: gray; text-align: center; border-bottom: 1px solid #e1e1e1; font-size: 1.3rem; font-weight: bold; color: black">
      Wish List
    </p>
    <div class="pb-4" v-if="items.size > 0"
         :style="['width: 100%; overflow-y: scroll; overflow-x: hidden', 'height: calc(100vh - 95px - ' + wishlistBottomCanvasHeight + 'px);']">
      <div class="columns is-multiline is-mobile px-4 pt-4">
        <div class="column is-full" v-for="item in items"
             style="border-bottom: 1px solid #e1e1e1; word-wrap: break-word;">
          <i class="bi bi-x-circle mr-2" style="color: red; cursor: pointer" @click="emit('disFavoriteBtnTap', item)"></i>
          <template v-for="i in itemRates[item]">
            <i class="bi bi-star-fill" style="color: orange"></i>
          </template>
          <br>
          {{ item }}
        </div>
      </div>

      <p style="text-align: center; font-weight: bold; color: lightgrey">
        {{ items.size }} / {{ totalItems }}
      </p>
    </div>
    <div v-else>
      <p class="pt-5" style="color: gray; text-align: center">
        No items selected
      </p>
    </div>

    <div ref="wishlistBottomCanvas"
         style="position: absolute; width: 100%; bottom: 0; padding-bottom: 20px; border-top: 1px solid #e1e1e1; background-color: white; overflow: scroll">
      <Transition enter-active-class="animate__animated animate__fadeInLeft" leave-active-class="animate__animated animate__fadeOutRight">
        <div class="px-3 py-3" v-if="isStartConversation">
          If the items recommended by the chatbot cannot be selected, please
          <span style="cursor: pointer; color: orange;" @click="emit('fillContentBtnTap', 'Please surround each item in your response with <name></name> tags.')">click here.</span>
        </div>
      </Transition>

      <div class="mb-3" style="border-bottom: 1px solid #e1e1e1; width: 100%" v-if="isStartConversation"></div>

      <button :class="['button is-link', isStartConversation ? '' : 'mt-3']" style="left: 50%; transform: translateX(-50%);" @click="emit('endConversationBtnTap')"
              :disabled="!isCompleted && !store.debug">
        Next Step
      </button>
    </div>


  </div>
</template>

<style scoped>

</style>