import {reactive} from 'vue'

export const secondScenarioQuestionnaire = reactive({
    title: "Guideline",
    description: "The most important thing when communicating with ChatGPT is to understand how to correctly and fully express one's needs. The more information provided, the more it can return ideal results.\n\nFor example:\nIf I want to choose some English learning books for my 12-year-old daughter who is studying in primary school in Hong Kong, I might ask like this:\n<strong>Hello, can you help me generate a book list for my daughter? She's 12 years old and studying in Hong Kong. I hope this book list is suitable for her to practice English</strong>.",
    position: 1,
    data: [
        {
            id: 1,
            title: 'Now you want to choose a book as a gift for a colleague who is about to leave, which of the following ways would you choose to ask:',
            type: 'selection',
            options: [
                {
                    id: 1,
                    text: 'Hello, the weather is very nice today. I met a problem about gifts, please help me choose some books, I want to give my colleagues as gifts. It is good chance to say goodbye to him.',
                },
                {
                    id: 2,
                    text: 'Hello, my colleague is a manager who lives in Japan and is interested in European history. He is leaving soon, and I hope you can recommend a list of books. I would like to give him a book as a gift.',
                },
                {
                    id: 3,
                    text: 'Hi, my colleague is leaving and he is very nice. I would like to be able to give him a book as a gift, do you have any recommendations? I hope he likes it.',
                },
            ],
            value: null,
            required: true,
        },
        {
            id: 2,
            title: 'If you like one of the books in the list, how would you ask for more information about the book?',
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
                    text: 'The first book looks good, please tell me why do you recommend it? And what is the main content of the book?',
                },
            ],
            value: null,
            required: true,
        },
    ]
})