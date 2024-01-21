<script lang="ts">
import { defineComponent } from "vue"
import axios from "axios"
import { Prodotto } from "../types"

export default defineComponent({
    data() {
        return {
            datiLAC: [] as Prodotto[]
        }
    },
    methods: {
        getLAC() {
            axios.get("api/lac")
                .then(response => this.datiLAC = response.data)
        }
    },
    mounted() {
        this.getLAC()
    }
})
</script>


<template>
    <div class ="flex-container">
        <div v-for="lac in datiLAC" class="flex-item">
            <RouterLink :to="'/lac/' + lac.IDProdotto">
                <img loading="lazy" :src="'/img/' + lac.Immagine" alt="/">
                <p>{{ lac.IDProdotto }}</p>
                <p>{{ lac.Modello}}</p>
                <p>{{ lac.Prezzo }}</p>
            </RouterLink>
        </div>
    </div>
</template>