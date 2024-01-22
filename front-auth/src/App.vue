<script lang="ts">
import { defineComponent } from "vue"
import Navbar from "./components/Navbar.vue"
import Footer from "./components/Footer.vue"
import LogOut from "./components/LogOut.vue"
import axios from "axios"
import {User} from "./types"

export default defineComponent({
  components: {
    Navbar,
    Footer,
    LogOut
  },
  data() {
    return {
      user: null as User | null
    }
  },
  methods: {
    async getUser() {
      const res = await axios.get("/api/auth/getUser")
      this.user = res.data
    }
  },
  mounted() {
    this.getUser()
  }
})
</script>

<template>
    <ul>
      <li><RouterLink to = "/prova">PROVA</RouterLink></li>
      <template v-if = "user">
        <LogOut/>
      </template>
      <template v-else>
        <li><RouterLink to = "/singin">Registrati</RouterLink></li>
        <li><RouterLink to = "/login">Accedi</RouterLink></li>
      </template>
    </ul>
    <main>
      <RouterView :user = "user"/>
    </main>
</template>

<style lang="scss">
@import "./styles/style.scss";
</style>
