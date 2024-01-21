<script lang="ts">
import { defineComponent } from "vue"
import axios from "axios"
import { Prodotto } from "../types"

export default defineComponent({
    data() {
        return {
            datiMontature: [] as Prodotto[],
            filterId: "",
        }
    },
    methods: {
        getMontature() {
            axios.get("/api/montature")
                .then(response => this.datiMontature = response.data)
        },
        filterById() {
            // Filtra i datiMontature in base all'ID Prodotto
            if (this.filterId) {
                this.datiMontature = this.datiMontature.filter(montatura => montatura.IDProdotto.includes(this.filterId));
            } else {
                // Se l'input è vuoto, ripristina l'elenco completo
                this.getMontature();
            }
        },
    },
    mounted() {
        this.getMontature()
    }
})
</script>


<template>
    <form @submit.prevent="filterById">
      <label for="productId">Filtra per ID Prodotto:</label>
      <input v-model="filterId" type="text" id="productId" />
      <button type="submit">Filtra</button>
    </form>

    <div class ="flex-container">
        <div v-for="montatura in datiMontature" class="flex-item">
            <RouterLink :to="'/montatura/' + montatura.IDProdotto">
                <img loading="lazy" :src="'/img/' + montatura.Immagine" alt="/">
                <p>{{ montatura.IDProdotto }}</p>
                <p>{{ montatura.Modello}}</p>
                <p>{{ montatura.Prezzo }}</p>
            </RouterLink>
        </div>
    </div>
</template>