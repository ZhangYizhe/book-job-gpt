import {reactive} from 'vue'
import {firstScenarioQuestionnaire} from "@/data/surveys/firstScenarioQuestionnaire";

export const store = reactive({
    tag: 'home',
    aiProxy: 'https://ai.yizheyun.cn',
    chatToken: 'c2stQko5bGt4d0JHR0FSUnpmODlsVHhUM0JsYmtGSjY4NGlTWTFhZlpBSjNsajZoSFky',

    debug: true,

    isPrompts: true,
    round: 1,

    preQuestionnaire: null,
    firstScenarioQuestionnaire: null,
    secondScenarioQuestionnaire: null,
    postQuestionnaire: null,
    interviewQuestionnaire: null,

    firstMessages: [],
    secondMessages: [],

    reset() {
        this.tag = 'home';
        this.preQuestionnaire = null;
        this.firstScenarioQuestionnaire = null;
        this.secondScenarioQuestionnaire = null;
        this.firstPostQuestionnaire = null;
        this.secondPostQuestionnaire = null;
    }
})