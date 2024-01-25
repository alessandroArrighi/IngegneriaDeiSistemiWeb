import { createApp } from 'vue'
import { createRouter, createWebHistory, Router } from 'vue-router'
import App from './App.vue'
import 'bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"

import Home from './pages/Home.vue'
import Montature from './pages/Montature.vue'
import Prodotto from './pages/Prodotto.vue'
import LAC from './pages/LAC.vue'
import Accesso from './pages/Accesso.vue'
import AreaPersonale from './pages/AreaPersonale.vue'
import CreaOrdine from './pages/CreaOrdine.vue'                     //di prova 
import OrdiniUtente from './pages/OrdiniUtente.vue'                 //di prova
import OperazioniProdotti from './pages/OperazioniProdotti.vue'
import OperazioniOrdini from './pages/OperazioniOrdini.vue'
import NotFound from "./pages/NotFound.vue"

const router: Router = createRouter({
    history: createWebHistory(),
    routes: [
        {path:"/", component: Home},
        {path:"/prodotti/:categoria", component: Montature},
        {path:"/montature/:idProdotto", component: Prodotto},  //da scegliere se fare una get o se possare un prop con tutti i dati a "montature" e poi da questa passare il prop ristresso per id a Prodotto. Lo svantaggio è che se scarichiamo tutti all'apertura del sito scarichiamo immediatamente il json di tutti gli occhiali e le lenti
        {path:"/lac", component: LAC},
        //ricordarsi {path:"/lac/:idProdotto", component: },
        {path:"/accesso", component: Accesso},
        {path:"/accesso/areaPersonale", component: AreaPersonale},
        {path:"/accesso/areaPersonale/creaOrdine", component: CreaOrdine},            //di prova
        {path:"/accesso/areaPersonale/ordiniUtente", component: OrdiniUtente},        //di prova
        {path:"/accesso/areaPersonale/operazioniProdotti", component: OperazioniProdotti},
        {path:"/accesso/areaPersonale/operazioniOrdini", component: OperazioniOrdini},
        {path:"/accesso/areaPersonale/operazioniOrdini/:IDOrdine", component: OperazioniOrdini},
        {path: "/:pathMatch(.*)*", component: NotFound},
    ]
})

createApp(App).use(router).mount('#app')