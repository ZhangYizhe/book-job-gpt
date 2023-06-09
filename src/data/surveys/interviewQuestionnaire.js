import {reactive} from 'vue'

export const interviewQuestionnaire = reactive({
    title: "Interview",
    description: "",
    position: 3,
    data: [
        {
            id: 1,
            title: 'Can you tell me why you chose these books?\n',
            type: 'text',
            value: null,
            required: true,
        },
        {
            id: 2,
            title: 'Can you tell me about your experience using ChatGPT to help you find book recommendations?',
            type: 'text',
            value: null,
            required: true,
        },
        {
            id: 3,
            title: 'What specific strategies or approaches did you use to communicate your book preferences to ChatGPT for achieving your goals?',
            type: 'text',
            value: null,
            required: true,
        },
        {
            id: 4,
            title: 'Compared to the traditional recommender system (e.g., Amazon, eBay), what do you think is the major difference in using ChatGPT for obtaining recommendations?',
            type: 'text',
            value: null,
            required: true,
        },
        {
            id: 5,
            title: 'In general, do you think ChatGPT is a useful tool or not for obtaining recommendations in your daily life?',
            type: 'text',
            value: null,
            required: true,
        },
    ]
})