import {reactive} from 'vue'

export const scenarioQuestionnaires = reactive({
    'book': {
        title: "Book Task Guideline",
        description: "The most important thing when communicating with ChatGPT is to understand how to correctly and fully express one's needs. The more information provided, the more it can return ideal results.\n\n<strong>First Task:</strong>" +
            "<br>" +
            "- Next week is the birthday of a family member, and you want to generate a book list with the help of Chat-GPT, and choose the most suitable book from this list to give to him/her.<br>- You have to choose <strong> 5 items for creating the book list.</strong>",
        type: "scenario-study",
        task: "book",
        guideline: "<p style='font-size: 1.4rem; font-weight: bold'>Guideline</p><strong>In order to enable ChatGPT to better understand your needs, you can refer to the following prompts to start the conversation:</strong><br>“I would like you to act as a personalized book recommender to help me find items as a gift for someone in my life. You can ask me questions one by one and wait for my answers. Try to adjust the recommendations based on my answers. You can also help me compare different items so that I can make the right choices. Let’s start with this first question.”<br><br><strong>Then, if you're interested in a particular book, you can ask for an explanation of it:</strong><br>“The \"_____\" book you recommended is very good, but I want to know why you recommend this book to me, whether it is suitable for my needs, can you please give me some explanation of the recommendation, it will be very helpful for my choice.”",
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
                        text: 'Hello, I want to generate a book list. The items in this list are to help me choose a birthday gift for my friend. I have a very good relationship with him. I hope he will like this gift. But because I don\'t usually like reading, I don\'t know which items are better. Maybe you can help me, so that I can easily choose the book I like. Thank you for your help.',
                    },
                    {
                        id: 2,
                        text: 'I would like you to act as a personalized book recommender to help me find items as a gift for someone in my life. You can ask me questions one by one and wait for my answers. Try to adjust the recommendations based on my answers. You can also help me compare different items so that I can make the right choices. Let’s start with this first question.',
                    },
                    {
                        id: 3,
                        text: 'I like reading very much, and I also like to give items to my family. It is my daughter\'s birthday recently. I really hope to give her some items as gifts. These items must be suitable for her to read and can broaden her horizons. Please recommend me a book list that is suitable for my daughter, maybe I can learn more about children\'s items, and I can choose items by myself in the future.',
                    },
                ],
                value: null,
                answer: 2,
                required: true,
            },
            {
                id: 2,
                title: 'If you think the items it recommends are not good enough, how should you ask?',
                type: 'selection',
                options: [
                    {
                        id: 1,
                        text: 'Thank you for your help, I think some of the items you provided are very suitable for my needs, but I don\'t know enough about these items to know why you provided them to me.',
                    },
                    {
                        id: 2,
                        text: 'Wow, your answer is really great. I like all these items, especially the second one. Can you please tell me why I chose this book? Maybe this way I can understand my needs and be better able to make a decision.',
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
                title: 'How many items do you need to choose to make the book list?',
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
                title: 'About the first task, who do you want to choose items for?',
                type: 'text',
                value: null,
                required: true,
            },
        ]
    },
    'job': {
        title: "Job Task Guideline",
        description: "The most important thing when communicating with ChatGPT is to understand how to correctly and fully express your needs. The more information you provide, the more it may return ideal results.\n\n<strong>Job Task:</strong><br>- You are looking for a job, but you are not completely clear about which careers are suitable for you.\n- You want to communicate with ChatGPT to know what jobs your skills and/or knowledge might be fit for, and generate a job list for yourself.\n- Note: You need to choose <strong>FIVE jobs </strong>for creating the job list.",
        type: "scenario-study",
        task: "job",
        guideline: "<p style='font-size: 1.4rem; font-weight: bold'>Guideline</p><strong>- In order to enable ChatGPT to better understand your needs, you can refer to the following prompts to start the conversation:</strong><br>“I would like you to act as a personalised job recommender to help me find jobs which suit my skills and knowledge. You can ask me questions one by one and wait for my answers, and try to adjust your recommendations based on my answers. You can also help me compare different jobs so that I can make the right choices. Let’s start with this first question.”<br><br><strong>- Then, if you're interested in a particular job, you can ask for an explanation of it:</strong><br>“I want to know why you recommend this job to me. Can you please give me some explanation of the recommendation?”",
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
                        text: 'Hello, I am looking for a job. I want to know which kinds of jobs are suited to my skill and knowledge. I hope you can help me to explore my abilities, and talk with me to compare the advantages and disadvantages of different jobs.',
                    },
                    {
                        id: 2,
                        text: 'I would like you to act as a personalised job recommender to help me find jobs which suit my skills and knowledge. You can ask me questions one by one and wait for my answers, and try to adjust your recommendations based on my answers. You can also help me compare different jobs so that I can make the right choices.',
                    }
                ],
                value: null,
                answer: 2,
                required: true,
            },
            {
                id: 2,
                title: 'If you want to know the reason behind the recommendation, how would you ask?',
                type: 'selection',
                options: [
                    {
                        id: 1,
                        text: 'Thank you for your help! I think some of the jobs you provided might be suitable for my needs, but I don\'t know enough about these jobs to know why you recommended them to me.',
                    },
                    {
                        id: 2,
                        text: 'Wow, your answer is really great. I like all these jobs, especially the second one. I want to know why you recommend this job to me? Can you please give me some explanation of the recommendation?',
                    },
                ],
                value: null,
                answer: 2,
                required: true,
            },
            {
                id: 3,
                title: 'How many jobs do you need to choose in order to create the job list?',
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
        ]
    }
})