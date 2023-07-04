<template>
  <div v-if="questionnaire">
    <div class="section p-0 is-vcentered navigation-bar">
      <p style="text-align: center">
        <template v-if="position === 2">
          Task {{ round }} {{ questionnaire.title }}
        </template>
        <template v-else>
          {{ questionnaire.title }}
        </template>
      </p>
    </div>
    <div class="section pt-4">
      <div class="container">
        <div class="columns is-mobile is-multiline">
          <div class="column is-full pb-4 mb-4" style="border-bottom: 1px solid #e8e8e8"
               v-if="questionnaire.description !== ''">
            <p style="white-space: pre-wrap; font-size: 1.1rem" v-html="questionnaire.description"></p>
          </div>
          <div class="column is-full pb-4 mb-4" style="border-bottom: 1px solid #e8e8e8"
               v-if="store.isPrompts && questionnaire.guideline !== ''">
            <p style="white-space: pre-wrap; font-size: 1.1rem" v-html="questionnaire.guideline"></p>
          </div>
          <div class="column is-full py-3" v-for="(question, index) in questionnaire.data">
            <p class="pb-3 pt-3" :style="['font-size: 1.1rem; font-weight: bold']">
              {{ index + 1 }}. <span v-html="question.title"></span> <span v-if="question.required"
                                                                                                                                                                                                 style="color: red">*</span>
            </p>
            <!--   General Selection    -->
            <div class="control" v-if="question.type === 'selection'">
              <div class="columns is-mobile is-multiline">
                <div :class="['column py-2', question.layout && question.layout === 'horizontal' ? '' : 'is-full']" v-for="option in question.options">
                  <label class="radio" style="font-size: 1.1rem; line-height: 1.7rem">
                    <input type="radio" :value="option.id" v-model="question.value">&nbsp;
                    {{ option.text }}
                  </label>
                </div>
              </div>
            </div>

            <!--   Book list Selection    -->
            <div class="control" v-if="question.type === 'selection-itemList'">
              <div class="columns is-mobile is-multiline">
                <div :class="['column py-2', question.layout && question.layout === 'horizontal' ? '' : 'is-full']" v-for="title in itemList">
                  <label class="radio" style="font-size: 1.1rem; line-height: 1.7rem">
                    <input type="radio" :value="title" v-model="question.value">&nbsp;
                    {{ title }}
                  </label>
                </div>
              </div>
            </div>

            <!--   country/region Selection    -->
            <div class="control" v-if="question.type === 'country/region'">
              <div class="select">
                <select v-model="question.value">
                  <option v-for="item in question.options">{{ item.name }}</option>
                </select>
              </div>
            </div>

            <!--   General Text    -->
            <div class="control questionnaire-text" v-if="question.type === 'text'">
            <textarea placeholder="Please enter content" v-model="question.value"></textarea>
            </div>
          </div>
          <div class="column is-full py-3 mt-3 mb-5">
            <button class="button is-link" style="width: 100%;" @click="nextStepBtnTap" :disabled="!isFilled">Next
              Step
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <section class="hero is-fullheight">
      <div class="hero-body">
        <div class="">
          <p class="title">
            Loading...
          </p>
          <p class="subtitle">
            Please wait...
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import {store} from "@/data/store";
import {preQuestionnaire} from "@/data/surveys/preQuestionnaire";
import {interviewQuestionnaire} from "@/data/surveys/interviewQuestionnaire";
import {bookListQuestionnaire} from "@/data/surveys/bookListQuestionnaire";
import {postQuestionnaires} from "@/data/surveys/postQuestionnaires";
import {scenarioQuestionnaires} from "@/data/surveys/scenarioQuestionnaires";

