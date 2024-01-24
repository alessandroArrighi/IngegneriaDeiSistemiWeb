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
import AreaPersonale from './pages/AreaPersonale.vue'
import NotFound from "./pages/NotFound.vue"



const router: Router = createRouter({
    history: createWebHistory(),
    routes: [
        {path:"/", component: Home},
        {path:"/montature", component: Montature},
        {path:"/montature/:idProdotto", component: Prodotto},  //da scegliere se fare una get o se possare un prop con tutti i dati a "montature" e poi da questa passare il prop ristresso per id a Prodotto. Lo svantaggio è che se scarichiamo tutti all'apertura del sito scarichiamo immediatamente il json di tutti gli occhiali e le lenti
        {path:"/accesso", component: Accesso},
        {path:"/accesso/areaPersonale", component: AreaPersonale},
        {path:"/accesso/areaPersonale/operazioniAdmin", component: AddArticolo},
        {path:"/lac", component: LAC},
        //ricordarsi path per /lac/:idProdotto
        {path: "/:pathMatch(.*)*", component: NotFound},
    ]
})

createApp(App).use(router).mount('#app')