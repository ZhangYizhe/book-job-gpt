import {reactive} from 'vue'

export const scenarioQuestionnaires = reactive({
    'book': {
        title: "Book Task Guideline",
        description: "The most important thing when communicating with ChatGPT is to understand how to correctly and fully express your needs. The more information you provide, the more it may return ideal results.\n\n<strong style='font-size: 1.4rem; font-weight: bold;'>Book recommendation</strong>" +
            "<br>" +
            "- You are about to embark on a summer vacation. You have planned to utilise this time off to read some books of your interest. For this task, please create a reading list by using the chatbot and then rank those books in the reading list according to your preferences.<br>- Note: You need to choose <strong>FIVE books </strong>for creating the wish list.",
        type: "scenario-study",
        task: "book",
        guideline: "<p style='font-size: 1.4rem; font-weight: bold'>Guideline</p><strong>In order to enable ChatGPT to better understand your needs, you can refer to the following  sample to start the conversation:</strong><br>“I would like you to act as a personalised book recommender to help me find books that may match my interests. You can ask me questions one by one and wait for my answers, and try to adjust your recommendations based on my answers. You can also help me compare different books so that I can make the right choices. You may ask me the first question now.”<br><br><strong>Then, if you're interested in a particular book, you can ask for an explanation of it:</strong><br>“Please tell me why you recommend the second book to me.”",
        position: 1,
        prompts: [1],
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
                title: 'How many books do you need to select in order to create the book list?',
                type: 'dropdown',
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
                answer: "5",
                required: true,
            },
        ]
    },
    'job': {
        title: "Job Type Task Guideline",
        description: "The most important thing when communicating with ChatGPT is to understand how to correctly and fully express your needs. The more information you provide, the more it may return ideal results.\n\n<strong style='font-size: 1.4rem; font-weight: bold;'>Job type recommendation</strong><br>- You want to communicate with ChatGPT to know what types of jobs your skills and/or knowledge might be fit for. For this task, please create a wish list by using the chatbot and then rank those job types in the list according to your preferences.<br><br><strong>Notes:</strong>\n- You need to choose <strong>FIVE job types</strong> for creating the wish list.\n- This job bot is designed to provide recommendations for <strong>job types</strong>, not for specific job positions.",
        type: "scenario-study",
        task: "job",
        guideline: "<p style='font-size: 1.4rem; font-weight: bold'>Guideline</p><strong>- In order to enable ChatGPT to better understand your needs, you can refer to the following prompts to start the conversation:</strong><br>“I would like you to act as a personalised job recommender to help me find jobs which suit my skills and knowledge. You can ask me questions one by one and wait for my answers, and try to adjust your recommendations based on my answers. You can also help me compare different jobs so that I can make the right choices. Let’s start with this first question.”<br><br><strong>- Then, if you're interested in a particular job, you can ask for an explanation of it:</strong><br>“Please tell me why you recommend the job type to me.”",
        position: 1,
        prompts: [1],
        data: [
            {
                id: 1,
                title: 'How would you start communicating with ChatGPT for this task?',
                type: 'selection',
                options: [
                    {
                        id: 1,
                        text: 'I would like you to act as a personalised job recommender to help me find jobs which suit my skills and knowledge. You can ask me questions one by one and wait for my answers, and try to adjust your recommendations based on my answers. You can also help me compare different jobs so that I can make the right choices. You may ask me the first question now.',
                    },
                    {
                        id: 2,
                        text: 'Hello, I am looking for a job. I want to know which kinds of jobs are suited to my skills and knowledge. I hope you can help me to explore my abilities, and talk with me to compare the advantages and disadvantages of different jobs.',
                    },
                ],
                value: null,
                answer: 1,
                required: true,
            },
            {
                id: 2,
                title: 'How many jobs do you need to choose in order to create the job type list?',
                type: 'dropdown',
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
                answer: '5',
                required: true,
            },
        ]
    }
})