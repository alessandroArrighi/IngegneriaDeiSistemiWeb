import { createApp } from 'vue'
import { createRouter, createWebHistory, Router } from 'vue-router'
import App from './App.vue'
import 'bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"

import Home from './pages/Home.vue'
import Prodotti from './pages/Prodotti.vue'
import Prodotto from './pages/Prodotto.vue'
import Pagina2 from './pages/Pagina2.vue'
import Pagina3 from './pages/Pagina3.vue'
import NotFound from "./pages/NotFound.vue"



const router: Router = createRouter({
    history: createWebHistory(),
    routes: [
        {path:"/", component: Home},
        {path:"/prodotti", component: Prodotti},
        {path:"/prodotto", component: Prodotto},
        {path:"/pagina2", component: Pagina2},
        {path:"/pagina3", component: Pagina3},
        {path: "/:pathMatch(.*)*", component: NotFound},
    ]
})

createApp(App).use(router).mount('#app')


