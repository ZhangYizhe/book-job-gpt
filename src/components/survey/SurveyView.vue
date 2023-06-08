<template>
  <div v-if="questionnaire">
    <div class="section p-0 is-vcentered navigation-bar">
      <p style="text-align: center">
        {{ questionnaire.title }}
      </p>
    </div>
    <div class="section pt-4">
      <div class="container">
        <div class="columns is-mobile is-multiline">
          <div class="column is-full pb-4 mb-4" style="border-bottom: 1px solid #e8e8e8" v-if="questionnaire.description !== ''">
            <p style="white-space: pre-wrap; font-size: 1.1rem" v-html="questionnaire.description"></p>
          </div>
          <div class="column is-full py-3" v-for="question in questionnaire.data">
            <p class="pb-5" style="font-size: 1.1rem; font-weight: bold">
              {{question.id}}. <span v-html="question.title"></span> <span v-if="question.required" style="color: red">*</span>
            </p>
            <div class="control" v-if="question.type === 'selection'">
              <div class="columns is-mobile is-multiline">
                <div class="column is-full py-2"  v-for="option in question.options">
                  <label class="radio" style="font-size: 1.1rem; line-height: 1.7rem">
                    <input type="radio" :value="option.id" v-model="question.value">
                    {{ option.text }}
                  </label>
                </div>
              </div>
            </div>
            <div class="control questionnaire-text" v-if="question.type === 'text'">
            <textarea placeholder="Please enter content" v-model="question.value">

            </textarea>
            </div>
          </div>
          <div class="column is-full py-3 mb-5">
            <button class="button is-link" style="width: 100%;" @click="nextStepBtnTap" :disabled="!isFilled">Next Step</button>
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
import { preQuestionnaire } from "@/data/surveys/preQuestionnaire";
import { firstScenarioQuestionnaire } from "@/data/surveys/firstScenarioQuestionnaire";
import { secondScenarioQuestionnaire } from "@/data/surveys/secondScenarioQuestionnaire";
import { postQuestionnaire } from "@/data/surveys/postQuestionnaire";
import { interviewQuestionnaire } from "@/data/surveys/interviewQuestionnaire";

export default {
  name: 'SurveyView',
  components: {},
  data() {
    return {
      store,

      position: null,

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

    nextStepBtnTap() {
       if (!this.isFilled) {
         return
       }

       if (this.position === 0) {
         this.store.preQuestionnaire = this.questionnaire;

         const query = {
           position: 1,
         }
         this.$router.push({path: '/survey', query: query});

       } else if (this.position === 1 && this.store.round === 1) {
         this.store.firstScenarioQuestionnaire = this.questionnaire;
         this.$router.push('/chat')
       } else if (this.position === 1 && this.store.round === 2) {
         this.store.secondScenarioQuestionnaire = this.questionnaire;
         this.$router.push('/chat')
       } else if (this.position === 2) {
         this.store.postQuestionnaire = this.questionnaire;

         const query = {
           position: 3,
         }
         this.$router.push({path: '/survey', query: query});

       } else if (this.position === 3) {
         this.store.interviewQuestionnaire = this.questionnaire;
         this.$router.push('/end');
       } else {
         this.$router.push('/chat')
       }
    }
  },
  methods: {
    reloadQuestionnaire() {
      this.position = this.$route.query.position === undefined ? 0 : parseInt(this.$route.query.position);

      if (this.position === 0) {
        if (this.store.preQuestionnaire !== null) {
          this.questionnaire = JSON.parse(JSON.stringify(this.store.preQuestionnaire))
        } else {
          this.questionnaire = JSON.parse(JSON.stringify(preQuestionnaire))
        }
      } else if (this.position === 1 && this.store.round === 1) {
        if (this.store.firstScenarioQuestionnaire !== null) {
          this.questionnaire = JSON.parse(JSON.stringify(this.store.firstScenarioQuestionnaire))
        } else {
          this.questionnaire = JSON.parse(JSON.stringify(firstScenarioQuestionnaire))
        }
      } else if (this.position === 1 && this.store.round === 2) {
        if (this.store.secondScenarioQuestionnaire !== null) {
          this.questionnaire = JSON.parse(JSON.stringify(this.store.secondScenarioQuestionnaire))
        } else {
          this.questionnaire = JSON.parse(JSON.stringify(secondScenarioQuestionnaire))
        }
      } else if (this.position === 2) {
        if (this.store.postQuestionnaire !== null) {
          this.questionnaire = JSON.parse(JSON.stringify(this.store.postQuestionnaire))
        } else {
          this.questionnaire = JSON.parse(JSON.stringify(postQuestionnaire))
        }
      } else if (this.position === 3) {
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