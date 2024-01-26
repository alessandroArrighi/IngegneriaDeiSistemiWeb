<script lang="ts">
import { defineComponent, PropType } from "vue"
import { Ordine, User } from "../types"
import Carrello from "./Carrello.vue";

export default defineComponent({
    props: {
        user: Object as PropType<User>,
        ordine: Array as PropType<Ordine[]>
    },
    components: {
        Carrello
    }
})

</script>



<template>
    <!--<Carrello :ordine = "ordine"/>-->
    <div id="section1" class="row pb-4">
        <div class="col-1 col-sm-1 col-md-1 col-xl-0 "></div>
        <nav class="col-10 col-sm-10 col-md-10 col-xl-12 navbar navbar-expand-xl py-3 border-bottom border-2 border-white">
            <button class="navbar-toggler navbar-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <a class="navbar-brand ps-5 pt-3 me-0 text-white" href="/">
                <img src="../../public/tumefatti-eyewear-high-resolution-logo-transparent.png" width="110" height="80" alt="Logo" loading="lazy">
                <h1 class="d-inline fs-3 fw-bold">Tumefatti</h1>
            </a>    
            <div class="collapse navbar-collapse justify-content-end fw-bold" id="navbarNavAltMarkup">
                <div class="navbar-nav pb-1 me-5">
                    <ul>
                        <li><RouterLink class="nav-link active text-white px-3 py-2 mt-2 me-2 fs-5" aria-current="page" to = "/">Home</RouterLink></li>
                        <li><RouterLink class="nav-link active text-white px-3 py-2 mt-2 me-2 fs-5" to = "/prodotti/vista">Occhiali da Vista</RouterLink></li>
                        <li><RouterLink class="nav-link active text-white px-3 py-2 mt-2 me-2 fs-5" to = "/prodotti/sole">Occhiali da Sole</RouterLink></li>
                        <li><RouterLink class="nav-link active text-white px-3 py-2 mt-2 me-2 fs-5" to = "/prodotti/lac">Lenti a Contatto</RouterLink></li>
                        <li v-if="!user"><RouterLink class="nav-link text-warning px-3 py-2 mt-2 me-2 fs-5" to = "/accesso">Accedi</RouterLink></li>
                        <li v-if="user"><RouterLink class="nav-link text-warning px-3 py-2 mt-2 me-2 fs-5" to ="/accesso/areaPersonale">Area Personale</RouterLink></li>
                    </ul>
                </div>
            </div>                       
        </nav>
        <div class="col-1 col-sm-1 col-sm-1"></div>
    </div>
        <button type="button" id="scrollButton2" class = "btn border-0 p-0"> <!--senza script non funziona-->
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="white" class="bi bi-arrow-up-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
            </svg>
        </button>                              
</template>
