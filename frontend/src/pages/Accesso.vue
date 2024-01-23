<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
import { nuovoProfilo, profiloEsistente } from "../types";

export default defineComponent({
    data() {
        return {
        usernameDaRegistrare: "",
        passwordDaRegistrare: "",
        ruoloDaRegistrare: "",
        usernameEsistente: "",
        passwordEsistente: ""
        }
    },
    methods: {
        async signup() {
            const nuovoProfilo: nuovoProfilo = {
                username: this.usernameDaRegistrare,
                password: this.passwordDaRegistrare,
                ruolo: this.ruoloDaRegistrare
            }

            await axios.post("/api/auth/signin", {
                username: nuovoProfilo.username,
                password: nuovoProfilo.password,
                ruolo: nuovoProfilo.ruolo
            })
        },
        async login() {
            const profiloEsistente: profiloEsistente = {
                username: this.usernameEsistente,
                password: this.passwordEsistente
            }

            await axios.post("/api/auth/login", {
                username: profiloEsistente.username,
                password: profiloEsistente.password
            })
        }
    },
})


</script>

<template>

    <form @submit.prevent="signup">
        <label>Username</label>
        <input v-model="usernameDaRegistrare" type="text" />
        <label>Password</label>
        <input v-model="passwordDaRegistrare" type="text" />
        <label>Ruolo</label>
        <input v-model="ruoloDaRegistrare" type="text" />
        <button type="submit">Registrati</button>
    </form>

    <form @submit.prevent="login">
        <label>Username</label>
        <input v-model="usernameEsistente" type="text" />
        <label>Password</label>
        <input v-model="passwordEsistente" type="text" />
        <button type="submit">Registrati</button>
    </form>

</template>