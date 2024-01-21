<script lang="ts">
import { defineComponent } from "vue"
import axios from "axios"
import { Prodotto } from "../types"

export default defineComponent({
    data() {
        return {
            datiLenti: [] as Prodotto[]
        }
    },
    methods: {
        getLenti() {
            axios.get("api/lenti")
                .then(response => this.datiLenti = response.data)
        }
    },
    mounted() {
        this.getLenti()
    }
})
</script>


<template>
    <div class ="flex-container">
        <div v-for="lenti in datiLenti" class="flex-item">
            <RouterLink :to="'/lenti/' + lenti.IDProdotto">
                <img loading="lazy" :src="'/img/' + lenti.Immagine" alt="/">
                <p>{{ lenti.IDProdotto }}</p>
                <p>{{ lenti.Modello}}</p>
                <p>{{ lenti.Prezzo }}</p>
            </RouterLink>
        </div>
    </div>
</template>