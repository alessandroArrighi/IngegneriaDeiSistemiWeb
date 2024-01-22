<script lang="ts">
import { defineComponent } from "vue"
import axios from "axios"
import { Articolo } from "../types"

export default defineComponent({
    data() {
        return {
            datiMontature: [] as Articolo[],
            filterId: "",
            filterBrand: "",
            filterPrice: "",
            mostraFiltri: false,
            ordinaPer: "",
            aggiungiElementi: 5,
        }
    },
    methods: {
        getMontature() {
            axios.get("/api/montature")
                .then(response => this.datiMontature = response.data)
        },
        filterProduct() {

            let filteredData = [...this.datiMontature];

            if (this.filterId) {
                filteredData = filteredData.filter(montatura => montatura.IDProdotto.includes(this.filterId));
            }

            if (this.filterBrand) {
                filteredData = filteredData.filter(montatura => montatura.Brand.includes(this.filterBrand));
            }

            if (this.filterPrice) {
                filteredData = filteredData.filter(montatura => montatura.Prezzo.toString().includes(this.filterPrice));
            }
            
            if (!this.filterId && !this.filterBrand && !this.filterPrice) {
                this.getMontature();
            } else {
                this.datiMontature = filteredData;
            }
        },
        sortProducts() {
            if (this.ordinaPer === "prezzo") {
                this.datiMontature.sort((a,b) => a.Prezzo - b.Prezzo);
            }
            else if (this.ordinaPer === "brand") {
                this.datiMontature.sort((a, b) => a.Brand.localeCompare(b.Brand));
            }
        },
    },
    mounted() {
        this.getMontature()
    }
})
</script>

<template>
    <div class ="flex-container">
        
        <div class="flex-item">
            <button @click="mostraFiltri = !mostraFiltri">Applica Filtri</button>
            <form v-if="mostraFiltri" @submit.prevent="filterProduct">
                <label for="productId">Filtra per ID Prodotto:</label>
                <input v-model="filterId" type="text" id="productId" />
                <label for="productBrand">Filtra per Brand:</label>
                <input v-model="filterBrand" type="text" id="productBrand" />
                <label for="productPrice">Filtra per Prezzo:</label>
                <input v-model="filterPrice" type="text" id="productPrice" />
                <button type="submit">Filtra</button>
            </form>
        </div>

        <form @submit.prevent="sortProducts" class="flex-item">
            <label for="sortOption">Ordina per:</label>
            <select v-model="ordinaPer" id="sortOption">
                <option value="">-- Seleziona --</option>
                <option value="prezzo">Prezzo</option>
                <option value="brand">Brand</option>
            </select>
            <button type="submit">Ordina</button>
        </form>

        <div v-for="montatura in datiMontature.slice(0, aggiungiElementi)" class="flex-item">
            <RouterLink :to="'/montatura/' + montatura.IDProdotto">
                <img loading="lazy" :src="montatura.Immagine" alt="/">
                <p>{{ montatura.IDProdotto }}</p>
                <p>{{ montatura.Brand}}</p>
                <p>{{ montatura.Prezzo }}</p>
            </RouterLink>
        </div>

        <div class="flex-item">
            <button @click="aggiungiElementi += 5">Carica Altri</button>
        </div>
    </div>
</template>