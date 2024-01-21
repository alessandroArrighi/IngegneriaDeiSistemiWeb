<script lang="ts">
import { defineComponent } from "vue"
import axios from "axios"
import { Prodotto } from "../types"

export default defineComponent({
  data() {
    return {
      prodotto: null as Prodotto | null
    }
  },
  methods: {
    getArticolo() {
      axios.get("/api/prodotto"+ this.$route.params.idProdotto)
      .then(response => this.prodotto = response.data[0])
    }
  },
  mounted() {
    this.getArticolo()
  }
})
</script>


<template>
    <template v-if="prodotto">
    <h2>{{}}</h2>
    <article>
    <img :src="'/img/'" alt="" />
    <h3>{{}}</h3>
    <p>
    {{}} - {{}}
    </p>
    <p>{{}}</p>
    </article>
    </template>
</template>