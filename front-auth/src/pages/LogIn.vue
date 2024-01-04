<script lang = "ts">
    import { defineComponent } from 'vue'
    import axios from "axios"

    export default defineComponent({
        data() {
            return {
                username: "",
                password: ""
            }
        },
        methods: {
            async logIn() {
                try {
                    await axios.post("/api/auth/login", {
                        username: this.username,
                        password: this.password
                    })
                    window.location.href = "/"
                } catch (e: any) {
                    alert(e)
                }
            }
        }
    })
</script>

<template>
    <h1>Accedi</h1>

    <form @submit.prevent = "logIn">
        User <input type="text" v-model="username">
        Password <input type="text" v-model="password">
        <button type = "submit">Conferma</button>
    </form>
</template>