import {reactive} from 'vue'
import {firstScenarioQuestionnaire} from "@/data/surveys/firstScenarioQuestionnaire";

export const store = reactive({
    tag: 'home',
    aiProxy: 'https://ai.yizheyun.cn',
    modelVersion: 'gpt-3.5-turbo-0613', // gpt-3.5-turbo-0613

    debug: false,

    isAgreeConsent: false,
    isPrompts: true,

    preQuestionnaire: null,
    firstScenarioQuestionnaire: null,
    firstBookListQuestionnaire: null,
    postQuestionnaire: null,

    secondScenarioQuestionnaire: null,
    secondBookListQuestionnaire: null,
    secondPostQuestionnaire: null,

    interviewQuestionnaire: null,

    firstMessages: [],
    secondMessages: [],

    firstBooks: new Set(),
    secondBooks: new Set(),

    firstBookRates: {},
    secondBookRates: {},

    reset() {
        this.tag = 'home';
        this.preQuestionnaire = null;
        this.firstScenarioQuestionnaire = null;
        this.secondScenarioQuestionnaire = null;
        this.postQuestionnaire = null;
        this.secondPostQuestionnaire = null;
        this.interviewQuestionnaire = null;
    }
})