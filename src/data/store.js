import {reactive} from 'vue'

export const store = reactive({
    tag: 'home',
    aiProxy: 'https://bookbot.yizheyun.cn',
    elecoxyKey: '4lcGSr1UwchK',
    modelVersion: 'gpt-35-turbo',
    apiVersion: '2023-05-15',

    debug: true,

    isAgreeConsent: false,
    isPrompts: true,

    order: ['book', 'job'],

    preQuestionnaire: null,

    scenarioQuestionnaires: {
        'book': null,
        'job': null,
    },
    listQuestionnaires: {
        'book': null,
        'job': null,
    },
    postQuestionnaires: {
        'book': null,
        'job': null,
    },

    interviewQuestionnaire: null,

    messages: {
        'book': [],
        'job': [],
    },

    items: {
        'book': new Set(),
        'job': new Set(),
    },

    itemsRates: {
        'book': {},
        'job': {},
    },

    reset() {
        this.tag = 'home';
        this.preQuestionnaire = null;
        this.scenarioQuestionnaires = {
            'book': null,
            'job': null,
        };
        this.listQuestionnaires = {
            'book': null,
            'job': null,
        };
        this.postQuestionnaires = {
            'book': null,
            'job': null,
        };
        this.interviewQuestionnaire = null;

        this.messages = {
            'book': [],
            'job': [],
        };
        this.items = {
            'book': new Set(),
            'job': new Set(),
        };
        this.itemsRates = {
            'book': {},
            'job': {},
        };
    }
})