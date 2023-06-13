import {reactive} from 'vue'

export const interviewQuestionnaire = reactive({
    title: "Final Interview (Open-end questionnaire)",
    description: "",
    position: 4,
    data: [
        {
            id: 1,
            title: 'Can you tell me about your experience using ChatGPT to help you find book recommendations?',
            type: 'text',
            value: null,
            required: true,
        },
        {
            id: 2,
            title: 'Were you satisfied with the book tracks recommended by ChatGPT? Did they align with your preferences?',
            type: 'text',
            value: null,
            required: true,
        },
        {
            id: 3,
            title: 'How well do you think ChatGPT is able to learn and adapt to your book preferences over time? ',
            type: 'text',
            value: null,
            required: true,
        },
        {
            id: 4,
            title: 'Compared to the traditional recommender system (e.g., personalized book recommendations from Amazon), what do you think is the major difference in using ChatGPT for obtaining recommendations?',
            type: 'text',
            value: null,
            required: true,
        },
        {
            id: 5,
            title: 'In your opinion, what are the pros and cons of ChatGPT for providing book recommendations?',
            type: 'text',
            value: null,
            required: true,
        },
        {
            id: 6,
            title: 'Which task do you prefer to use the ChatGPT for making the book list?  Why?',
            type: 'text',
            value: null,
            required: true,
        },
    ]
})