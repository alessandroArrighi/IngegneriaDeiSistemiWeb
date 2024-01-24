<script lang = "ts">
    import { defineComponent } from 'vue'
    import Carrello from "./Carrello.vue"

    export default defineComponent({
        components: {
            Carrello
        }
    })
</script>

<template>
    <h1>Titolo Progetto</h1>

    <ul>
        <li>
            pagina1
        </li>
        <li>
            pagina2
        </li>
        <li>
            pagina3
        </li>
    </ul>

    <Carrello />
</template>

<style>
    ul {
        color: white;
    }
</style>