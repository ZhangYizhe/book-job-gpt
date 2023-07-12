import {reactive} from 'vue'

export const interviewQuestionnaire = reactive({
    title: "Open-ended questionnaire",
    description: "",
    type: "interview-study",
    guideline: "",
    position: 3,
    data: [
        {
            id: 1,
            displayId: "1.1",
            title: 'Which task do you think the bot is more competent for?',
            type: 'selection',
            layout: '',
            options: [
                {
                    id: 1,
                    text: 'For book recommendation',
                },
                {
                    id: 2,
                    text: 'For job type recommendation',
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
            id: 2,
            displayId: "1.2",
            title: 'Please explain your choice for question 1, and briefly describe the respective pros/cons of the two recommender chatbots, i.e., the book chatbot and the job chatbot, in your opinion.',
            type: 'text',
            value: null,
            required: true,
        },
        {
            id: 3,
            displayId: "2",
            topDescription: "<span style='color: #204d9b'>For the following questions (Q2 to Q5), you may briefly describe your experience with one preferred chatbot between the book and job bots.</span>",
            title: 'What do you think of the personalization degree of recommendations returned by the book/job chatbot?',
            type: 'text',
            value: null,
            required: true,
        },
        {
            id: 4,
            displayId: "3",
            title: 'What do you think of the recommendations returned by the book/job chatbot regarding its alignment with your preferences?',
            type: 'text',
            value: null,
            required: true,
        },
        {
            id: 5,
            displayId: "4",
            title: 'What do you think of conversations with the book/job chatbot regarding its adaptation to your preferences over time?',
            type: 'text',
            value: null,
            required: true,
        },
        {
            id: 6,
            displayId: "5",
            title: 'Compared to the commonly used websites (e.g., Amazon or LinkedIn), what are the major differences of using  this book/job chatbot to get recommendations?',
            type: 'text',
            value: null,
            required: true,
        },
    ]
})