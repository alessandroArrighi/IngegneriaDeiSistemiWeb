<script lang="ts">
import axios from "axios"
import { defineComponent } from "vue"
import { User } from "./types"
import Navbar from "./components/Navbar.vue"
import Footer from "./components/Footer.vue"

export default defineComponent({
  data() {
    return {
      user: null as User | null,
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
        <Navbar :user="user"/>
        <RouterView :user="user"/>
        <Footer />
    </div>
</template>

<style lang="scss">
@import "./styles/style.scss";
</style>

