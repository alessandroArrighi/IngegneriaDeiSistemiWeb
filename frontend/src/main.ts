import { createApp } from 'vue'
import { createRouter, createWebHistory, Router } from 'vue-router'
import './styles/style.scss'
import App from './App.vue'

const router: Router = createRouter({
    history: createWebHistory(),
    routes: [

    ]
})

createApp(App).use(router).mount('#app')

