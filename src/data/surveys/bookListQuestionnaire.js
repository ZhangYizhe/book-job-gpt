import {reactive} from 'vue'

export const bookListQuestionnaire = reactive({
    title: "Book List Questionnaire",
    description: "",
    position: 2,
    data: [
        {
            id: 1,
            title: 'Please choose your favorite one from the book list generated just now.',
            type: 'text',
            value: null,
            required: true,
        },
        {
            id: 2,
            title: 'Please explain why you chose this book.',
            type: 'text',
            value: null,
            required: true,
        }
    ]
})