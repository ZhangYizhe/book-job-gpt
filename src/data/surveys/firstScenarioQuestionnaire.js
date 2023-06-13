import {reactive} from 'vue'

export const firstScenarioQuestionnaire = reactive({
    title: "First Task Guideline",
    description: "The most important thing when communicating with ChatGPT is to understand how to correctly and fully express one's needs. The more information provided, the more it can return ideal results.\n\n<strong>First Task:</strong>" +
        "<br>" +
        "- Next week is the birthday of a family member, and you want to generate a book list with the help of Chat-GPT, and choose the most suitable book from this list to give to him/her.<br>- You have to choose <strong> 5 books for creating the book list.</strong><br><hr><p style='font-size: 1.4rem; font-weight: bold'>Guideline</p><strong>In order to enable ChatGPT to better understand your needs, you can refer to the following prompts to start the conversation:</strong><br>“I would like you to act as a personalized book recommender to help me find books as a gift for someone in my life. You can ask me questions one by one and wait for my answers. Try to adjust the recommendations based on my answers. You can also help me compare different books so that I can make the right choices. Let’s start with this first question.”<br><br><strong>Then, if you're interested in a particular book, you can ask for an explanation of it:</strong><br>“The \"_____\" book you recommended is very good, but I want to know why you recommend this book to me, whether it is suitable for my needs, can you please give me some explanation of the recommendation, it will be very helpful for my choice.”",
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
                    text: 'Hello, I want to generate a book list. The books in this list are to help me choose a birthday gift for my friend. I have a very good relationship with him. I hope he will like this gift. But because I don\'t usually like reading, I don\'t know which books are better. Maybe you can help me, so that I can easily choose the book I like. Thank you for your help.',
                },
                {
                    id: 2,
                    text: 'I would like you to act as a personalized book recommender to help me find books as a gift for someone in my life. You can ask me questions one by one and wait for my answers. Try to adjust the recommendations based on my answers. You can also help me compare different books so that I can make the right choices. Let’s start with this first question.',
                },
                {
                    id: 3,
                    text: 'I like reading very much, and I also like to give books to my family. It is my daughter\'s birthday recently. I really hope to give her some books as gifts. These books must be suitable for her to read and can broaden her horizons. Please recommend me a book list that is suitable for my daughter, maybe I can learn more about children\'s books, and I can choose books by myself in the future.',
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
                    text: 'Thank you for your help, I think some of the books you provided are very suitable for my needs, but I don\'t know enough about these books to know why you provided them to me.',
                },
                {
                    id: 2,
                    text: 'Wow, your answer is really great. I like all these books, especially the second one. Can you please tell me why I chose this book? Maybe this way I can understand my needs and be better able to make a decision.',
                },
                {
                    id: 3,
                    text: 'The "_____" book you recommended is very good, but I want to know why you recommend this book to me, whether it is suitable for my needs, can you please give me some explanation of the recommendation, it will be very helpful for my choice.',
                },
            ],
            value: null,
            answer: 3,
            required: true,
        },
        {
            id: 3,
            title: 'How many books do you need to choose to make the book list?',
            type: 'selection',
            options: [
                {
                    id: 1,
                    text: '3',
                },
                {
                    id: 2,
                    text: '4',
                },
                {
                    id: 3,
                    text: '5',
                },
                {
                    id: 4,
                    text: '6',
                },
            ],
            value: null,
            answer: 3,
            required: true,
        },
        {
            id: 4,
            title: 'About the first task, who do you want to choose books for?',
            type: 'text',
            value: null,
            required: true,
        },
    ]
})