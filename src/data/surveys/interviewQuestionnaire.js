import {reactive} from 'vue'

export const interviewQuestionnaire = reactive({
    title: "Final Interview (Open-end questionnaire)",
    description: "",
    type: "interview-study",
    guideline: "",
    position: 4,
    data: [
        {
            id: 1,
            displayId: "1",
            title: 'Please tell me about your experience of using these two bots to get the recommendations.',
            type: 'text',
            value: null,
            required: true,
        },
        {
            id: 2,
            displayId: "2",
            title: 'What do you think of the recommendations returned by the bot regarding the alignment with your preferences? ',
            type: 'text',
            value: null,
            required: true,
        },
        {
            id: 3,
            displayId: "3",
            title: 'What do you think of conversations with the bot regarding its adaptation to your preferences over time?',
            type: 'text',
            value: null,
            required: true,
        },
        {
            id: 4,
            displayId: "4",
            title: 'Compared to the daily used websites (e.g., Amazon or LinkedIn), what are the major differences of using such a bot to get recommendations for books and jobs?',
            type: 'text',
            value: null,
            required: true,
        },
        {
            id: 5,
            displayId: "5",
            title: 'In your opinion, what are the pros and cons of using such a bot for getting recommendation services?',
            type: 'text',
            value: null,
            required: true,
        },
        {
            id: 6,
            displayId: "6.1",
            title: 'Which task do you think the bot is more competent?',
            type: 'selection',
            layout: '',
            options: [
                {
                    id: 1,
                    text: 'For book recommendation',
                },
                {
                    id: 2,
                    text: 'For job types recommendation',
                },
                {
                    id: 3,
                    text: 'Both',
                },
                {
                    id: 4,
                    text: 'None',
                },
            ],
            value: null,
            required: true,
        },
        {
            id: 7,
            displayId: "6.2",
            title: 'Please explain your choice for question 6.1.',
            type: 'text',
            value: null,
            required: true,
        },
    ]
})