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
                    text: 'High school graduate',
                },
                {
                    id: 2,
                    text: 'Completed some college',
                },
                {
                    id: 3,
                    text: 'Associate degree',
                },
                {
                    id: 4,
                    text: 'Bachelor’s degree',
                },
                {
                    id: 5,
                    text: 'Completed some postgraduate',
                },
                {
                    id: 6,
                    text: 'Master’s degree',
                },
                {
                    id: 7,
                    text: 'Ph.D.',
                },
                {
                    id: 8,
                    text: 'Law or medical degree',
                },
                {
                    id: 9,
                    text: 'Others',
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
            title: 'In the past, I learned about how recommender systems work. (Likert scale)',
            type: 'selection',
            options: [
                {
                    id: 1,
                    text: '1',
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
                    text: '5',
                }
            ],
            value: null,
            required: true,
        },
        {
            id: 6,
            title: 'I have a background in computer science, software engineering, or something similar. (Likert scale)',
            type: 'selection',
            options: [
                {
                    id: 1,
                    text: '1',
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
                    text: '5',
                }
            ],
            value: null,
            required: true,
        },
        {
            id: 7,
            title: 'I have expert knowledge of machine learning or artificial intelligence. (Likert scale)',
            type: 'selection',
            options: [
                {
                    id: 1,
                    text: '1',
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
                    text: '5',
                }
            ],
            value: null,
            required: true,
        },
        {
            id: 8,
            title: 'I consider myself to be an expert in using a chatbot. (Likert scale)',
            type: 'selection',
            options: [
                {
                    id: 1,
                    text: '1',
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
                    text: '5',
                }
            ],
            value: null,
            required: true,
        },
        {
            id: 9,
            title: 'I am knowledgeable about chatbots. (Likert scale)',
            type: 'selection',
            options: [
                {
                    id: 1,
                    text: '1',
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
                    text: '5',
                }
            ],
            value: null,
            required: true,
        },
        {
            id: 10,
            title: 'I have extensive experience in using chatbots. (Likert scale)',
            type: 'selection',
            options: [
                {
                    id: 1,
                    text: '1',
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
                    text: '5',
                }
            ],
            value: null,
            required: true,
        },
        {
            id: 11,
            title: 'I consider myself to be an expert in using a conversational recommender system. (Likert scale)',
            type: 'selection',
            options: [
                {
                    id: 1,
                    text: '1',
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
                    text: '5',
                }
            ],
            value: null,
            required: true,
        }
    ]
})