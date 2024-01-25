<script lang="ts">
import axios from "axios"
import { defineComponent } from "vue"
import { User, Ordine } from "./types"
import Navbar from "./components/Navbar.vue"
import Footer from "./components/Footer.vue"

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
  },
  mounted() {
    this.getUser()
  },
  components: {
    Navbar,
    Footer
  }
})
</script>

<template>
    <div>
        <Navbar :user="user"/>      <!--provare mettere :user in div padre-->
        <RouterLink to = "/accesso/areaPersonale/creaOrdine">Crea Ordine</RouterLink>
        <RouterView :user="user" :ordine = "ordine"/>
        <Footer />
    </div>
</template>

<style lang="scss">
@import "./styles/style.scss";
</style>

