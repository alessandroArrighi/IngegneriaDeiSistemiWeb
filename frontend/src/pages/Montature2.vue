<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
import { Articolo } from "../types";

export default defineComponent({
  data() {
    return {
      datiMontature: [] as Articolo[],
      filterId: "",
      filterBrand: "",
      filterPrice: "",
      mostraFiltri: false,
      ordinaPer: "",
      mostraNumeroElementi: 3,
    };
  },
  computed: {
    filteredData(): Articolo[] {
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

      return filteredData;
    },
    sortedData(): Articolo[] {
      let sortedData = [...this.filteredData];

      if (this.ordinaPer === "prezzo") {
        sortedData.sort((a, b) => a.Prezzo - b.Prezzo);
      } else if (this.ordinaPer === "brand") {
        sortedData.sort((a, b) => a.Brand.localeCompare(b.Brand));
      }

      return sortedData;
    },
    aggiungi () {
      return this.mostraNumeroElementi;       //questa versione potrebbe tranquillamente essere portata nello script principale, TENERE A MENTE 
    },
  },
  methods: {
    getMontature() {
      axios.get("/api/montature")
        .then(response => this.datiMontature = response.data)
        .catch(error => console.error("Errore durante la richiesta axios:", error));
    }
  },
  mounted() {
    this.getMontature();
  },
});
</script>

<template>
  <div class="flex-container">
    <button @click="mostraFiltri = !mostraFiltri">Applica Filtri</button>
    
    <form v-if="mostraFiltri" class="flex-item">
      <label for="productId">Filtra per ID Prodotto:</label>
      <input v-model="filterId" type="text" id="productId" />
      <label for="productBrand">Filtra per Brand:</label>
      <input v-model="filterBrand" type="text" id="productBrand" />
      <label for="productPrice">Filtra per Prezzo:</label>
      <input v-model="filterPrice" type="text" id="productPrice" />
    </form>

    <form class="flex-item">
      <label for="sortOption">Ordina per:</label>
      <select v-model="ordinaPer" id="sortOption">
        <option value="">-- Seleziona --</option>
        <option value="prezzo">Prezzo</option>
        <option value="brand">Brand</option>
      </select>
    </form>

      <div v-for="montatura  in sortedData.slice(0, mostraNumeroElementi)" class="flex-item">
        <RouterLink :to="'/public/img' + montatura.IDProdotto">
          <img loading="lazy" :src="montatura.Immagine" alt="/">
          <p>{{ montatura.IDProdotto }}</p>
          <p>{{ montatura.Brand }}</p>
          <p>{{ montatura.Prezzo }}</p>
        </RouterLink>
      </div>

      <div class="flex-item">
        <label for="elementiDaMostrare">Quanti Elementi Mostrare</label>
        <select v-model="mostraNumeroElementi" id="elementiDaMostrare">
          <option value=3>3</option>
          <option value=9>9</option>
          <option value=13>13</option>
        </select>
      </div>
      
  </div>
</template>
