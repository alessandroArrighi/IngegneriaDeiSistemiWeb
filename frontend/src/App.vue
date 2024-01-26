<script lang="ts">
import axios from "axios"
import { defineComponent } from "vue"
import { User, Ordine } from "./types"
import Navbar from "./components/Navbar.vue"
import FooterComp from "./components/Footer.vue"
import Carrello from "./components/Carrello.vue"

export default defineComponent({
  data() {
    return {
      user: null as User | null,
      ordine: [] as Ordine[]
    }
  },
  methods: {
    async getUser() {
      const res = await axios.get("/api/auth/getUser")
      this.user = res.data
    },
    async addToOrd(prodotto: any) {
      this.ordine.push(prodotto)
    },
    //di prova
    async deleteProd(item: any) {
      var index = this.ordine.indexOf(item)
      this.ordine.splice(index, 1)
    }
  },
  mounted() {
    this.getUser()
  },
  components: {
    Navbar,
    FooterComp,
    Carrello
  }
})
</script>

<template>
    <div>
        <Navbar :user="user" :ordine = "ordine"/> <!--provare mettere :user in div padre-->
        <RouterLink to = "/accesso/areaPersonale/creaOrdine" >Carrello</RouterLink>
        <RouterView :user="user" :ordine = "ordine" @sendProd = "addToOrd" @cancella = "deleteProd"/>
        <FooterComp />
    </div>
</template>

<style lang="scss">
@import "./styles/style.scss";
</style>

