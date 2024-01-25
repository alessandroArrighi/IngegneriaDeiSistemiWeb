<script lang="ts">
import { PropType, defineComponent } from "vue"
import axios from "axios"
import { Montatura } from "../types"

export default defineComponent({
  props: {
    prodotto: {} as PropType<any>
  },
  data() {
    return {
      montatura: null as Montatura | null,
    }
  },
  methods: {
    getArticolo() {
      axios.get("/api/prodotti/montature/"+ this.$route.params.idProdotto)    //questa get non va bene perché noi dobbiamo filtrare sul json ottenuto dalla route "padre" montature, non possiamo rifare una chiamate (di cui il controller nemmeno )
      .then(response => this.montatura = response.data[0])       //utilizziamo $route.params.idProdotto per filtrare l'array dei prodotti ottenuto con inject e selezionare solo il prodotto voluto
    },
    prova() {
      console.log(this.montatura)
    }
  },
  mounted() {
    this.getArticolo()
  }
})
</script>


<template>
    <button @click = "prova">Prodotto</button>
    <div v-if="montatura">
      <h2>{{}}</h2>
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