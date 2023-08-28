import { defineStore } from "pinia";
import { firebaseDB } from "@/firebaseInit";

import { doc, setDoc } from "firebase/firestore";
import { v4 as uuidv4 } from 'uuid';

export const useDefaultStore = defineStore('default', {
    persist: true,
    state: () => {
        return {
            tag: 'home',

            prolificCode: 'CEBAPMFN',
            azureKey: '',
            isPrompts: '',
            isAgreeConsent: false,

            startDate: null,

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

            itemsRanks: {
                'book': {},
                'job': {},
            },

            itemsRates: {
                'book': {},
                'job': {},
            },
        }
    },
    getters: {
        aiProxy: () => 'https://pi-lab.openai.azure.com/',
        modelVersion: () => 'gpt-35-turbo',
        apiVersion: () => '2023-05-15',
        debug: () => false,
        db: () => firebaseDB,
    },

    actions: {
        async submit() {
            let _preQuestionnaire = {}
            try {
                _preQuestionnaire = this.preQuestionnaire.data.map((item) => {
                    return {
                        "id": item.id,
                        "title": item.title,
                        "value": item.value
                    }
                })
            } catch (e) {
                console.log(e)
            }

            const _items = {}
            try {
                this.order.forEach((key) => {
                    _items[key] = Array.from(this.items[key])
                })
            } catch (e) {
                console.log(e)
            }

            const _scenarioQuestionnaires = {}
            try {
                this.order.forEach((key) => {
                    _scenarioQuestionnaires[key] = this.scenarioQuestionnaires[key].data.map((item) => {
                        return {
                            "id": item.id,
                            "title": item.title,
                            "value": item.value
                        }
                    })
                })
            } catch (e) {
                console.log(e)
            }

            const _postQuestionnaires = {}
            try {
                this.order.forEach((key) => {
                    _postQuestionnaires[key] = this.postQuestionnaires[key].data.map((item) => {
                        return {
                            "id": item.id,
                            "title": item.title,
                            "value": item.value
                        }
                    })
                })
            } catch (e) {
                console.log(e)
            }

            await setDoc(doc(this.db, "records", uuidv4()), {
                basic: {
                    aiProxy: this.aiProxy,
                    modelVersion: this.modelVersion,
                    apiVersion: this.apiVersion,

                    debug: this.debug,

                    isAgreeConsent: this.isAgreeConsent,
                    isPrompts: this.isPrompts,

                    order: this.order,
                },
                data: {
                    preQuestionnaire: JSON.stringify(_preQuestionnaire),

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
                startDate: this.startDate,
                endDate: Date.now(),
            });
        },
    }
})