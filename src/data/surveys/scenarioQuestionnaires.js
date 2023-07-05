import {reactive} from 'vue'

export const scenarioQuestionnaires = reactive({
    'book': {
        title: "Book Task Guideline",
        description: "The most important thing when communicating with ChatGPT is to understand how to correctly and fully express your needs. The more information you provide, the more it may return ideal results.\n\n<strong>Book recommendation:</strong>" +
            "<br>" +
            "- You are about to embark on a summer vacation. You have planned to utilise this time off to read some books of your interest. For this task, please create a reading list by using the chatbot and then rank those books in the reading list according to your preferences.<br>- Note: You need to choose <strong>FIVE books </strong>the reading list.",
        type: "scenario-study",
        task: "book",
        guideline: "<p style='font-size: 1.4rem; font-weight: bold'>Guideline</p><strong>In order to enable ChatGPT to better understand your needs, you can refer to the following  sample to start the conversation:</strong><br>“I would like you to act as a personalised book recommender to help me find books that may match my interests. You can ask me questions one by one and wait for my answers, and try to adjust your recommendations based on my answers. You can also help me compare different books so that I can make the right choices. You may ask me the first question now.”<br><br><strong>Then, if you're interested in a particular book, you can ask for an explanation of it:</strong><br>“Please tell me why you recommend the second book to me.”",
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
                        text: 'I would like you to act as a personalised book recommender to help me find books that may match my interests. You can ask me questions one by one and wait for my answers, and try to adjust your recommendations based on my answers. You can also help me compare different books so that I can make the right choices.',
                    },
                    {
                        id: 2,
                        text: 'Hello, I want to create a book list for me to read during my summer vacation. I don\'t know which books are suitable for my needs. Maybe you can help me so that I can easily choose the book I like. Thank you for your help.',
                    },
                ],
                value: null,
                answer: 1,
                required: true,
            },
            {
                id: 2,
                title: 'If you think the items it recommends are not good enough, how should you ask?',
                type: 'selection',
                options: [
                    {
                        id: 1,
                        text: 'Thank you for your help! I think some of the books you provided might be suitable for my needs, but I don\'t know enough about these books to know why you recommended them to me.',
                    },
                    {
                        id: 2,
                        text: 'Wow, your answer is really great. I like all these books, especially the second one. I want to know why you recommend this book to me? Can you please give me some explanation of the recommendation?',
                    },
                ],
                value: null,
                answer: 2,
                required: true,
            },
            {
                id: 3,
                title: 'How many books do you need to select in order to create the book list?',
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
    },
    'job': {
        title: "Job Task Guideline",
        description: "The most important thing when communicating with ChatGPT is to understand how to correctly and fully express your needs. The more information you provide, the more it may return ideal results.\n\n<strong>Job recommendation:</strong><br>- You want to communicate with ChatGPT to know what kinds of jobs your skills and/or knowledge might be fit for. For this task, please create a wish list by using the chatbot and then rank those jobs in the list according to your preferences.\n- Note: You need to choose <strong>FIVE jobs </strong>for creating the job list.",
        type: "scenario-study",
        task: "job",
        guideline: "<p style='font-size: 1.4rem; font-weight: bold'>Guideline</p><strong>- In order to enable ChatGPT to better understand your needs, you can refer to the following prompts to start the conversation:</strong><br>“I would like you to act as a personalised job recommender to help me find jobs which suit my skills and knowledge. You can ask me questions one by one and wait for my answers, and try to adjust your recommendations based on my answers. You can also help me compare different jobs so that I can make the right choices. Let’s start with this first question.”<br><br><strong>- Then, if you're interested in a particular job, you can ask for an explanation of it:</strong><br>“I want to know why you recommend this job to me. Please tell me why you recommend this job to me.”",
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
                        text: 'Hello, I am looking for a job. I want to know which kinds of jobs are suited to my skills and knowledge. I hope you can help me to explore my abilities, and talk with me to compare the advantages and disadvantages of different jobs.',
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