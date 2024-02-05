<script lang="ts">
import { defineComponent } from "vue"
import axios from "axios"
import { addToOrder, STORAGE_NAME } from '../utils/localStorage'

export default defineComponent({
  data() {
    return {
      montatura: null as any | null,
      lac: null as any | null,
      quantità: 1,
      categoria: ""
    }
  },
  methods: {
    getVista() {
      axios.get("/api/prodotti/vista/"+ this.$route.params.idProdotto)    //questa get non va bene perché noi dobbiamo filtrare sul json ottenuto dalla route "padre" montature, non possiamo rifare una chiamate (di cui il controller nemmeno )
      .then(response => this.montatura = response.data[0])       //utilizziamo $route.params.idProdotto per filtrare l'array dei prodotti ottenuto con inject e selezionare solo il prodotto voluto
    },
    getLac() {
      axios.get("/api/prodotti/lac/"+ this.$route.params.idProdotto)    //questa get non va bene perché noi dobbiamo filtrare sul json ottenuto dalla route "padre" montature, non possiamo rifare una chiamate (di cui il controller nemmeno )
      .then(response => this.lac = response.data[0])       //utilizziamo $route.params.idProdotto per filtrare l'array dei prodotti ottenuto con inject e selezionare solo il prodotto voluto
    },
    getSole() {
      axios.get("/api/prodotti/vista/" + this.$route.params.idProdotto)
      .then(response => this.montatura = response.data[0])
    },
    async addItem(prod: any) {
      const prodotto = {
        IDProdotto: prod.Modello,
        Categoria: this.categoria,
        Quantità: this.quantità,
      }
      /*
      this.$emit("sendProd", prodotto)
      this.quantità = 1
      */
     await addToOrder(STORAGE_NAME, prodotto)
    }
  },
  mounted() {
    if(this.$route.params.categoria == "Montature") {
        this.getVista()
        this.categoria = "Montature"
    }/*
    if(this.$route.params.categoria == "Montature") {
      this.getSole()
      this.categoria = "Montature"
    }*/
    if(this.$route.params.categoria == "LAC") {
        this.getLac()
        this.categoria = "LAC"
    }
  }
})
</script>


<template>
  <div v-if="montatura" class="flex-container-ps">
    <img :src="'./public/img/' + montatura.Immagine" alt="/" />
    <h2 style="color: white">Modello: {{montatura.Modello}}</h2>
    <div class="flex-item">
      <p>Brand: {{ montatura.Brand }}</p>
      <p>Prezzo: {{ montatura.Prezzo }}€</p>
      <p>Versione: {{ montatura.Versione }}</p>
      <p>Calibro: {{ montatura.Calibro }}</p>
    </div>
    <div class="flex-item">
      <p>Ponte: {{ montatura.Ponte }}mm</p>
      <p>Aste: {{ montatura.Aste }}mm</p>
      <p>Materiale: {{ montatura.Materiale }}</p>
      <p>Colore: {{ montatura.Colore }}</p>
    </div>
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
  <div v-if="lac" class="flex-item-lac">
    <img :src="'./public/img/' + lac.Immagine" alt="/" />
    <h2 style="color: white">{{lac.Modello}}</h2>
    <p>{{ lac.Brand }}</p>
    <p>{{ lac.Prezzo }}</p>
    <p>{{ lac.Durata }}</p>
    <p>{{ lac.Fascia }}</p>
    <p>{{ lac.Focale }}</p>
    <form @submit.prevent="addItem(lac)">
      <select v-model="quantità">
        <option value=0>-- Seleziona --</option>
        <option value=3>3</option>
        <option value=6>6</option>
        <option value=9>9</option>
      </select>
      <button type="submit">Aggiungi ad Ordine</button>
    </form>
  </div>
</template>