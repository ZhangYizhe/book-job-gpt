import {reactive} from 'vue'
import { firebaseDB } from "@/firebaseInit";
import { doc, setDoc } from "firebase/firestore";
import { v4 as uuidv4 } from 'uuid';

export const store = reactive({
    tag: 'home',
    db: firebaseDB,
    aiProxy: 'https://bookbot.yizheyun.cn',
    elecoxyKey: '',
    modelVersion: 'gpt-35-turbo',
    apiVersion: '2023-05-15',

    debug: false,

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
        'book': new Set(['123', "465"]),
        'job': new Set(['123', "465"]),
    },

    itemsRanks: {
        'book': {},
        'job': {},
    },

    itemsRates: {
        'book': {},
        'job': {},
    },

    async submit() {

        const _items = {}
        this.order.forEach((key) => {
            _items[key] = Array.from(this.items[key])
        })

        const _scenarioQuestionnaires = {}
        this.order.forEach((key) => {
            _scenarioQuestionnaires[key] = this.scenarioQuestionnaires[key].data.map((item) => {
                return {
                    "id": item.id,
                    "title": item.title,
                    "value": item.value
                }
            })
        })

        const _postQuestionnaires = {}
        this.order.forEach((key) => {
            _postQuestionnaires[key] = this.postQuestionnaires[key].data.map((item) => {
                return {
                    "id": item.id,
                    "title": item.title,
                    "value": item.value
                }
            })
        })

        await setDoc(doc(this.db, "records", uuidv4()), {
            basic: {
                aiProxy: this.aiProxy,
                modelVersion: this.modelVersion,
                apiVersion: this.apiVersion,

                debug: this.debug,

                isAgreeConsent: this.debug,
                isPrompts: this.debug,

                order: this.order,
            },
            data: {
                preQuestionnaire: JSON.stringify(this.preQuestionnaire.data.map((item) => {
                    return {
                        "id": item.id,
                        "title": item.title,
                        "value": item.value
                    }
                })),

                scenarioQuestionnaires: JSON.stringify(_scenarioQuestionnaires),
                listQuestionnaires: JSON.stringify(this.listQuestionnaires),
                postQuestionnaires: JSON.stringify(_postQuestionnaires),
                interviewQuestionnaire: JSON.stringify(this.interviewQuestionnaire),
            },
            chat: {
                messages:  JSON.stringify(this.messages),
                items: JSON.stringify(_items),
                itemsRates:  JSON.stringify(this.itemsRates),
            },
            timestamp: Date.now(),
        });
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