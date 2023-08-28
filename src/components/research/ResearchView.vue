<script setup>
import _records from '/public/records/_records.csv'
import {onMounted, ref} from "vue";
import moment from "moment/moment";

const isExpandBasic = ref(false)
const isPreQuestionnaire = ref(false)
const isShowProlificId = ref(false)
const isShowItems = ref(false)
const isShowChatStatistics = ref(true)
const isShowPostQuestionnaires = ref(false)
const isShowOpenEndedQuestionnaire = ref(false)

const records = ref([])
const currentChat = ref(null)
const chatStatistics = ref([])

function popChatModal(id, messages) {
  currentChat.value = null;
  currentChat.value = {
    id: id,
    messages: messages,
  }
}

function formatDate(timestamp) {
  return "<p style='text-align: right; color: darkgray'>" + moment.unix(timestamp).format('HH:mm') + "</p>";
}

function timestamp2Date(timestamp) {
  return new Date(parseInt(timestamp)).toLocaleString();
}

function timestamp2DurationMinutesAndSeconds(start, end) {
  const duration = (end - start) / 1000;
  const minutes = (duration / 60).toFixed(0);
  const seconds = (duration % 60).toFixed(0);
  return  "00:" + (minutes < 10 ? '0' + minutes.toString() : minutes) + ":" + (seconds < 10 ? '0' + seconds.toString() : seconds);
}

