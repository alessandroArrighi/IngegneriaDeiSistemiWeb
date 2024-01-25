<script lang = "ts">
    import { defineComponent, PropType } from 'vue';
    import { Ordine } from '../types';

    export default defineComponent({
        props: {
            ordine: Array as PropType<Ordine[]>
        }
    })
</script>

<template>
    <h1 style="color: white;">CARRELLO</h1>
    <div style="color: white;" v-for = "prodotto in ordine">
        <p>{{ prodotto.IDProdotto }}</p>
        <p>{{ prodotto.Categoria }}</p>
        <p>{{ prodotto.Quantità }}</p>
    </div>
</template>