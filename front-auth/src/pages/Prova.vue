<script lang = "ts">
    import { defineComponent } from 'vue'
    import { PropType } from 'vue'

    export default defineComponent({
        props: {
            data: String as PropType<String>
        },
        mounted() {
            console.log(this.data)
        }
    })
</script>

<template>
    <h1>PROVA</h1>
</template>

<style>
    h1 {
        color: white;
    }
</style>