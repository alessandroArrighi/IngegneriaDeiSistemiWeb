<script lang="ts">
import { defineComponent, PropType } from "vue";
import axios from "axios";
import { User } from "../types"

export default defineComponent({
    data() {
        return {
        usernameDaRegistrare: "",
        passwordDaRegistrare: "",
        ruoloDaRegistrare: "",
        usernameEsistente: "",
        passwordEsistente: "",
        }
    },
    props: {
        user: Object as PropType<User>,
    },
    methods: {
        async signup() {
            await axios.post("/api/auth/signin", {
                username: this.usernameDaRegistrare,
                password: this.passwordDaRegistrare,
                role: this.ruoloDaRegistrare
            })
            window.location.href ="/accesso/areaPersonale"
        },
        async login() {
            await axios.post("/api/auth/login", {
                username: this.usernameEsistente,
                password: this.passwordEsistente
            })
            window.location.href ="/accesso/areaPersonale"
        }
    },
    mounted() {
        if(this.$route.params.permesso == "admin") {
            this.ruoloDaRegistrare = "admin"
        }
        if(this.$route.params.permesso == "user") {
            this.ruoloDaRegistrare = "user"
        }
    }
})


</script>

<template>

    <h2>ACCEDI O CREA UN ACCOUNT</h2>


    <div class="flex-container-accesso">
        <div class="flex-item">
            <form v-if="!user" @submit.prevent="signup">
                <label>Username</label>
                <input v-model="usernameDaRegistrare" type="text" />
                <label>Password</label>
                <input v-model="passwordDaRegistrare" type="text" />
                <button type="submit">Registrati</button>
            </form>
        </div>
        <div class="flex-item">
            <form v-if="!user" @submit.prevent="login">
                <label>Username</label>
                <input v-model="usernameEsistente" type="text" />
                <label>Password</label>
                <input v-model="passwordEsistente" type="text" />
                <button type="submit">Accedi</button>
            </form>
        </div>
    </div>
</template>