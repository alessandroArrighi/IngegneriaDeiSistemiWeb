<script lang="ts">
import { defineComponent } from "vue"
import axios from "axios"

export default defineComponent({
  data() {
    return {
      prodotto: null as any | null,
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
    prova() {
      console.log(this.prodotto)
    }
  },
  mounted() {
    if(this.$route.params.categoria == "vista") {
        this.getVista()
    }
    if(this.$route.params.categoria == "sole") {
      this.getSole()
    }
    if(this.$route.params.categoria == "lac") {
        this.getLac()
    }
  }
})
</script>


<template>
    <button @click = "prova">Prodotto</button>
    <div v-if="prodotto">
      <h2 style="color: white">{{prodotto.Modello}}</h2>
      <article>
        <img :src="'/img/'" alt="" />
        <h3>{{}}</h3>
        <p>
          {{}} - {{}}
        </p>
        <p>{{}}</p>
      </article>
    </div>
</template>