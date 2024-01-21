<script lang="ts">
import { defineComponent } from "vue"
import axios from "axios"
import { Prodotto } from "../types"

export default defineComponent({
    data() {
        return {
            datiProdotti: [] as Prodotto[]
        }
    },
    methods: {
        getProdotti() {
            axios.get("api/prodotti")
                .then(response => this.datiProdotti = response.data)
        }
    },
    mounted() {
        this.getProdotti()
    }
})
</script>


<template>
    <div class ="flex-container">
        <div v-for="prodotto in datiProdotti" class="flex-item">
            <RouterLink :to="'/prodotto/' + prodotto.idProdotto">
                <img loading="lazy" :src="'/img/' + prodotto.imgProdotto" alt="/">
                <p>{{ prodotto.idProdotto }}</p>
                <p>{{ prodotto.modello}}</p>
                <p>{{ prodotto.prezzo }}</p>
            </RouterLink>
        </div>
    </div>
</template>