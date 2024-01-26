<script lang="ts">
import { defineComponent } from "vue"
import ProdottoSpec from "../../components/ProdottoSpec.vue";

export default defineComponent({
  components: {
    ProdottoSpec
  },
  emits: ["sendProd"],
  methods: {
    async sendProd(prodotto: any) {
      this.$emit("sendProd", prodotto)
    }
  }
})
</script>


<template>
    <ProdottoSpec @sendProd = "sendProd"/>
</template>