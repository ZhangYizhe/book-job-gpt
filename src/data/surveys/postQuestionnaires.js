import {reactive} from 'vue'

export const postQuestionnaires = reactive({
    'book': {
        title: "For Book Recommendation",
        description: "<p style='font-size: 1.2rem; font-weight: bold; color: red'>Please answer all the following questions about your experience with the book chatbot.</p>",
        guideline: "",
        position: 2,
        type: "post-study",
        task: "book",
        data: [
            {
                id: 1,
                title: 'The recommended items were well-chosen.',
                type: 'selection',
                layout: 'horizontal',
                options: [
                    {
                        id: 1,
                        text: '1 (Strongly Disagree)',
                    },
                    {
                        id: 2,
                        text: '2',
                    },
                    {
                        id: 3,
                        text: '3',
                    },
                    {
                        id: 4,
                        text: '4',
                    },
                    {
                        id: 5,
                        text: '5 (Strongly Agree)',
                    }
                ],
                value: null,
                required: true,
            },
            {
                id: 2,
                title: 'The chatbot provided me with surprising recommendations that helped me discover new items that I wouldn’t have found elsewhere.',
                type: 'selection',
                layout: 'horizontal',
                options: [
                    {
                        id: 1,
                        text: '1 (Strongly Disagree)',
                    },
                    {
                        id: 2,
                        text: '2',
                    },
                    {
                        id: 3,
                        text: '3',
                    },
                    {
                        id: 4,
                        text: '4',
                    },
                    {
                        id: 5,
                        text: '5 (Strongly Agree)',
                    }
                ],
                value: null,
                required: true,
            },
            {
                id: 3,
                title: 'I found it easy to tell the chatbot what I like/dislike.',
                type: 'selection',
                layout: 'horizontal',
                options: [
                    {
                        id: 1,
                        text: '1 (Strongly Disagree)',
                    },
                    {
                        id: 2,
                        text: '2',
                    },
                    {
                        id: 3,
                        text: '3',
                    },
                    {
                        id: 4,
                        text: '4',
                    },
                    {
                        id: 5,
                        text: '5 (Strongly Agree)',
                    }
                ],
                value: null,
                required: true,
            },
            {
                id: 4,
                title: 'The chatbot explained why the items were recommended to me.',
                type: 'selection',
                layout: 'horizontal',
                options: [
                    {
                        id: 1,
                        text: '1 (Strongly Disagree)',
                    },
                    {
                        id: 2,
                        text: '2',
                    },
                    {
                        id: 3,
                        text: '3',
                    },
                    {
                        id: 4,
                        text: '4',
                    },
                    {
                        id: 5,
                        text: '5 (Strongly Agree)',
                    }
                ],
                value: null,
                required: true,
            },
            {
                id: 5,
                title: 'I felt I was in sync with the chatbot.',
                type: 'selection',
                layout: 'horizontal',
                options: [
                    {
                        id: 1,
                        text: '1 (Strongly Disagree)',
                    },
                    {
                        id: 2,
                        text: '2',
                    },
                    {
                        id: 3,
                        text: '3',
                    },
                    {
                        id: 4,
                        text: '4',
                    },
                    {
                        id: 5,
                        text: '5 (Strongly Agree)',
                    }
                ],
                value: null,
                required: true,
            },
            {
                id: 6,
                title: 'I found that the chatbot understood what I wanted.',
                type: 'selection',
                layout: 'horizontal',
                options: [
                    {
                        id: 1,
                        text: '1 (Strongly Disagree)',
                    },
                    {
                        id: 2,
                        text: '2',
                    },
                    {
                        id: 3,
                        text: '3',
                    },
                    {
                        id: 4,
                        text: '4',
                    },
                    {
                        id: 5,
                        text: '5 (Strongly Agree)',
                    }
                ],
                value: null,
                required: true,
            },
            {
                id: 7,
                title: 'Most of the chatbot’s responses make sense.',
                type: 'selection',
                layout: 'horizontal',
                options: [
                    {
                        id: 1,
                        text: '1 (Strongly Disagree)',
                    },
                    {
                        id: 2,
                        text: '2',
                    },
                    {
                        id: 3,
                        text: '3',
                    },
                    {
                        id: 4,
                        text: '4',
                    },
                    {
                        id: 5,
                        text: '5 (Strongly Agree)',
                    }
                ],
                value: null,
                required: true,
            },
            {
                id: 8,
                title: 'The chatbot paid attention to what I was saying.',
                type: 'selection',
                layout: 'horizontal',
                options: [
                    {
                        id: 1,
                        text: '1 (Strongly Disagree)',
                    },
                    {
                        id: 2,
                        text: '2',
                    },
                    {
                        id: 3,
                        text: '3',
                    },
                    {
                        id: 4,
                        text: '4',
                    },
                    {
                        id: 5,
                        text: '5 (Strongly Agree)',
                    }
                ],
                value: null,
                required: true,
            },
            {
                id: 9,
                title: 'It was easy to find what I liked by using the chatbot.',
                type: 'selection',
                layout: 'horizontal',
                options: [
                    {
                        id: 1,
                        text: '1 (Strongly Disagree)',
                    },
                    {
                        id: 2,
                        text: '2',
                    },
                    {
                        id: 3,
                        text: '3',
                    },
                    {
                        id: 4,
                        text: '4',
                    },
                    {
                        id: 5,
                        text: '5 (Strongly Agree)',
                    }
                ],
                value: null,
                required: true,
            },
            {
                id: 10,
                title: 'The chatbot gave me good suggestions.',
                type: 'selection',
                layout: 'horizontal',
                options: [
                    {
                        id: 1,
                        text: '1 (Strongly Disagree)',
                    },
                    {
                        id: 2,
                        text: '2',
                    },
                    {
                        id: 3,
                        text: '3',
                    },
                    {
                        id: 4,
                        text: '4',
                    },
                    {
                        id: 5,
                        text: '5 (Strongly Agree)',
                    }
                ],
                value: null,
                required: true,
            },
            {
                id: 11,
                title: 'I felt in control of modifying my taste using this chatbot.',
                type: 'selection',
                layout: 'horizontal',
                options: [
                    {
                        id: 1,
                        text: '1 (Strongly Disagree)',
                    },
                    {
                        id: 2,
                        text: '2',
                    },
                    {
                        id: 3,
                        text: '3',
                    },
                    {
                        id: 4,
                        text: '4',
                    },
                    {
                        id: 5,
                        text: '5 (Strongly Agree)',
                    }
                ],
                value: null,
                required: true,
            },
            {
                id: 12,
                title: 'I understood how well the recommendations matched my preferences.',
                type: 'selection',
                layout: 'horizontal',
                options: [
                    {
                        id: 1,
                        text: '1 (Strongly Disagree)',
                    },
                    {
                        id: 2,
                        text: '2',
                    },
                    {
                        id: 3,
                        text: '3',
                    },
                    {
                        id: 4,
                        text: '4',
                    },
                    {
                        id: 5,
                        text: '5 (Strongly Agree)',
                    }
                ],
                value: null,
                required: true,
            },
            {
                id: 13,
                title: 'The chatbot behaved like a human.',
                type: 'selection',
                layout: 'horizontal',
                options: [
                    {
                        id: 1,
                        text: '1 (Strongly Disagree)',
                    },
                    {
                        id: 2,
                        text: '2',
                    },
                    {
                        id: 3,
                        text: '3',
                    },
                    {
                        id: 4,
                        text: '4',
                    },
                    {
                        id: 5,
                        text: '5 (Strongly Agree)',
                    }
                ],
                value: null,
                required: true,
            },
            {
                id: 14,
                title: 'The chatbot cared about me.',
                type: 'selection',
                layout: 'horizontal',
                options: [
                    {
                        id: 1,
                        text: '1 (Strongly Disagree)',
                    },
                    {
                        id: 2,
                        text: '2',
                    },
                    {
                        id: 3,
                        text: '3',
                    },
                    {
                        id: 4,
                        text: '4',
                    },
                    {
                        id: 5,
                        text: '5 (Strongly Agree)',
                    }
                ],
                value: null,
                required: true,
            },
            {
                id: 15,
                title: 'I feel I could count on the chatbot to help me choose the items I need.',
                type: 'selection',
                layout: 'horizontal',
                options: [
                    {
                        id: 1,
                        text: '1 (Strongly Disagree)',
                    },
                    {
                        id: 2,
                        text: '2',
                    },
                    {
                        id: 3,
                        text: '3',
                    },
                    {
                        id: 4,
                        text: '4',
                    },
                    {
                        id: 5,
                        text: '5 (Strongly Agree)',
                    }
                ],
                value: null,
                required: true,
            },
            {
                id: 16,
                title: 'These recommendations made by the chatbot made me satisfied.',
                type: 'selection',
                layout: 'horizontal',
                options: [
                    {
                        id: 1,
                        text: '1 (Strongly Disagree)',
                    },
                    {
                        id: 2,
                        text: '2',
                    },
                    {
                        id: 3,
                        text: '3',
                    },
                    {
                        id: 4,
                        text: '4',
                    },
                    {
                        id: 5,
                        text: '5 (Strongly Agree)',
                    }
                ],
                value: null,
                required: true,
            },
            {
                id: 17,
                title: 'I will use this chatbot frequently.',
                type: 'selection',
                layout: 'horizontal',
                options: [
                    {
                        id: 1,
                        text: '1 (Strongly Disagree)',
                    },
                    {
                        id: 2,
                        text: '2',
                    },
                    {
                        id: 3,
                        text: '3',
                    },
                    {
                        id: 4,
                        text: '4',
                    },
                    {
                        id: 5,
                        text: '5 (Strongly Agree)',
                    }
                ],
                value: null,
                required: true,
            },
            {
                id: 18,
                title: 'I will be likely to try the items recommended by the chatbot in the near future.',
                type: 'selection',
                layout: 'horizontal',
                options: [
                    {
                        id: 1,
                        text: '1 (Strongly Disagree)',
                    },
                    {
                        id: 2,
                        text: '2',
                    },
                    {
                        id: 3,
                        text: '3',
                    },
                    {
                        id: 4,
                        text: '4',
                    },
                    {
                        id: 5,
                        text: '5 (Strongly Agree)',
                    }
                ],
                value: null,
                required: true,
            }
        ]
    },
    'job': {
        title: "For Job Type Recommendation",
        description: "<p style='font-size: 1.2rem; font-weight:  bold; color: red''>Please answer all the following questions about your experience with the job chatbot.</p>",
        guideline: "",
        position: 2,
        type: "post-study",
        task: "job",
        data: [
            {
                id: 1,
                title: 'The recommended items were well-chosen.',
                type: 'selection',
                layout: 'horizontal',
                options: [
                    {
                        id: 1,
                        text: '1 (Strongly Disagree)',
                    },
                    {
                        id: 2,
                        text: '2',
                    },
                    {
                        id: 3,
                        text: '3',
                    },
                    {
                        id: 4,
                        text: '4',
                    },
                    {
                        id: 5,
                        text: '5 (Strongly Agree)',
                    }
                ],
                value: null,
                required: true,
            },
            {
                id: 2,
                title: 'The chatbot provided me with surprising recommendations that helped me discover new items that I wouldn’t have found elsewhere.',
                type: 'selection',
                layout: 'horizontal',
                options: [
                    {
                        id: 1,
                        text: '1 (Strongly Disagree)',
                    },
                    {
                        id: 2,
                        text: '2',
                    },
                    {
                        id: 3,
                        text: '3',
                    },
                    {
                        id: 4,
                        text: '4',
                    },
                    {
                        id: 5,
                        text: '5 (Strongly Agree)',
                    }
                ],
                value: null,
                required: true,
            },
            {
                id: 3,
                title: 'I found it easy to tell the chatbot what I like/dislike.',
                type: 'selection',
                layout: 'horizontal',
                options: [
                    {
                        id: 1,
                        text: '1 (Strongly Disagree)',
                    },
                    {
                        id: 2,
                        text: '2',
                    },
                    {
                        id: 3,
                        text: '3',
                    },
                    {
                        id: 4,
                        text: '4',
                    },
                    {
                        id: 5,
                        text: '5 (Strongly Agree)',
                    }
                ],
                value: null,
                required: true,
            },
            {
                id: 4,
                title: 'The chatbot explained why the items were recommended to me.',
                type: 'selection',
                layout: 'horizontal',
                options: [
                    {
                        id: 1,
                        text: '1 (Strongly Disagree)',
                    },
                    {
                        id: 2,
                        text: '2',
                    },
                    {
                        id: 3,
                        text: '3',
                    },
                    {
                        id: 4,
                        text: '4',
                    },
                    {
                        id: 5,
                        text: '5 (Strongly Agree)',
                    }
                ],
                value: null,
                required: true,
            },
            {
                id: 5,
                title: 'I felt I was in sync with the chatbot.',
                type: 'selection',
                layout: 'horizontal',
                options: [
                    {
                        id: 1,
                        text: '1 (Strongly Disagree)',
                    },
                    {
                        id: 2,
                        text: '2',
                    },
                    {
                        id: 3,
                        text: '3',
                    },
                    {
                        id: 4,
                        text: '4',
                    },
                    {
                        id: 5,
                        text: '5 (Strongly Agree)',
                    }
                ],
                value: null,
                required: true,
            },
            {
                id: 6,
                title: 'I found that the chatbot understood what I wanted.',
                type: 'selection',
                layout: 'horizontal',
                options: [
                    {
                        id: 1,
                        text: '1 (Strongly Disagree)',
                    },
                    {
                        id: 2,
                        text: '2',
                    },
                    {
                        id: 3,
                        text: '3',
                    },
                    {
                        id: 4,
                        text: '4',
                    },
                    {
                        id: 5,
                        text: '5 (Strongly Agree)',
                    }
                ],
                value: null,
                required: true,
            },
            {
                id: 7,
                title: 'Most of the chatbot’s responses make sense.',
                type: 'selection',
                layout: 'horizontal',
                options: [
                    {
                        id: 1,
                        text: '1 (Strongly Disagree)',
                    },
                    {
                        id: 2,
                        text: '2',
                    },
                    {
                        id: 3,
                        text: '3',
                    },
                    {
                        id: 4,
                        text: '4',
                    },
                    {
                        id: 5,
                        text: '5 (Strongly Agree)',
                    }
                ],
                value: null,
                required: true,
            },
            {
                id: 8,
                title: 'The chatbot paid attention to what I was saying.',
                type: 'selection',
                layout: 'horizontal',
                options: [
                    {
                        id: 1,
                        text: '1 (Strongly Disagree)',
                    },
                    {
                        id: 2,
                        text: '2',
                    },
                    {
                        id: 3,
                        text: '3',
                    },
                    {
                        id: 4,
                        text: '4',
                    },
                    {
                        id: 5,
                        text: '5 (Strongly Agree)',
                    }
                ],
                value: null,
                required: true,
            },
            {
                id: 9,
                title: 'It was easy to find what I liked by using the chatbot.',
                type: 'selection',
                layout: 'horizontal',
                options: [
                    {
                        id: 1,
                        text: '1 (Strongly Disagree)',
                    },
                    {
                        id: 2,
                        text: '2',
                    },
                    {
                        id: 3,
                        text: '3',
                    },
                    {
                        id: 4,
                        text: '4',
                    },
                    {
                        id: 5,
                        text: '5 (Strongly Agree)',
                    }
                ],
                value: null,
                required: true,
            },
            {
                id: 10,
                title: 'The chatbot gave me good suggestions.',
                type: 'selection',
                layout: 'horizontal',
                options: [
                    {
                        id: 1,
                        text: '1 (Strongly Disagree)',
                    },
                    {
                        id: 2,
                        text: '2',
                    },
                    {
                        id: 3,
                        text: '3',
                    },
                    {
                        id: 4,
                        text: '4',
                    },
                    {
                        id: 5,
                        text: '5 (Strongly Agree)',
                    }
                ],
                value: null,
                required: true,
            },
            {
                id: 11,
                title: 'I felt in control of modifying my taste using this chatbot.',
                type: 'selection',
                layout: 'horizontal',
                options: [
                    {
                        id: 1,
                        text: '1 (Strongly Disagree)',
                    },
                    {
                        id: 2,
                        text: '2',
                    },
                    {
                        id: 3,
                        text: '3',
                    },
                    {
                        id: 4,
                        text: '4',
                    },
                    {
                        id: 5,
                        text: '5 (Strongly Agree)',
                    }
                ],
                value: null,
                required: true,
            },
            {
                id: 12,
                title: 'I understood how well the recommendations matched my preferences.',
                type: 'selection',
                layout: 'horizontal',
                options: [
                    {
                        id: 1,
                        text: '1 (Strongly Disagree)',
                    },
                    {
                        id: 2,
                        text: '2',
                    },
                    {
                        id: 3,
                        text: '3',
                    },
                    {
                        id: 4,
                        text: '4',
                    },
                    {
                        id: 5,
                        text: '5 (Strongly Agree)',
                    }
                ],
                value: null,
                required: true,
            },
            {
                id: 13,
                title: 'The chatbot behaved like a human.',
                type: 'selection',
                layout: 'horizontal',
                options: [
                    {
                        id: 1,
                        text: '1 (Strongly Disagree)',
                    },
                    {
                        id: 2,
                        text: '2',
                    },
                    {
                        id: 3,
                        text: '3',
                    },
                    {
                        id: 4,
                        text: '4',
                    },
                    {
                        id: 5,
                        text: '5 (Strongly Agree)',
                    }
                ],
                value: null,
                required: true,
            },
            {
                id: 14,
                title: 'The chatbot cared about me.',
                type: 'selection',
                layout: 'horizontal',
                options: [
                    {
                        id: 1,
                        text: '1 (Strongly Disagree)',
                    },
                    {
                        id: 2,
                        text: '2',
                    },
                    {
                        id: 3,
                        text: '3',
                    },
                    {
                        id: 4,
                        text: '4',
                    },
                    {
                        id: 5,
                        text: '5 (Strongly Agree)',
                    }
                ],
                value: null,
                required: true,
            },
            {
                id: 15,
                title: 'I feel I could count on the chatbot to help me choose the items I need.',
                type: 'selection',
                layout: 'horizontal',
                options: [
                    {
                        id: 1,
                        text: '1 (Strongly Disagree)',
                    },
                    {
                        id: 2,
                        text: '2',
                    },
                    {
                        id: 3,
                        text: '3',
                    },
                    {
                        id: 4,
                        text: '4',
                    },
                    {
                        id: 5,
                        text: '5 (Strongly Agree)',
                    }
                ],
                value: null,
                required: true,
            },
            {
                id: 16,
                title: 'These recommendations made by the chatbot made me satisfied.',
                type: 'selection',
                layout: 'horizontal',
                options: [
                    {
                        id: 1,
                        text: '1 (Strongly Disagree)',
                    },
                    {
                        id: 2,
                        text: '2',
                    },
                    {
                        id: 3,
                        text: '3',
                    },
                    {
                        id: 4,
                        text: '4',
                    },
                    {
                        id: 5,
                        text: '5 (Strongly Agree)',
                    }
                ],
                value: null,
                required: true,
            },
            {
                id: 17,
                title: 'I will use this chatbot frequently.',
                type: 'selection',
                layout: 'horizontal',
                options: [
                    {
                        id: 1,
                        text: '1 (Strongly Disagree)',
                    },
                    {
                        id: 2,
                        text: '2',
                    },
                    {
                        id: 3,
                        text: '3',
                    },
                    {
                        id: 4,
                        text: '4',
                    },
                    {
                        id: 5,
                        text: '5 (Strongly Agree)',
                    }
                ],
                value: null,
                required: true,
            },
            {
                id: 18,
                title: 'I will be likely to try the items recommended by the chatbot in the near future.',
                type: 'selection',
                layout: 'horizontal',
                options: [
                    {
                        id: 1,
                        text: '1 (Strongly Disagree)',
                    },
                    {
                        id: 2,
                        text: '2',
                    },
                    {
                        id: 3,
                        text: '3',
                    },
                    {
                        id: 4,
                        text: '4',
                    },
                    {
                        id: 5,
                        text: '5 (Strongly Agree)',
                    }
                ],
                value: null,
                required: true,
            }
        ]
    }
})