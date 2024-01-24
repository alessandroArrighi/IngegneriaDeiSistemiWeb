<script lang = "ts">
    import { defineComponent } from 'vue'
    import { PropType } from 'vue'
    import { Prodotto } from '../types'

    export default defineComponent({
        props: {
            prodotti: Array as PropType<Array<Prodotto>>
        },
        mounted() {
        }
    })
</script>

<template>
    <div>
        <h1>Prodotti aggiunti a carrello</h1>
        <div v-for="prodotto in prodotti">
            <p>{{ prodotto.modello }} ==> {{ prodotto.prezzo }}</p>
            <p>Immagine: {{ prodotto.img }}</p>
        </div>
    </div>
</template>