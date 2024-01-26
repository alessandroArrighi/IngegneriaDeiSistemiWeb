<script lang="ts">
import { defineComponent } from "vue"
import axios from "axios"
import { addToOrder, STORAGE_NAME } from '../utils/localStorage'

export default defineComponent({
  data() {
    return {
      prodotto: null as any | null,
      quantità: 1,
      categoria: ""
    }
  },
  methods: {
    getVista() {
      axios.get("/api/prodotti/vista/"+ this.$route.params.idProdotto)    //questa get non va bene perché noi dobbiamo filtrare sul json ottenuto dalla route "padre" montature, non possiamo rifare una chiamate (di cui il controller nemmeno )
      .then(response => this.prodotto = response.data[0])       //utilizziamo $route.params.idProdotto per filtrare l'array dei prodotti ottenuto con inject e selezionare solo il prodotto voluto
    },
    getLac() {
      axios.get("/api/prodotti/lac/"+ this.$route.params.idProdotto)    //questa get non va bene perché noi dobbiamo filtrare sul json ottenuto dalla route "padre" montature, non possiamo rifare una chiamate (di cui il controller nemmeno )
      .then(response => this.prodotto = response.data[0])       //utilizziamo $route.params.idProdotto per filtrare l'array dei prodotti ottenuto con inject e selezionare solo il prodotto voluto
    },
    getSole() {
      axios.get("/api/prodotti/vista/" + this.$route.params.idProdotto)
      .then(response => this.prodotto = response.data[0])
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
    
    <div v-if="prodotto">
      <h2 style="color: white">{{prodotto.Modello}}</h2>
      <article>
        <img :src="'/img/'" alt="" />
        <h3>{{}}</h3>
        <p>
          {{}} - {{}}
        </p>
        <p>{{}}</p>
        <form @submit.prevent="addItem(prodotto)">
          <select v-model="quantità">
            <option value=0>-- Seleziona --</option>
            <option value=3>3</option>
            <option value=6>6</option>
            <option value=9>9</option>
          </select>
          <button type="submit">Aggiungi ad Ordine</button>
        </form>
      </article>
    </div>
</template>