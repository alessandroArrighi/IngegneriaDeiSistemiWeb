import { createApp } from 'vue'
import { createRouter, createWebHistory, Router } from 'vue-router'
import App from './App.vue'
import 'bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"

import Home from './pages/Home.vue'
import Montature from './pages/Montature.vue'
import Prodotto from './pages/Prodotto.vue'
import Lenti from './pages/Lenti.vue'
import LAC from './pages/LAC.vue'
import NotFound from "./pages/NotFound.vue"



const router: Router = createRouter({
    history: createWebHistory(),
    routes: [
        {path:"/", component: Home},
        {path:"/montature", component: Montature},
        {path:"/montatura/:idProdotto", component: Prodotto},
        {path:"/lenti", component: Lenti},
        {path:"/lac", component: LAC},
        //ricordarsi path per /lenti/:idProdotto
        //ricordarsi path per /lac/:idProdotto
        {path: "/:pathMatch(.*)*", component: NotFound},
    ]
})

createApp(App).use(router).mount('#app')


