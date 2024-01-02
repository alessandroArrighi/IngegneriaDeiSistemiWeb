<script lang="ts">
import { defineComponent } from "vue"
import Navbar from "./components/Navbar.vue"
import Footer from "./components/Footer.vue"

export default defineComponent({
  components: {
    Navbar,
    Footer
  }
})
</script>

<template>
    <ul>
      <li><RouterLink to = "/">Home</RouterLink></li>
      <li><RouterLink to = "/singin">SingIn</RouterLink></li>
    </ul>
    <div>
      <RouterView />
    </div>
</template>

<style lang="scss">
@import "./styles/style.scss";
</style>
