<script lang = "ts">
    import { defineComponent } from 'vue'
    import axios from "axios"
    
    export default defineComponent({
        data() {
            return {
                username: "",
                password: "",
                checkPassword: ""
            }
        },
        methods: {
            async singIn() {
                if(this.password != this.checkPassword) {
                    alert("Le password non coincidono")
                    return
                }

                try {
                    await axios.post("/api/auth/singin", {
                        username: this.username,
                        password: this.password
                    })
                    window.location.href = "/"
                } catch(e: any) {
                    alert(e)
                }
            }
        }
    })
</script>

<template>
    <h1>Registrati</h1>

    <form @submit.prevent = "singIn">
        User <input type="text" v-model="username">
        Password <input type="text" v-model="password">
        Conferma Password <input type="text" v-model="checkPassword">
        <button type = "submit">Conferma</button>
    </form>
</template>