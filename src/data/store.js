import {reactive} from 'vue'
import {firstScenarioQuestionnaire} from "@/data/surveys/firstScenarioQuestionnaire";

export const store = reactive({
    tag: 'home',
    aiProxy: 'https://bookbot.yizheyun.cn',
    elecoxyKey: '4lcGSr1UwchK',
    modelVersion: 'gpt-35-turbo',
    apiVersion: '2023-05-15',

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