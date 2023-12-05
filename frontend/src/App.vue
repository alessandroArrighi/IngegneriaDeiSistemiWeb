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
    <div>
        <Navbar />
        <RouterView />
        <Footer />
    </div>
</template>

<style lang="scss">
@import "./styles/style.scss";
</style>
