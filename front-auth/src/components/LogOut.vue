<script lang = "ts">
    import { defineComponent } from 'vue'
    import axios from 'axios'

    export default defineComponent({
        data() {
            return {

            }
        },
        methods: {
            async logOut() {
                try {
                    await axios.post("/api/auth/logout")
                    window.location.href = "/"
                } catch (e: any) {
                    alert(e)
                }
            }
        }
    })
</script>

<template>
    <button @click = "logOut" type = "button">Log-Out</button>
</template>