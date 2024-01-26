<script lang="ts">
import { defineComponent } from "vue"
import axios from "axios"
//import { LAC } from "../types"

export default defineComponent({
    emits: ["viewLac"],
    data() {
        return {
            datiLAC: [] as any[],
            filterId: "",
            filterBrand: "",
            filterPrice: "",
            mostraFiltri: false,
            ordinaPer: "",
            aggiungiElementi: 5
        }
    },
    methods: {
        async getLAC() {
            const res = await axios.get("/api/prodotti/lac")
            this.datiLAC = res.data
        },
        filterProduct() {

            let filteredData = [...this.datiLAC];

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
                this.getLAC();
            } else {
                this.datiLAC = filteredData;
            }
        },
        sortProducts() {
            if (this.ordinaPer === "prezzo") {
                this.datiLAC.sort((a,b) => a.Prezzo - b.Prezzo);
            }
            else if (this.ordinaPer === "brand") {
                this.datiLAC.sort((a, b) => a.Brand.localeCompare(b.Brand));
            }
        },
        viewProd(lac: any) {
            this.$emit("viewLac", lac)
        }
    },
    mounted() {
        this.getLAC()
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

        <div v-for="lac in datiLAC.slice(0, aggiungiElementi)" class="flex-item">
            <RouterLink :to="'/prodotti/lac/' + lac.Modello">
                <img loading="lazy" :src="'/img/' + lac.Immagine" alt="/">
                <p>{{ lac.Modello }}</p>
                <p>{{ lac.Brand}}</p>
                <p>{{ lac.Prezzo }}</p>
                <p>{{ lac.Immagine }}</p>
            </RouterLink>
        </div>

        <div class="flex-item">
            <button @click="aggiungiElementi += 5">Carica Altri</button>
        </div>
    </div>
</template>