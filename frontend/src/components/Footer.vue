<script lang = "ts">
    import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';

    export default defineComponent({
    components: { RouterLink }
})
</script>

<template>
    <footer>
        <div class="container-fluid py-5 overflow-hidden border-top border-2 border-white" id="section2" style = "color: white">
            <div>
                <h4>Chi siamo</h4>
                <p>Alessandro Arrighi alessandajksd@studio.unibo.it</p>
                <p>Riccardo Medri riccardoakjndsfla@studio.unibo.it</p>
                <p>Corso di Laura Professionalizzante in Tecnologie dei Sistemi Informatici</p>
                <p>Progetto di Ingegneria dei Sistemi Web</p>
            </div>
            <div>
                <h4>Link Utili</h4>
                <a href="#">Pacchetto per la gestione del carosello</a>
                <a href="#">Repository di github del nostro progetto</a>
                <a href="#">Corso Universitario</a>
            </div>
            <div>
                <h4>Amministrazione</h4>
                <RouterLink to = "/accesso/admin">Log-In Admin</RouterLink>
            </div>
        </div>
    </footer> 
</template>

chi siamo, login admin, link carosello