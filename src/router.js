import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/components/home/HomeView.vue'),
    },

    {
        path: '/survey',
        name: 'survey',
        component: () => import('@/components/survey/SurveyView.vue'),
    },

    {
        path: '/chat',
        name: 'chat',
        component: () => import('@/components/chat/ChatView.vue'),
    },

    {
        path: '/end',
        name: 'end',
        component: () => import('@/components/end/EndView.vue'),
    },

    {
        path: '/research',
        name: 'research',
        component: () => import('@/components/research/ResearchView.vue'),
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0 }
        }
    },
    routes
})

router.beforeEach(async (to, from) => {
    // if (to.name === 'chat') {
    //     if (store.preQuestionnaire === null) {
    //         await router.replace({name: 'home'})
    //     }
    // }
})

export default router