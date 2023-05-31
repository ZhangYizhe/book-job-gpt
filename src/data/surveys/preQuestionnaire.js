import {reactive} from 'vue'

export const preQuestionnaire = reactive({
    title: "Previous Survey",
    description: "",
    position: 0,
    data: [
        {
            id: 1,
            title: '你過去是否是用過聊天機器人？',
            type: 'selection',
            options: [
                {
                    id: 1,
                    text: '是',
                },
                {
                    id: 2,
                    text: '否',
                }
            ],
            value: null,
            required: true,
        },
        {
            id: 2,
            title: '你過去一週有多少次使用聊天機器人？',
            type: 'selection',
            options: [
                {
                    id: 1,
                    text: '從未',
                },
                {
                    id: 2,
                    text: '1-2次',
                },
                {
                    id: 3,
                    text: '3-5次',
                },
                {
                    id: 4,
                    text: '6-10次',
                }
            ],
            value: null,
            required: true,
        },
        {
            id: 3,
            title: '你還有什麼想要說的嗎？',
            type: 'text',
            value: null,
            required: false,
        },

    ]
})