onMounted(() => {
  _records.forEach((record) => {
    const id = record["__id__"]
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

  for (let i = 0; i < records.value.length; i++) {
    const record = records.value[i]
    const chat = record.chat
    const messages = chat.messages

    const book = messages['book']
    const job = messages['job']

    let bookDuration = 0
    let jobDuration = 0

    let bookTurns = 0
    let jobTurns = 0

    let bookWords = 0
    let jobWords = 0

    if (book.length > 1) {
      bookDuration = book[book.length - 1].time - book[0].time

      book.forEach((message) => {
        if (message.role === 'user') {
          bookTurns += 1
          bookWords += message.content.split(' ').length
        }
      })
    }

    if (job.length > 1) {
      jobDuration = job[job.length - 1].time - job[0].time

      job.forEach((message) => {
        if (message.role === 'user') {
          jobTurns += 1
          jobWords += message.content.split(' ').length
        }
      })
    }

    chatStatistics.value.push({
      id: i + 1,
      bookDuration: bookDuration,
      bookTurns: bookTurns,
      bookWords: bookWords,
      jobDuration: jobDuration,
      jobTurns: jobTurns,
      jobWords: jobWords,
    })
  }

})


</script>

<template>
<div class="container">
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img src="/public/logos/PI-Lab-Logo-Small.jpg" height="28">
      </a>

      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasic">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasic" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item is-active">
          Research
        </a>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">

        </div>
      </div>
    </div>
  </nav>
  <div class="columns is-mobile is-multiline mt-3">
    <div class="column is-full">
      <div class="columns is-mobile is-multiline px-3">
        <div class="column is-full">
          <span class="title">Basic</span>
        </div>
        <div class="column is-full">
          <p class="mb-2">
            <strong>Total</strong>: {{ records.length }}
          </p>
          <p>
            <strong>isPrompts</strong>: {{ records.filter(record => record.basic.isPrompts).length }}
          </p>
          <p class="mb-2">
            <strong>noPrompts</strong>: {{ records.filter(record => !record.basic.isPrompts).length }}
          </p>
          <p>
            <strong>Book Start</strong>: {{ records.filter(record => record.basic.order[0] === "book").length }}
          </p>
          <p>
            <strong>Job Start</strong>: {{ records.filter(record => record.basic.order[0] === "job").length }}
          </p>
        </div>
        <div class="column is-full">
          <button :class="['button', isExpandBasic ? 'is-light' : '']" @click="isExpandBasic = !isExpandBasic">{{ isExpandBasic ? 'Hidden' : 'Show' }} Details</button>
        </div>
        <div class="column" v-if="isExpandBasic">
          <table class="table is-bordered is-striped is-fullwidth is-hoverable">
            <thead>
            <th>id</th>
            <th>isPrompts</th>
            <th>order</th>
            <th>start</th>
            <th>end</th>
            <th>duration (Format)</th>
            <th>duration (seconds)</th>
            </thead>
            <tbody>
            <tr v-for="(record, index) in records">
              <th>{{ index + 1 }}</th>
              <td>{{ record.basic.isPrompts }}</td>
              <td>{{ record.basic.order }}</td>
              <td>{{ timestamp2Date(record.startDate) }}</td>
              <td>{{ timestamp2Date(record.endDate) }}</td>
              <td>{{ timestamp2DurationMinutesAndSeconds(parseInt(record.startDate), parseInt(record.endDate)) }}</td>
              <td>{{ ((parseInt(record.endDate) -  parseInt(record.startDate)) / 1000).toFixed(0) }}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="column is-full p-0">
      <hr class="m-2">
    </div>


    <div class="column is-full">
      <div class="columns is-mobile is-multiline px-3">
        <div class="column is-full">
          <span class="title">Pre-Questionnaire</span>
        </div>
        <div class="column is-full">
          <div class="buttons">
            <button :class="['button', isPreQuestionnaire ? 'is-light' : '']" @click="isPreQuestionnaire = !isPreQuestionnaire">{{ isPreQuestionnaire ? 'Hidden' : 'Show' }} Details</button>
            <button :class="['button', isShowProlificId ? 'is-light' : '']" @click="isShowProlificId = !isShowProlificId">{{ isShowProlificId ? 'Hidden' : 'Show' }} Prolific ID</button>
          </div>
        </div>
        <div class="column table-container" v-if="isPreQuestionnaire">
          <table class="table is-bordered is-striped is-fullwidth is-hoverable">
            <thead>
            <th>id</th>
            <th v-if="isShowProlificId">Prolific ID</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Education</th>
            <th>Country/Region</th>
            <th>Job</th>
            <th>Familiar</th>
            <th>Frequently</th>
            <th>Trust new technology</th>
            <th>Trusting someone difficult</th>
            <th>Confident new technology</th>
            <th>ChatGPT expert</th>
            <th>ChatGPT knowledgeable</th>
            <th>ChatGPT extensive experience</th>
            </thead>
            <tbody>
            <tr v-for="(record, index) in records">
              <th>{{ index + 1 }}</th>
              <template v-for="question in record.data.preQuestionnaire">
                <td v-if="isShowProlificId === true && question.id === 1">{{ question.value }}</td>
                <td v-else-if="question.id !== 1">
                  <template v-if="question.id === 3">
                    {{ question.value === 1 ? 'Female' : (question.value === 2 ? 'Male' : 'Other') }}
                  </template>
                  <template v-else>
                    {{ question.value }}
                  </template>
                </td>
              </template>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="column is-full p-0">
      <hr class="m-2">
    </div>


    <div class="column is-full">
      <div class="columns is-mobile is-multiline px-3">
        <div class="column is-full">
          <span class="title">Chatbot</span>
        </div>
        <div class="column is-full">
          <div class="buttons">
            <button :class="['button', isShowItems ? 'is-light' : '']" @click="isShowItems = !isShowItems">{{ isShowItems ? 'Hidden' : 'Show' }} Details</button>
          </div>
        </div>
        <div class="column table-container" v-if="isShowItems">
          <table class="table is-bordered is-striped is-fullwidth is-hoverable">
            <thead>
            <th>id</th>
            <th>Items</th>
            <th>Items Rate</th>
            <th>Education</th>
            </thead>
            <tbody>
            <tr v-for="(record, index) in records">
              <th>{{ index + 1 }}</th>
              <td>
                <p>Book:</p>
                <p v-for="(book, index) in record.chat.items['book']">
                  {{index + 1}}. {{book}}
                </p>
                <br>
                <p>Job:</p>
                <p v-for="(job, index) in record.chat.items['job']">
                  {{index + 1}}. {{job}}
                </p>
              </td>
              <td>
                <p>Book:</p>
                <p v-for="(rate, title) in record.chat.itemsRates['book']">
                  {{title}} | {{rate}}
                </p>
                <br>
                <p>Job:</p>
                <p v-for="(rate, title) in record.chat.itemsRates['job']">
                  {{title}} | {{rate}}
                </p>
              </td>
              <td>
                <div class="button is-text" @click="popChatModal( index + 1, record.chat.messages)">
                  Chat Details
                </div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="column is-full p-0">
      <hr class="m-2">
    </div>

    <div class="column is-full">
      <div class="columns is-mobile is-multiline px-3">
        <div class="column is-full">
          <span class="title">Chat Statistics</span>
        </div>
        <div class="column is-full">
          <button :class="['button', isShowChatStatistics ? 'is-light' : '']" @click="isShowChatStatistics = !isShowChatStatistics">{{ isShowChatStatistics ? 'Hidden' : 'Show' }} Details</button>
        </div>
        <div class="column" v-if="isShowChatStatistics">
          <table class="table is-bordered is-striped is-fullwidth is-hoverable">
            <thead>
            <th>id</th>
            <th>book.turns</th>
            <th>book.words</th>
            <th>book.duration</th>
            <th>job.turns</th>
            <th>job.words</th>
            <th>job.duration</th>
            </thead>
            <tbody>
            <tr v-for="(item) in chatStatistics">
              <th>{{ item.id }}</th>
              <td>{{ item.bookTurns }}</td>
              <td>{{ item.bookWords }}</td>
              <td>{{ item.bookDuration }}</td>
              <td>{{ item.jobTurns }}</td>
              <td>{{ item.jobWords }}</td>
              <td>{{ item.jobDuration }}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="column is-full p-0">
      <hr class="m-2">
    </div>

    <div class="column is-full">
      <div class="columns is-mobile is-multiline px-3">
        <div class="column is-full">
          <span class="title">Post Questionnaire</span>
        </div>
        <div class="column is-full">
          <div class="buttons">
            <button :class="['button', isShowPostQuestionnaires ? 'is-light' : '']" @click="isShowPostQuestionnaires = !isShowPostQuestionnaires">{{ isShowPostQuestionnaires ? 'Hidden' : 'Show' }} Details</button>
          </div>
        </div>
        <div class="column table-container" v-if="isShowPostQuestionnaires">
          <template v-for="tag in ['book', 'job']">
            <p class="subtitle">
              {{tag === 'book' ? 'Book' : 'Job'}}
            </p>
            <table class="table is-bordered is-striped is-fullwidth is-hoverable" v-if="records.length > 0">
              <thead>
              <th>id</th>
              <th v-for="question in records[0].data.postQuestionnaires[tag]">
                {{question.id}}. {{ question.title }}
              </th>
              </thead>
              <tbody>
              <tr v-for="(record, index) in records">
                <th>{{ index + 1 }}</th>
                <template v-for="question in record.data.postQuestionnaires[tag]">
                  <td>
                    {{ question.value }}
                  </td>
                </template>
              </tr>
              </tbody>
            </table>
          </template>
        </div>
      </div>
    </div>
    <div class="column is-full p-0">
      <hr class="m-2">
    </div>

    <div class="column is-full">
      <div class="columns is-mobile is-multiline px-3">
        <div class="column is-full">
          <span class="title">Open-ended Questionnaire</span>
        </div>
        <div class="column is-full">
          <div class="buttons">
            <button :class="['button', isShowOpenEndedQuestionnaire ? 'is-light' : '']" @click="isShowOpenEndedQuestionnaire = !isShowOpenEndedQuestionnaire">{{ isShowOpenEndedQuestionnaire ? 'Hidden' : 'Show' }} Details</button>
          </div>
        </div>
        <div class="column table-container" v-if="isShowOpenEndedQuestionnaire">
          <table class="table is-bordered is-striped is-fullwidth is-hoverable" v-if="records.length > 0">
            <thead>
            <th>id</th>
            <th v-for="question in records[0].data.interviewQuestionnaire.data">
              {{question.id}}. <span v-html="question.title"></span>
            </th>
            </thead>
            <tbody>
            <tr v-for="(record, index) in records">
              <th>{{ index + 1 }}</th>
              <template v-for="question in record.data.interviewQuestionnaire.data">
                <td>
                  <template v-if="question.checkBotValue">
                    <p>
                      <strong>{{question.checkBotValue }}</strong>
                    </p>
                    <hr class="m-0 p-0 my-2">
                  </template>
                  <p>
                    {{ question.value }}
                  </p>
                </td>
              </template>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="column is-full p-0">
      <hr class="m-2">
    </div>

  </div>

  <div :class="['modal', currentChat ? 'is-active' : '']" v-if="currentChat">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Chat {{ currentChat.id }}</p>
        <button class="delete" aria-label="close" @click="currentChat = null"></button>
      </header>
      <section class="modal-card-body">
        <div class="columns is-multiline is-mobile">
          <div class="column is-full" v-for="(messages, key) in currentChat.messages">
            <p class="title">
              {{ key }}
            </p>
            <div class="columns is-multiline is-mobile">
              <div class="column is-full" v-for="message in messages">
                <div
                    :class="[message.role === 'assistant' ? 'receive-canvas' : 'send-canvas', 'normal-chat-content-canvas']"
                    v-html="message.content + formatDate(message.time)">
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer class="modal-card-foot">
        <button class="button" @click="currentChat = null">Close</button>
      </footer>
    </div>
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