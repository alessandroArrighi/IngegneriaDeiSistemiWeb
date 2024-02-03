<script lang = "ts">
    import { defineComponent } from 'vue';
    import Prodotto from '../../components/Prodotto.vue'

    export default defineComponent({
        components: {
            Prodotto
        },
        emits: ["sendProd"],
        methods: {
            sendProd(prodotto: any) {
                this.$emit("sendProd", prodotto)
            }
        }
    })
</script>

<template>
    <h1>Montature Da Vista</h1>
    <Prodotto @sendProd = "sendProd"/>
</template>