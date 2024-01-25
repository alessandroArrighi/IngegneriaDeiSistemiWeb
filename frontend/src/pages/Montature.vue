<script lang="ts">
import { defineComponent, PropType } from "vue";
import axios from "axios";
import { Montatura, Ordine } from "../types";

export default defineComponent({
  props: {
    ordine: Array as PropType<Ordine[]>
  },
  emits: ["sendProd", "viewProd"],
  data() {
    return {
      datiMontature: [] as any[],
      datiLAC: [] as any[],
      filterId: "",
      filterBrand: "",
      filterPrice: "",
      mostraFiltri: false,
      ordinaPer: "",
      aggiungiElementi: 4,
      categoria: "montature",
      quantità: 0,
    };
  },
  computed: {
    filteredData(): Montatura[] {
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
    sortedData(): any[] {
      let sortedData = [...this.filteredData];

      if (this.ordinaPer === "prezzo") {
        sortedData.sort((a, b) => a.Prezzo - b.Prezzo);
      } else if (this.ordinaPer === "brand") {
        sortedData.sort((a, b) => a.Brand.localeCompare(b.Brand));
      }

      return sortedData;
    }
  },
  methods: {
    getMontature() {
      axios.get("/api/prodotti/montature")
        .then(response => this.datiMontature = response.data)
        .catch(error => console.error("Errore durante la richiesta axios:", error));
    },
    async getLAC() {
      /*
      axios.get("api/prodotti/lac")
          .then(response => this.datiLAC = response.data)*/
      const prova = await axios.get("api/prodotti/lac")
      this.datiLAC = prova.data
      console.log(prova.data)
    },
    addItem(montatura: Montatura) {
      const prodotto = {
        IDProdotto: montatura.Modello,
        Categoria: this.categoria,
        Quantità: this.quantità,
      }
      this.$emit("sendProd", prodotto)
      this.quantità = 0
    },
    viewItem(montatura: Montatura) {
      this.$emit("viewProd", montatura)
    }
  },
  mounted() {
    if(this.$route.params.categoria == "vista") this.getMontature();
    if(this.$route.params.categoria == "lac") this.getLAC();
  },
});
</script>

<template>
  <div class="flex-container">

    <div class="flex-item">
      <button @click="mostraFiltri = !mostraFiltri">Applica Filtri</button>
      <form v-if="mostraFiltri">
        <label for="productId">Filtra per ID Prodotto:</label>
        <input v-model="filterId" type="text" id="productId" />
        <label for="productBrand">Filtra per Brand:</label>
        <input v-model="filterBrand" type="text" id="productBrand" />
        <label for="productPrice">Filtra per Prezzo:</label>
        <input v-model="filterPrice" type="text" id="productPrice" />
      </form>
    </div>

    <form class="flex-item">
      <label for="sortOption">Ordina per:</label>
      <select v-model="ordinaPer" id="sortOption">
        <option value="">-- Seleziona --</option>
        <option value="prezzo">Prezzo</option>
        <option value="brand">Brand</option>
      </select>
    </form>

      <div v-for="montatura in sortedData.slice(0, aggiungiElementi)" class="flex-item">
        <RouterLink :to="'/montature/' + montatura.Modello" @click = "viewItem(montatura)">
          <img loading="lazy" :src="montatura.Immagine" alt="/">
          <p>{{ montatura.Modello }}</p>
          <p>{{ montatura.Brand }}</p>
          <p>{{ montatura.Prezzo }}</p>
        </RouterLink>
        <form @submit.prevent="addItem(montatura)">
          <select v-model="quantità">
            <option value=0>-- Seleziona --</option>
            <option value=3>3</option>
            <option value=6>6</option>
            <option value=9>9</option>
          </select>
          <button type="submit">Aggiungi ad Ordine</button>
        </form>
      </div>

      <div class="flex-item">
            <button @click="aggiungiElementi += 4">Carica Altri</button>
        </div>
  </div>
</template>
