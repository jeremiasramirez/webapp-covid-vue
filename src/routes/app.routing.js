import { createRouter, createWebHashHistory} from "vue-router";


const routes = [
    {
        path: '/start',
        component: import('../pages/start/StartPage')
    },
    {
        path: '',
        redirect: '/start'
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;