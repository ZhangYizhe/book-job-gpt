import {reactive} from 'vue'

export const postQuestionnaire = reactive({
    title: "Post-study Questionnaire",
    description: "",
    position: 2,
    data: [
        {
            id: 1,
            title: 'The recommended items from our system were well-chosen. (Likert scale)',
            type: 'selection',
            options: [
                {
                    id: 1,
                    text: '1',
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
                    text: '5',
                }
            ],
            value: null,
            required: true,
        },
        {
            id: 2,
            title: 'The recommended items from our system were relevant.  (Likert scale)',
            type: 'selection',
            options: [
                {
                    id: 1,
                    text: '1',
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
                    text: '5',
                }
            ],
            value: null,
            required: true,
        },
        {
            id: 3,
            title: 'The recommended items from our system were interesting. (Likert scale)',
            type: 'selection',
            options: [
                {
                    id: 1,
                    text: '1',
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
                    text: '5',
                }
            ],
            value: null,
            required: true,
        },
        {
            id: 4,
            title: 'The system explained why these items were recommended to me. (Likert scale)',
            type: 'selection',
            options: [
                {
                    id: 1,
                    text: '1',
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
                    text: '5',
                }
            ],
            value: null,
            required: true,
        },
        {
            id: 5,
            title: 'The system explained the logic of recommending items. (Likert scale)',
            type: 'selection',
            options: [
                {
                    id: 1,
                    text: '1',
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
                    text: '5',
                }
            ],
            value: null,
            required: true,
        },
        {
            id: 6,
            title: 'The system told me the reason why I received the recommended items. (Likert scale)',
            type: 'selection',
            options: [
                {
                    id: 1,
                    text: '1',
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
                    text: '5',
                }
            ],
            value: null,
            required: true,
        },
        {
            id: 7,
            title: 'The system helps me discover new items. (Likert scale)',
            type: 'selection',
            options: [
                {
                    id: 1,
                    text: '1',
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
                    text: '5',
                }
            ],
            value: null,
            required: true,
        },
        {
            id: 8,
            title: 'The system provides me with surprising recommendations that helped me discover new music that I wouldn’t have found elsewhere. (Likert scale)',
            type: 'selection',
            options: [
                {
                    id: 1,
                    text: '1',
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
                    text: '5',
                }
            ],
            value: null,
            required: true,
        },
        {
            id: 9,
            title: 'The system provides me with recommendations that I had not considered in the first place but turned out to be a positive and surprising discovery. (Likert scale)',
            type: 'selection',
            options: [
                {
                    id: 1,
                    text: '1',
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
                    text: '5',
                }
            ],
            value: null,
            required: true,
        },
        {
            id: 0,
            title: 'The system provides me with recommendations that were a pleasant surprise to me because I would not have discovered them somewhere else. (Likert scale)',
            type: 'selection',
            options: [
                {
                    id: 1,
                    text: '1',
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
                    text: '5',
                }
            ],
            value: null,
            required: true,
        },
        {
            id: 11,
            title: 'I find it easy to inform the system if I dislike/like the recommended item. (Likert scale)',
            type: 'selection',
            options: [
                {
                    id: 1,
                    text: '1',
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
                    text: '5',
                }
            ],
            value: null,
            required: true,
        },
        {
            id: 12,
            title: 'The system allows me to tell what I like/dislike.  (Likert scale)',
            type: 'selection',
            options: [
                {
                    id: 1,
                    text: '1',
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
                    text: '5',
                }
            ],
            value: null,
            required: true,
        },
        {
            id: 13,
            title: 'I find it easy to tell the system what I like/dislike. (Likert scale)',
            type: 'selection',
            options: [
                {
                    id: 1,
                    text: '1',
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
                    text: '5',
                }
            ],
            value: null,
            required: true,
        },
        {
            id: 14,
            title: 'I find it easy to inform the system if I dislike/like the recommended item. (Likert scale)',
            type: 'selection',
            options: [
                {
                    id: 1,
                    text: '1',
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
                    text: '5',
                }
            ],
            value: null,
            required: true,
        },
        {
            id: 15,
            title: 'The system allows me to tell what I like/dislike.  (Likert scale)',
            type: 'selection',
            options: [
                {
                    id: 1,
                    text: '1',
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
                    text: '5',
                }
            ],
            value: null,
            required: true,
        },
        {
            id: 16,
            title: 'I find it easy to tell the system what I like/dislike. (Likert scale)',
            type: 'selection',
            options: [
                {
                    id: 1,
                    text: '1',
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
                    text: '5',
                }
            ],
            value: null,
            required: true,
        },
        {
            id: 17,
            title: 'I felt I am in sync with the music chatbot. (Likert scale)',
            type: 'selection',
            options: [
                {
                    id: 1,
                    text: '1',
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
                    text: '5',
                }
            ],
            value: null,
            required: true,
        },
        {
            id: 18,
            title: 'The music chatbot adapts continuously to my preferences. (Likert scale)',
            type: 'selection',
            options: [
                {
                    id: 1,
                    text: '1',
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
                    text: '5',
                }
            ],
            value: null,
            required: true,
        },
        {
            id: 19,
            title: 'I always have the feeling that this music chatbot learns my preferences. (Likert scale)',
            type: 'selection',
            options: [
                {
                    id: 1,
                    text: '1',
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
                    text: '5',
                }
            ],
            value: null,
            required: true,
        },
        {
            id: 20,
            title: 'The system understood what I said.  (Likert scale)',
            type: 'selection',
            options: [
                {
                    id: 1,
                    text: '1',
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
                    text: '5',
                }
            ],
            value: null,
            required: true,
        },
        {
            id: 21,
            title: 'I found that the system understood what I wanted. (Likert scale)',
            type: 'selection',
            options: [
                {
                    id: 1,
                    text: '1',
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
                    text: '5',
                }
            ],
            value: null,
            required: true,
        },
        {
            id: 22,
            title: 'I felt that the system understood my intentions. (Likert scale)',
            type: 'selection',
            options: [
                {
                    id: 1,
                    text: '1',
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
                    text: '5',
                }
            ],
            value: null,
            required: true,
        },
        {
            id: 3,
            title: 'The system’s responses are readable and fluent. (Likert scale)',
            type: 'selection',
            options: [
                {
                    id: 1,
                    text: '1',
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
                    text: '5',
                }
            ],
            value: null,
            required: true,
        },
        {
            id: 24,
            title: 'Most of the system’s responses make sense. (Likert scale)',
            type: 'selection',
            options: [
                {
                    id: 1,
                    text: '1',
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
                    text: '5',
                }
            ],
            value: null,
            required: true,
        },
        {
            id: 25,
            title: 'The pace of interaction with the system is appropriate. (Likert scale)',
            type: 'selection',
            options: [
                {
                    id: 1,
                    text: '1',
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
                    text: '5',
                }
            ],
            value: null,
            required: true,
        },
        {
            id: 26,
            title: 'The system helps me find the ideal item. (Likert scale)',
            type: 'selection',
            options: [
                {
                    id: 1,
                    text: '1',
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
                    text: '5',
                }
            ],
            value: null,
            required: true,
        },
        {
            id: 27,
            title: 'Using the system to find what I like is easy. (Likert scale)',
            type: 'selection',
            options: [
                {
                    id: 1,
                    text: '1',
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
                    text: '5',
                }
            ],
            value: null,
            required: true,
        },
        {
            id: 28,
            title: 'The system gives me good suggestions. (Likert scale)',
            type: 'selection',
            options: [
                {
                    id: 1,
                    text: '1',
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
                    text: '5',
                }
            ],
            value: null,
            required: true,
        },
        {
            id: 29,
            title: 'The system is warm and caring. (Likert scale)',
            type: 'selection',
            options: [
                {
                    id: 1,
                    text: '1',
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
                    text: '5',
                }
            ],
            value: null,
            required: true,
        },
        {
            id: 30,
            title: 'The system cares about me. (Likert scale)',
            type: 'selection',
            options: [
                {
                    id: 1,
                    text: '1',
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
                    text: '5',
                }
            ],
            value: null,
            required: true,
        },
        {
            id: 31,
            title: 'I like and feel warm toward the system. (Likert scale)',
            type: 'selection',
            options: [
                {
                    id: 1,
                    text: '1',
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
                    text: '5',
                }
            ],
            value: null,
            required: true,
        },
        {
            id: 32,
            title: 'I feel that I have no connection with the system. (Likert scale)',
            type: 'selection',
            options: [
                {
                    id: 1,
                    text: '1',
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
                    text: '5',
                }
            ],
            value: null,
            required: true,
        },
        {
            id: 33,
            title: 'The system and I establish rapport. (Likert scale)',
            type: 'selection',
            options: [
                {
                    id: 1,
                    text: '1',
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
                    text: '5',
                }
            ],
            value: null,
            required: true,
        },
        {
            id: 34,
            title: 'I understood why the phones were recommended to me. (Likert scale)',
            type: 'selection',
            options: [
                {
                    id: 1,
                    text: '1',
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
                    text: '5',
                }
            ],
            value: null,
            required: true,
        },
        {
            id: 35,
            title: 'I understood how the system determined the quality of the phones. (Likert scale)',
            type: 'selection',
            options: [
                {
                    id: 1,
                    text: '1',
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
                    text: '5',
                }
            ],
            value: null,
            required: true,
        },
        {
            id: 36,
            title: 'I understood how well the recommendations matched my preferences. (Likert scale)',
            type: 'selection',
            options: [
                {
                    id: 1,
                    text: '1',
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
                    text: '5',
                }
            ],
            value: null,
            required: true,
        },
        {
            id: 37,
            title: 'I could easily use the system to find the items of my interest. (Likert scale)',
            type: 'selection',
            options: [
                {
                    id: 1,
                    text: '1',
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
                    text: '5',
                }
            ],
            value: null,
            required: true,
        },
        {
            id: 38,
            title: 'Using the system to find what I like was easy.  (Likert scale)',
            type: 'selection',
            options: [
                {
                    id: 1,
                    text: '1',
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
                    text: '5',
                }
            ],
            value: null,
            required: true,
        },
        {
            id: 39,
            title: 'Finding an item with the help of the system was easy. (Likert scale)',
            type: 'selection',
            options: [
                {
                    id: 1,
                    text: '1',
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
                    text: '5',
                }
            ],
            value: null,
            required: true,
        },
        {
            id: 40,
            title: 'It was easy to find what I liked by using the system. (Likert scale)',
            type: 'selection',
            options: [
                {
                    id: 1,
                    text: '1',
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
                    text: '5',
                }
            ],
            value: null,
            required: true,
        },
        {
            id: 41,
            title: 'I felt in control of modifying my taste using this system.  (Likert scale)',
            type: 'selection',
            options: [
                {
                    id: 1,
                    text: '1',
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
                    text: '5',
                }
            ],
            value: null,
            required: true,
        },
        {
            id: 42,
            title: 'I could control the recommendations the system made for me.  (Likert scale)',
            type: 'selection',
            options: [
                {
                    id: 1,
                    text: '1',
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
                    text: '5',
                }
            ],
            value: null,
            required: true,
        },
        {
            id: 43,
            title: 'I felt in control of adjusting recommendations based on my preference. (Likert scale)',
            type: 'selection',
            options: [
                {
                    id: 1,
                    text: '1',
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
                    text: '5',
                }
            ],
            value: null,
            required: true,
        },
        {
            id: 44,
            title: 'The system behaved like a human.  (Likert scale)',
            type: 'selection',
            options: [
                {
                    id: 1,
                    text: '1',
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
                    text: '5',
                }
            ],
            value: null,
            required: true,
        },
        {
            id: 45,
            title: 'I felt like conversing with a real human when interacting with this system. (Likert scale)',
            type: 'selection',
            options: [
                {
                    id: 1,
                    text: '1',
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
                    text: '5',
                }
            ],
            value: null,
            required: true,
        },
        {
            id: 46,
            title: 'This system has human properties. (Likert scale)',
            type: 'selection',
            options: [
                {
                    id: 1,
                    text: '1',
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
                    text: '5',
                }
            ],
            value: null,
            required: true,
        },
        {
            id: 47,
            title: 'The system is warm and caring. (Likert scale)',
            type: 'selection',
            options: [
                {
                    id: 1,
                    text: '1',
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
                    text: '5',
                }
            ],
            value: null,
            required: true,
        },
        {
            id: 48,
            title: 'The system cares about me. (Likert scale)',
            type: 'selection',
            options: [
                {
                    id: 1,
                    text: '1',
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
                    text: '5',
                }
            ],
            value: null,
            required: true,
        },
        {
            id: 49,
            title: 'I like and feel warm toward the system. (Likert scale)',
            type: 'selection',
            options: [
                {
                    id: 1,
                    text: '1',
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
                    text: '5',
                }
            ],
            value: null,
            required: true,
        },
        {
            id: 50,
            title: 'I feel that I have no connection with the system. (Likert scale)',
            type: 'selection',
            options: [
                {
                    id: 1,
                    text: '1',
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
                    text: '5',
                }
            ],
            value: null,
            required: true,
        },
        {
            id: 51,
            title: 'The system and I establish rapport. (Likert scale)',
            type: 'selection',
            options: [
                {
                    id: 1,
                    text: '1',
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
                    text: '5',
                }
            ],
            value: null,
            required: true,
        },
        {
            id: 52,
            title: 'The recommendations provided by the system can be trusted. (Likert scale)',
            type: 'selection',
            options: [
                {
                    id: 1,
                    text: '1',
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
                    text: '5',
                }
            ],
            value: null,
            required: true,
        },
        {
            id: 53,
            title: 'I can rely on the system when I need to get some recommendations. (Likert scale)',
            type: 'selection',
            options: [
                {
                    id: 1,
                    text: '1',
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
                    text: '5',
                }
            ],
            value: null,
            required: true,
        },
        {
            id: 54,
            title: 'I feel I could count on The system to help me find the items I really need. (Likert scale)',
            type: 'selection',
            options: [
                {
                    id: 1,
                    text: '1',
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
                    text: '5',
                }
            ],
            value: null,
            required: true,
        },
        {
            id: 55,
            title: 'I was convinced of the items recommended to me. (Likert scale)',
            type: 'selection',
            options: [
                {
                    id: 1,
                    text: '1',
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
                    text: '5',
                }
            ],
            value: null,
            required: true,
        },
        {
            id: 56,
            title: 'I was confident I would like the items recommended to me. (Likert scale)',
            type: 'selection',
            options: [
                {
                    id: 1,
                    text: '1',
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
                    text: '5',
                }
            ],
            value: null,
            required: true,
        },
        {
            id: 57,
            title: 'I had confidence in accepting the items recommended to me.  (Likert scale)',
            type: 'selection',
            options: [
                {
                    id: 1,
                    text: '1',
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
                    text: '5',
                }
            ],
            value: null,
            required: true,
        },
        {
            id: 58,
            title: 'I was satisfied with the recommendations made by the system. (Likert scale)',
            type: 'selection',
            options: [
                {
                    id: 1,
                    text: '1',
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
                    text: '5',
                }
            ],
            value: null,
            required: true,
        },
        {
            id: 59,
            title: 'The recommendations made by the system were satisfying. (Likert scale)',
            type: 'selection',
            options: [
                {
                    id: 1,
                    text: '1',
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
                    text: '5',
                }
            ],
            value: null,
            required: true,
        },
        {
            id: 60,
            title: 'These recommendations made by the system made me satisfied. (Likert scale)',
            type: 'selection',
            options: [
                {
                    id: 1,
                    text: '1',
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
                    text: '5',
                }
            ],
            value: null,
            required: true,
        },
        {
            id: 61,
            title: 'I will use the system to get recommendations again.  (Likert scale)',
            type: 'selection',
            options: [
                {
                    id: 1,
                    text: '1',
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
                    text: '5',
                }
            ],
            value: null,
            required: true,
        },
        {
            id: 62,
            title: 'I will use the system to get recommendations frequently.  (Likert scale)',
            type: 'selection',
            options: [
                {
                    id: 1,
                    text: '1',
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
                    text: '5',
                }
            ],
            value: null,
            required: true,
        },
        {
            id: 63,
            title: 'I will tell my friends about the system to get recommendations.\n (Likert scale)',
            type: 'selection',
            options: [
                {
                    id: 1,
                    text: '1',
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
                    text: '5',
                }
            ],
            value: null,
            required: true,
        }
    ]
})