export default {
  name: 'SurveyView',
  components: {},
  data() {
    return {
      store,

      position: null,
      round: null,

      itemList: [],
      questionnaire: null,
    };
  },
  created() {
    this.$watch(
        () => this.$route.params,
        () => {
          this.reloadQuestionnaire();
        },
        // fetch the data when the view is created and the data is
        // already being observed
        {immediate: true}
    )
  },
  computed: {
    isFilled() {
      if (this.store.debug) {
        return true
      }
      return this.questionnaire.data.every(question => {
        if (question.required) {
          return question.value !== null && question.value !== undefined && question.value !== ''
        }

        return true
      });
    },

    isAllCorrect() {
      if (this.store.debug) {
        return true
      }

      return this.questionnaire.data.every(question => {
        if (question.answer !== undefined && question.answer !== null) {
          if (question.value !== null && question.value !== undefined && question.value !== '') {
            return question.answer === question.value
          }
        }
        return true;
      });
    },

    nextStepBtnTap() {
      if (!this.isFilled) {
        return
      }

      if (!this.isAllCorrect) {
        alert('Sorry, some questions were answered incorrectly, please read the Guideline carefully and answer the questions again.')
        return
      }

      const tag = this.store.order[this.round - 1]

      if (this.position === 0) {
        this.store.preQuestionnaire = this.questionnaire;

        const query = {
          round: this.round,
          position: 1,
        }
        this.$router.push({path: '/survey', query: query});
      } else if (this.position === 1) {
        this.store.scenarioQuestionnaires[tag] = this.questionnaire;
        const query = {
          round: this.round,
          position: this.position,
        }
        this.$router.push({path: '/chat', query: query});
      } else if (this.position === 2) {
        this.store.items[tag] = this.questionnaire;

        const query = {
          round: this.round,
          position: 3,
        }
        this.$router.push({path: '/survey', query: query});

      } else if (this.position === 3) {
        this.store.postQuestionnaires[tag] = this.questionnaire;

        let query = {};

        if (this.round === 1) {
          query = {
            round: 2,
            position: 1,
          }
        } else {
          query = {
            round: 2,
            position: 4,
          }
        }

        this.$router.push({path: '/survey', query: query});

      } else if (this.position === 4) {
        this.store.interviewQuestionnaire = this.questionnaire;
        this.$router.push('/end');
      } else {
        const query = {
          round: 1,
          position: 1,
        }
        this.$router.push({path: '/chat', query: query});
      }
    }
  },
  methods: {
    reloadQuestionnaire() {
      this.position = this.$route.query.position === undefined ? 0 : parseInt(this.$route.query.position);
      this.round = this.$route.query.round === undefined ? 1 : parseInt(this.$route.query.round);

      const tag = this.store.order[this.round - 1]

      if (this.position === 0) {
        if (this.store.preQuestionnaire !== null) {
          this.questionnaire = JSON.parse(JSON.stringify(this.store.preQuestionnaire))
        } else {
          this.questionnaire = JSON.parse(JSON.stringify(preQuestionnaire))
        }
      } else if (this.position === 1) {
        if (this.store.scenarioQuestionnaires[tag] !== null) {
          this.questionnaire = JSON.parse(JSON.stringify(this.store.scenarioQuestionnaires[tag]))
        } else {
          let tempQ = JSON.parse(JSON.stringify(scenarioQuestionnaires[tag]))
          if (!this.store.isPrompts) {
            tempQ.data = tempQ.data.filter(question => {
              return !tempQ.prompts.includes(question.id);
            })
          }

          this.questionnaire = JSON.parse(JSON.stringify(tempQ))
        }
      } else if (this.position === 2) {
        this.itemList = this.store.items[tag];
        if (this.store.listQuestionnaires[tag] !== null) {
          this.questionnaire = JSON.parse(JSON.stringify(this.store.listQuestionnaires[tag]))
        } else {
          this.questionnaire = JSON.parse(JSON.stringify(bookListQuestionnaire))
        }
      } else if (this.position === 3) {
        if (this.store.postQuestionnaires[tag] !== null) {
          this.questionnaire = JSON.parse(JSON.stringify(this.store.postQuestionnaires[tag]))
        } else {
          this.questionnaire = JSON.parse(JSON.stringify(postQuestionnaires[tag]))
        }
      }  else if (this.position === 4) {
        if (this.store.interviewQuestionnaire !== null) {
          this.questionnaire = JSON.parse(JSON.stringify(this.store.interviewQuestionnaire))
        } else {
          this.questionnaire = JSON.parse(JSON.stringify(interviewQuestionnaire))
        }
      }
    }
  },
};

</script>

<style scoped>
.navigation-bar {
  height: 60px;
  line-height: 60px;
  font-weight: bold;
  font-size: 1.3rem;
  border-bottom: 1px solid #e0e0e0;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: white;
}

.questionnaire-text textarea {
  width: 100%;
  border: 1px solid #d2d2d2;
  border-radius: 10px;
  height: 100px;
  resize: none;
  padding: 10px;
  font-size: 1.1rem;
}
</style>