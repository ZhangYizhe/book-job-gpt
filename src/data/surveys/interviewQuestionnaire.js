import {reactive} from 'vue'

export const interviewQuestionnaire = reactive({
    title: "Final Interview (Open-end questionnaire)",
    description: "",
    position: 4,
    data: [
        {
            id: 1,
            title: 'Can you tell me about your experience of using these two bots for getting the recommendations?',
            type: 'text',
            value: null,
            required: true,
        },
        {
            id: 2,
            title: 'Were you satisfied with the recommendations returned by the bot? Did they align with your preferences?',
            type: 'text',
            value: null,
            required: true,
        },
        {
            id: 3,
            title: 'How well do you think the recommender bot is able to learn and adapt to your preferences over time?',
            type: 'text',
            value: null,
            required: true,
        },
        {
            id: 4,
            title: 'Compared to the traditional recommender system (e.g., Amazon or LinkedIn), what do you think is the major difference in using such a recommender bot to get recommendations?',
            type: 'text',
            value: null,
            required: true,
        },
        {
            id: 5,
            title: 'In your opinion, what are the pros and cons of using such a bot for recommendations?',
            type: 'text',
            value: null,
            required: true,
        },
        {
            id: 6,
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
                    text: 'For job recommendation',
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
            title: 'Why?',
            type: 'text',
            value: null,
            required: true,
        },
    ]
})