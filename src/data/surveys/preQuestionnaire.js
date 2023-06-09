import {reactive} from 'vue'

export const preQuestionnaire = reactive({
    title: "Pre-study Questionnaire",
    description: "",
    position: 0,
    data: [
        {
            id: 1,
            title: 'Age',
            type: 'selection',
            options: [
                {
                    id: 1,
                    text: '18 - 22',
                },
                {
                    id: 2,
                    text: '23 - 27',
                },
                {
                    id: 3,
                    text: '28 - 32',
                },
                {
                    id: 4,
                    text: '33 - 37',
                },
                {
                    id: 5,
                    text: '38 - 42',
                },
                {
                    id: 6,
                    text: '43 - 47',
                },
                {
                    id: 7,
                    text: '48 - 52',
                },
                {
                    id: 8,
                    text: '53 - 57',
                },
                {
                    id: 9,
                    text: '58 - 62',
                },
                {
                    id: 10,
                    text: '63 - 67',
                },
                {
                    id: 11,
                    text: '68 - 72',
                },
                {
                    id: 12,
                    text: '73 and above',
                }
            ],
            value: null,
            required: true,
        },
        {
            id: 2,
            title: 'Gender',
            type: 'selection',
            options: [
                {
                    id: 1,
                    text: 'Female',
                },
                {
                    id: 2,
                    text: 'Male',
                },
                {
                    id: 3,
                    text: 'Other',
                }
            ],
            value: null,
            required: true,
        },
        {
            id: 3,
            title: 'Education',
            type: 'selection',
            options: [
                {
                    id: 1,
                    text: 'No Schooling / Kindergarten',
                },
                {
                    id: 2,
                    text: 'Primary (P.1 – P.6)',
                },
                {
                    id: 3,
                    text: 'Junior Secondary (F.1 – F.3)',
                },
                {
                    id: 4,
                    text: 'Senior Secondary (F.4 – F.6 / F.7)',
                },
                {
                    id: 5,
                    text: 'Project Yi Jin',
                },
                {
                    id: 6,
                    text: 'Master’s degree',
                },
                {
                    id: 7,
                    text: 'Technical / Vocational Training (Craft course / Apprenticeship)',
                },
                {
                    id: 8,
                    text: 'Technical / Vocational Training (Diploma / Cert. course)',
                },
                {
                    id: 9,
                    text: 'Tertiary Education (Non-degree / Sub-degree courses)',
                },
                {
                    id: 10,
                    text: 'Tertiary Education (Bachelor’s degree courses)',
                },
                {
                    id: 11,
                    text: 'Tertiary Education (Master’s / Doctoral degree courses)',
                }
            ],
            value: null,
            required: true,
        },
        {
            id: 4,
            title: 'Nationality',
            type: 'text',
            value: null,
            required: true,
        },
        {
            id: 5,
            title: 'I am familiar with recommender systems.',
            type: 'selection',
            options: [
                {
                    id: 1,
                    text: '1 (Strongly Disagree)',
                },
                {
                    id: 2,
                    text: '2',
                },
                {
                    id: 3,
                    text: '3',
                },
                {
                    id: 4,
                    text: '4',
                },
                {
                    id: 5,
                    text: '5 (Strongly Agree)',
                }
            ],
            value: null,
            required: true,
        },
        {
            id: 6,
            title: 'I used recommender systems frequently.',
            type: 'selection',
            options: [
                {
                    id: 1,
                    text: '1 (Strongly Disagree)',
                },
                {
                    id: 2,
                    text: '2',
                },
                {
                    id: 3,
                    text: '3',
                },
                {
                    id: 4,
                    text: '4',
                },
                {
                    id: 5,
                    text: '5 (Strongly Agree)',
                }
            ],
            value: null,
            required: true,
        },
        {
            id: 7,
            title: 'I consider myself to be an expert in using ChatGPT.',
            type: 'selection',
            options: [
                {
                    id: 1,
                    text: '1 (Strongly Disagree)',
                },
                {
                    id: 2,
                    text: '2',
                },
                {
                    id: 3,
                    text: '3',
                },
                {
                    id: 4,
                    text: '4',
                },
                {
                    id: 5,
                    text: '5 (Strongly Agree)',
                }
            ],
            value: null,
            required: true,
        },
        {
            id: 8,
            title: 'I am knowledgeable about ChatGPT.',
            type: 'selection',
            options: [
                {
                    id: 1,
                    text: '1 (Strongly Disagree)',
                },
                {
                    id: 2,
                    text: '2',
                },
                {
                    id: 3,
                    text: '3',
                },
                {
                    id: 4,
                    text: '4',
                },
                {
                    id: 5,
                    text: '5 (Strongly Agree)',
                }
            ],
            value: null,
            required: true,
        },
        {
            id: 9,
            title: 'I have extensive experience in using ChatGPT.',
            type: 'selection',
            options: [
                {
                    id: 1,
                    text: '1 (Strongly Disagree)',
                },
                {
                    id: 2,
                    text: '2',
                },
                {
                    id: 3,
                    text: '3',
                },
                {
                    id: 4,
                    text: '4',
                },
                {
                    id: 5,
                    text: '5 (Strongly Agree)',
                }
            ],
            value: null,
            required: true,
        },
        {
            id: 10,
            title: 'I often use a chatbot (such as Siri or Cortana) on my personal devices.',
            type: 'selection',
            options: [
                {
                    id: 1,
                    text: '1 (Strongly Disagree)',
                },
                {
                    id: 2,
                    text: '2',
                },
                {
                    id: 3,
                    text: '3',
                },
                {
                    id: 4,
                    text: '4',
                },
                {
                    id: 5,
                    text: '5 (Strongly Agree)',
                }
            ],
            value: null,
            required: true,
        },
        {
            id: 11,
            title: 'I am confident when it comes to trying new technology.',
            type: 'selection',
            options: [
                {
                    id: 1,
                    text: '1 (Strongly Disagree)',
                },
                {
                    id: 2,
                    text: '2',
                },
                {
                    id: 3,
                    text: '3',
                },
                {
                    id: 4,
                    text: '4',
                },
                {
                    id: 5,
                    text: '5 (Strongly Agree)',
                }
            ],
            value: null,
            required: true,
        }
    ]
})