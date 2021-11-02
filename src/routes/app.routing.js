import { createRouter, createWebHashHistory} from "vue-router";


const routes = [
    {
        path: '/start',
        component: import('../pages/start/StartPage')
    },
    {
        path: '/home',
        component:   import('../pages/panel/PanelPage')
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