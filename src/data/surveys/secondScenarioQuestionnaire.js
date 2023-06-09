import {reactive} from 'vue'

export const secondScenarioQuestionnaire = reactive({
    title: "Task #2 Guideline",
    description: "The most important thing when communicating with ChatGPT is to understand how to correctly and fully express one's needs. The more information provided, the more it can return ideal results.\n\n<strong>Task #2\nLet's say your daughter is 12 years old and she has a special interest in drawing, especially nature. So she asks you to help her complete a book list, hoping that this book list can contain books related to her interests to improve her creative ability. You will get book recommendations through Chat-GPT.</strong>",
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
                    text: 'I hope you can help me find some books for my daughter. She likes reading books very much. I hope you can recommend some useful ones.',
                },
                {
                    id: 2,
                    text: 'I would like you to act as a personalized book recommender to help me find books as a gift for someone in my life. You can ask me questions one by one and wait for my answers. Try to adjust the recommendations based on my answers. You can also help me compare different books so that I can make the right choices. Let’s start with this first question.',
                },
                {
                    id: 3,
                    text: 'Hello, my daughter is 12 years old, she loves to read, recently it was her birthday, I thought it would be very nice to buy a few books for her, so that she can be special Happy, please help me.',
                },
            ],
            value: null,
            answer: 2,
            required: true,
        },
        {
            id: 2,
            title: 'If you think the books it recommends are not good enough, how should you ask?',
            type: 'selection',
            options: [
                {
                    id: 1,
                    text: 'The "XXX" book you recommended is very good, but I want to know why you recommend this book to me, whether it is suitable for my needs, can you please give me some explanation of the recommendation, it will be very helpful for my choice.',
                },
                {
                    id: 2,
                    text: 'I think this first book is very interesting, can you tell me more about it?',
                },
                {
                    id: 3,
                    text: 'Well, thank you for your help. You give me some good recommendations, I don\'t know which one to choose. Can you tell me more about the first book?',
                },
            ],
            value: null,
            answer: 1,
            required: true,
        },
        {
            id: 3,
            title: 'Who is task #2 asking you to choose books for?',
            type: 'selection',
            options: [
                {
                    id: 1,
                    text: 'Younger siblings',
                },
                {
                    id: 2,
                    text: 'Your Child',
                },
                {
                    id: 3,
                    text: 'Girlfriend/boyfriend',
                },
            ],
            value: null,
            answer: 2,
            required: true,
        },
    ]
})