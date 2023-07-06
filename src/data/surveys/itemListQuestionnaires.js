import {reactive} from 'vue'

export const itemListQuestionnaires = reactive({
    "book": {
        title: "Book List Questionnaire",
        guideline: "",
        description: "",
        position: 2,
        data: [
            {
                id: 1,
                title: 'Please rank these five books',
                type: 'selection-itemList',
                options: [

                ],
                value: null,
                required: true,
            },
            // {
            //     id: 2,
            //     title: 'Please explain why you rank for these books.',
            //     type: 'text',
            //     value: null,
            //     required: true,
            // }
        ]
    },

    "job": {
        title: "Job List Questionnaire",
        guideline: "",
        description: "",
        position: 2,
        data: [
            {
                id: 1,
                title: 'Please rank these five jobs',
                type: 'selection-itemList',
                options: [

                ],
                value: null,
                required: true,
            },
            // {
            //     id: 2,
            //     title: 'Please explain why you rank for these jobs.',
            //     type: 'text',
            //     value: null,
            //     required: true,
            // }
        ]
    }
})