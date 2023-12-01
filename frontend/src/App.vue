<script lang="ts">
import { defineComponent } from "vue"
import AppMenu from "./components/AppMenu.vue"

export default defineComponent({
  components: {
    AppMenu
  }
})
</script>

<template>
    <div>
        <AppMenu />
        <RouterView />
    </div>
</template>

<style lang="scss">
@import "./styles/style.scss";
</style>
