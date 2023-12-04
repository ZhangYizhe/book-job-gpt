<script setup>
import _records from '/public/records/_records_2.csv'
import {computed, onMounted, reactive, ref} from "vue";
import moment from "moment";

const records = ref([])

const filterRecords = computed(() => {
  let _records = records.value;
  _records = _records.filter((record) => {
    if (isPrompts.value === null) {
      return true
    }
    return record.basic.isPrompts === isPrompts.value;
  });

  return _records;
})

const currentChat = ref(null)
const isPrompts = ref(null)
const isBook = ref(true)

const isActivityIDDropdown = ref(false)

onMounted(() => {
  _records.forEach((record, index) => {
    const _id = record["__id__"];
    const id = index + 1;
    const basic = JSON.parse(record.basic)

    const chat = JSON.parse(record.chat)
    chat.items = JSON.parse(chat.items)
    chat.itemsRates = JSON.parse(chat.itemsRates)
    chat.messages = JSON.parse(chat.messages)

    const data = JSON.parse(record.data)
    data.interviewQuestionnaire = JSON.parse(data.interviewQuestionnaire)
    data.postQuestionnaires = JSON.parse(data.postQuestionnaires)
    data.preQuestionnaire = JSON.parse(data.preQuestionnaire)
    data.scenarioQuestionnaires = JSON.parse(data.scenarioQuestionnaires)

    const startDate = record.startDate
    const endDate = record.endDate

    records.value.push({
      id: id,
      basic: basic,
      chat: chat,
      data: data,
      startDate: startDate,
      endDate: endDate,
    })
  })
})

function randomChooseChat() {
  const index = Math.floor(Math.random() * 100);
  const record = records.value[index];
  chooseChat(record);
}

function chooseChat(record) {
  currentChat.value = null;
  currentChat.value = {
    id: record.id,
    isPrompts: record.basic.isPrompts,
    items: record.chat.items,
    itemsRates: record.chat.itemsRates,
    messages: record.chat.messages,
  }
}

function formatDate(timestamp) {
  return "<p style='text-align: right; color: darkgray'>" + moment.unix(timestamp).format('HH:mm') + "</p>";
}

</script>

<template>
  <div class="section" @mouseup="isActivityIDDropdown = false">
    <div class="container">
      <div class="columns">
        <div class="column is-narrow">
          <div class="field has-addons">
            <p class="control">
              <button :class="['button', 'is-link']" @click="randomChooseChat">
                <span>Random</span>
              </button>
            </p>
          </div>
        </div>

        <div class="column is-narrow">
          <div class="field has-addons">
            <p class="control">
              <a class="button is-static">
                Has Prompts
              </a>
            </p>
            <p class="control">
              <button :class="['button', isPrompts === null ? 'is-link' : '']" @click="isPrompts = null; currentChat = null">
                <span>All</span>
              </button>
            </p>
            <p class="control">
              <button :class="['button', isPrompts ? 'is-link' : '']" @click="isPrompts = true; currentChat = null">
                <span>Yes</span>
              </button>
            </p>
            <p :class="['control']">
              <button :class="['button', isPrompts === false ? 'is-link' : '']" @click="isPrompts = false; currentChat = null">
                <span>No</span>
              </button>
            </p>
          </div>
        </div>

        <div class="column is-narrow">
          <div class="field has-addons">
            <p class="control">
              <a class="button is-static">
                Choose Participant ID
              </a>
            </p>
            <p class="control">
              <div :class="['dropdown', isActivityIDDropdown ? 'is-active' : '']">
                <div class="dropdown-trigger">
                  <button class="button" aria-haspopup="true" aria-controls="dropdown-menu" @click="isActivityIDDropdown = !isActivityIDDropdown">
                    <template v-if="currentChat">
                      <span>{{ currentChat.id }}</span>
                    </template>
                    <template v-else>
                      <span>Choose</span>
                    </template>
                    <span class="icon is-small"><i class="fas fa-angle-down" aria-hidden="true"></i></span>
                  </button>
                </div>
                <div class="dropdown-menu" id="dropdown-menu" role="menu">
                  <div class="dropdown-content" style="max-height: 400px; overflow: scroll">
                    <a :class="['dropdown-item', (currentChat !== null && currentChat.id === record.id) ? 'is-active' : '']" v-for="record in filterRecords" @click="chooseChat(record)">
                      {{ record.id }}
                    </a>
                  </div>
                </div>
              </div>
            </p>
          </div>
        </div>

        <div class="column">
          <div class="field has-addons">
            <p class="control">
              <a class="button is-static">
                Domain
              </a>
            </p>
            <p class="control">
              <button :class="['button', isBook ? 'is-link' : '']" @click="isBook = true">
                <span>Book</span>
              </button>
            </p>
            <p :class="['control']">
              <button :class="['button', !isBook ? 'is-link' : '']" @click="isBook = false">
                <span>Job</span>
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="section pt-0" @mouseup="isActivityIDDropdown = false">
    <div class="container" v-if="currentChat">
      <div>
        <table class="table mb-3">
          <thead>
          <tr>
            <td>
              Title
            </td>
            <td>
              Rate
            </td>
          </tr>
          </thead>
          <tr v-for="(rate, item) in currentChat.itemsRates[isBook ? 'book' : 'job']">
            <td>
              {{ item }}
            </td>
            <td>
              {{rate}}
            </td>
          </tr>
        </table>
      </div>
      <div class="modal-card-head">
        <p class="modal-card-title">Chat {{ currentChat.id }} - {{ currentChat.isPrompts === true ? 'Has Prompts' : 'No Prompts' }}</p>
      </div>
      <div class="modal-card-body">
        <div class="columns is-multiline is-mobile" style="padding: 10px">
          <p class="title">
            {{ isBook ? 'book' : 'job' }}
          </p>
          <div class="columns is-multiline is-mobile">
            <div class="column is-full" v-for="message in currentChat.messages[isBook ? 'book' : 'job']">
              <div
                  :class="[message.role === 'assistant' ? 'receive-canvas' : 'send-canvas', 'normal-chat-content-canvas']"
                  v-html="message.content + formatDate(message.time)">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container" v-else>
      <p>Please choose a participant ID first.</p>
    </div>
  </div>

</template>

<style scoped>
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
  font-weight: normal;
  word-wrap: break-word;

  background-color: #e8fed7;
  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
}
</style>