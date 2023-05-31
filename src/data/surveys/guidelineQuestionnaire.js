import {reactive} from 'vue'

export const guidelineQuestionnaire = reactive({
    title: "Guideline",
    description: "與ChatGPT溝通，最重要的是要瞭解如何正確完整的提出自己的需求，提供的信息越多，它越能夠返回理想的結果。\n\n例如：\n我想要爲十二歲在香港讀小學的女兒選擇一些適合她學習英文的書籍，也許我會這樣提問：\n\n<strong>你好，請問你是否能夠幫助我生成一份書單，這份書單是給我女兒的，她今年十二歲，在香港讀書。我希望這份書單適合她練習英文。</strong>",
    position: 1,
    data: [
        {
            id: 1,
            title: '你現在要爲戀愛紀念日的燭光晚餐挑選一份歌單，請問你會選擇以下哪種方式提問？',
            type: 'selection',
            options: [
                {
                    id: 1,
                    text: '請給我一份歌單。',
                },
                {
                    id: 2,
                    text: '你好，請爲燭光晚餐挑選一份歌單',
                },
                {
                    id: 3,
                    text: '你好，請爲燭光晚餐挑選一份歌單，我希望它有五首中文歌曲，題材希望浪漫一些。',
                }
            ],
            value: null,
            required: true,
        },
    ]
})