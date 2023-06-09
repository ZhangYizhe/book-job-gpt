import {reactive} from 'vue'

export const firstScenarioQuestionnaire = reactive({
    title: "Task #1 Guideline",
    description: "The most important thing when communicating with ChatGPT is to understand how to correctly and fully express one's needs. The more information provided, the more it can return ideal results.\n\n<strong>Task #1:</strong>" +
        "\n" +
        "<strong>Tonight is your third anniversary with your girlfriend/boyfriend. She/he likes to watch some romantic movies, so she/he also likes related books very much. So you want to prepare a book as a gift for her. You will get book recommendations through Chat-GPT.</strong>",
    position: 1,
    prompts: [1, 2],
    data: [
        {
            id: 1,
            title: 'How would you start communicating with ChatGPT for this task?',
            type: 'selection',
            options: [
                {
                    id: 1,
                    text: 'I would like you to act as a personalized book recommender to help me find books as a gift for someone in my life. You can ask me questions one by one and wait for my answers. Try to adjust the recommendations based on my answers. You can also help me compare different books so that I can make the right choices. Let’s start with this first question.',
                },
                {
                    id: 2,
                    text: 'I hope you can help me find some books for my girlfriend/boyfriend. She/He likes reading books very much. I hope you can recommend some useful ones.',
                },
                {
                    id: 3,
                    text: 'Hello, I have been with my girlfriend/boyfriend for a long time, she/he loves to read, recently it was our anniversary, I thought it would be very nice to buy a few books for her/him, so that she/he can be special Happy, please help me.',
                },
            ],
            value: null,
            answer: 1,
            required: true,
        },
        {
            id: 2,
            title: 'If you think the books it recommends are not good enough, how should you ask?',
            type: 'selection',
            options: [
                {
                    id: 1,
                    text: 'I think this first book is very interesting, can you tell me more about it?',
                },
                {
                    id: 2,
                    text: 'Well, thank you for your help. You give me some good recommendations, I don\'t know which one to choose. Can you tell me more about the first book?',
                },
                {
                    id: 3,
                    text: 'The "XXX" book you recommended is very good, but I want to know why you recommend this book to me, whether it is suitable for my needs, can you please give me some explanation of the recommendation, it will be very helpful for my choice.',
                },
            ],
            value: null,
            answer: 3,
            required: true,
        },
        {
            id: 3,
            title: 'Who is task #1 asking you to choose books for?',
            type: 'selection',
            options: [
                {
                    id: 1,
                    text: 'Parents',
                },
                {
                    id: 2,
                    text: 'Younger siblings',
                },
                {
                    id: 3,
                    text: 'Girlfriend/boyfriend',
                },
            ],
            value: null,
            answer: 3,
            required: true,
        },
    ]
})