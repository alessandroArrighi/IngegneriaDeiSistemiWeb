import { createApp } from 'vue'
import { createRouter, createWebHistory, Router } from 'vue-router'
import App from './App.vue'
import 'bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"

import Home from './pages/Home.vue'
import Montature from './pages/Montature.vue'
import AddArticolo from './pages/AddArticolo.vue'
import Prodotto from './pages/Prodotto.vue'
import LAC from './pages/LAC.vue'
import Accesso from './pages/Accesso.vue'
import NotFound from "./pages/NotFound.vue"



const router: Router = createRouter({
    history: createWebHistory(),
    routes: [
        {path:"/", component: Home},
        {path:"/montature", component: Montature},
        {path:"/montatura/:idProdotto", component: Prodotto},
        {path:"/operazioni/articoli", component: AddArticolo},
        {path:"/accesso", component: Accesso},
        {path:"/lac", component: LAC},
        //ricordarsi path per /lac/:idProdotto
        {path: "/:pathMatch(.*)*", component: NotFound},
    ]
})

createApp(App).use(router).mount('#app')


