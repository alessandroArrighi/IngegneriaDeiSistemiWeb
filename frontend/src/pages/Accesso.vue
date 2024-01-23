<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
    data() {
        return {
        usernameDaRegistrare: "",
        passwordDaRegistrare: "",
        ruoloDaRegistrare: "",
        usernameEsistente: "",
        passwordEsistente: "",
        risposta: "",
        }
    },
    methods: {
        async signup() {
            await axios.post("/api/auth/signin", {
                username: this.usernameDaRegistrare,
                password: this.passwordDaRegistrare,
                ruolo: this.ruoloDaRegistrare
            })
        },
        async login() {
            await axios.post("/api/auth/login", {
                username: this.usernameEsistente,
                password: this.passwordEsistente
            })
        },
        async logout() {
            await axios.post("/api/auth/logout")
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
        <RouterLink :to="'/'"><button type="submit">Registrati</button></RouterLink>
    </form>

    <form @submit.prevent="login">
        <label>Username</label>
        <input v-model="usernameEsistente" type="text" />
        <label>Password</label>
        <input v-model="passwordEsistente" type="text" />
        <button type="submit">Registrati</button>
    </form>

    <RouterLink :to="'/'">
        <button @click="logout" type="submit">Logout</button>
    </RouterLink>

</template>