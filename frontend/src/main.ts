import { createApp } from 'vue'
import { createRouter, createWebHistory, Router } from 'vue-router'
import App from './App.vue'
import 'bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"

import Home from './pages/Home.vue'
import Pagina1 from './pages/Pagina1.vue'
import Pagina2 from './pages/Pagina2.vue'
import Pagina3 from './pages/Pagina3.vue'

const router: Router = createRouter({
    history: createWebHistory(),
    routes: [
        {path:"/", component: Home},
        {path:"/pagina1", component: Pagina1},
        {path:"/pagina2", component: Pagina2},
        {path:"/pagina3", component: Pagina3}
    ]
})

createApp(App).use(router).mount('#app')


