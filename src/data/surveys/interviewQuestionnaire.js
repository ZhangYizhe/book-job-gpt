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
    ]
})