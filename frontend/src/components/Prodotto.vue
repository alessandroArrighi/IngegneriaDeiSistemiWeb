<script lang="ts">
import { defineComponent, PropType } from "vue";
import axios from "axios";
import { Ordine } from "../types";
import { addToOrder, STORAGE_NAME } from "../utils/localStorage"

export default defineComponent({
  props: {
    ordine: Array as PropType<Ordine[]>
  },
  emits: ["sendProd"],
  data() {
    return {
      datiProdotto: [] as any[],
      filterId: "",
      filterBrand: "",
      filterPrice: "",
      mostraFiltri: false,
      ordinaPer: "",
      aggiungiElementi: 4,
      categoria: "",
      quantità: 1,
    }
  },
  computed: {
    filteredData(): any[] {
      let filteredData = [...this.datiProdotto];

      if (this.filterId) {
        filteredData = filteredData.filter(prodotto => prodotto.Modello.includes(this.filterId));
      }

      if (this.filterBrand) {
        filteredData = filteredData.filter(prodotto => prodotto.Brand.includes(this.filterBrand));
      }

      if (this.filterPrice) {
        filteredData = filteredData.filter(prodotto => prodotto.Prezzo.toString().includes(this.filterPrice));
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
    async getVista() {
      const res = await axios.get("/api/prodotti/vista")
        this.datiProdotto = res.data
    },
    async getLAC() {
        const res = await axios.get("/api/prodotti/lac")
        this.datiProdotto = res.data
    },
    async getSole() {
      const res = await axios.get("/api/prodotti/sole")
      this.datiProdotto = res.data
    },
    async addItem(prod: any) {
      const prodotto = {
        IDProdotto: prod.Modello,
        Categoria: this.categoria,
        Quantità: this.quantità,
      }
      /*
      this.$emit("sendProd", prodotto)
      this.quantità = 1*/
      await addToOrder(STORAGE_NAME, prodotto)
    }
  },
  mounted() {
    if(this.$route.params.categoria == "MontatureV") {
        this.getVista()
        this.categoria = "Montature"
    }
    if(this.$route.params.categoria == "MontatureS") {
      this.getSole()
      this.categoria = "Montature"
    }
    if(this.$route.params.categoria == "LACC") {
        this.getLAC()
        this.categoria = "LAC"
    }
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

      <div v-for="prodotto in sortedData.slice(0, aggiungiElementi)" class="flex-item">
        <RouterLink :to="'/prodotti/' + categoria + '-' + prodotto.Modello">
          <img loading="lazy" :src="prodotto.Immagine" alt="/">
          <p>{{ prodotto.Modello }}</p>
          <p>{{ prodotto.Brand }}</p>
          <p>{{ prodotto.Prezzo }}</p>
        </RouterLink>
        <form @submit.prevent="addItem(prodotto)">
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
