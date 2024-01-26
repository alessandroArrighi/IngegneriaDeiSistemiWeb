<script lang = "ts">
    import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';

    export default defineComponent({
    components: { RouterLink }
})
</script>

<template>
    <footer>
        <div class="flex-container-footer" id="section2">
            <div class="flex-item">
                <h4>Per Conoscerci Meglio:</h4>
                <p>Alessandro Arrighi alessandajksd@studio.unibo.it</p>
                <p>Riccardo Medri riccardoakjndsfla@studio.unibo.it</p>
                <p>Corso di Laura Professionalizzante in Tecnologie dei Sistemi Informatici</p>
                <p>Progetto di Ingegneria dei Sistemi Web</p>
            </div>
            <div class="flex-item">
                <h4>Link Utili</h4>
                <a href="https://ismail9k.github.io/vue3-carousel/" target="_blank">Vue3-Carousel</a>
                <a href="/" target="_blank">Repository Github</a>
                <a href="https://corsi.unibo.it/laurea/TecnologieSistemiInformatici" target="_blank">Corso Universitario</a>
            </div>
            <div class="flex-item">
                <h4>Amministrazione</h4>
                <RouterLink to = "/accesso/admin" class="pill-item">Log-In Admin</RouterLink>
            </div>
        </div>
    </footer> 
</template>

chi siamo, login admin, link carosello