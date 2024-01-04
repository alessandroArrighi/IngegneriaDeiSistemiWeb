<script lang = "ts">
    import { defineComponent, PropType } from 'vue'
    
    export default defineComponent({
        props: {
            user: Object as PropType<User>,
        },
        methods: {
            async prova() {
                console.log(this.user)
            }
        },
        mounted() {
            this.prova()
        }
    })
</script>

<template>
    <h1>Home</h1>
</template>