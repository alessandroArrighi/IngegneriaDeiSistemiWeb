import { createApp } from 'vue'
import { createRouter, createWebHistory, Router } from 'vue-router'
import App from './App.vue'
import 'bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import { User } from './types'
import Home from './pages/Home.vue'
import SingInVue from './pages/SingIn.vue'
import LogInVue from './pages/LogIn.vue'
import axios from 'axios'
import ProvaVue from './pages/Prova.vue'

const router: Router = createRouter({
    history: createWebHistory(),
    routes: [
        {path:"/", component: Home},
        {path:"/singin", component: SingInVue, meta: {requireLogOut: true}},
        {path: "/login", component: LogInVue, meta: {requireLogOut: true}},
        {path: "/prova", component: ProvaVue}
    ]
})

router.beforeEach(async (to) => {
    const res = await axios.get("/api/auth/getUser")
    const user = res.data as User | null

    if(to.meta.requireLogOut && user) {
        return { path: "/" }
    }
})

createApp(App).use(router).mount('#app')


