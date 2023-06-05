import {reactive} from 'vue'
import {guidelineQuestionnaire} from "@/data/surveys/guidelineQuestionnaire";

export const store = reactive({
    tag: 'home',
    aiProxy: 'https://ai.yizheyun.cn',
    chatToken: 'c2stQko5bGt4d0JHR0FSUnpmODlsVHhUM0JsYmtGSjY4NGlTWTFhZlpBSjNsajZoSFky',

    debug: true,

    preQuestionnaire: null,
    guidelineQuestionnaire: null,
    postQuestionnaire: null,

    reset() {
        this.tag = 'home';
        this.preQuestionnaire = null;
        this.guidelineQuestionnaire = null;
        this.postQuestionnaire = null;
    }
})