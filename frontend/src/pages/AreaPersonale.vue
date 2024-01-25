<script lang="ts">
import { defineComponent, PropType } from "vue";
import { User } from "../types"
import axios from "axios";

export default defineComponent({
    data() {
        return {
        oldPassword: "",
        newPassword: ""
        }
    },
    props: {
        user: Object as PropType<User>,
    },
    methods: {
        async logout() {
            await axios.post("/api/auth/logout")
            window.location.href ="/"
        },
        async modifyPassword() {
            await axios.post("/api/auth/mod/password", {
                oldPassword: this.oldPassword,
                newPassword: this.newPassword
            })
            window.location.reload()
        }
    },
    mounted() {
        console.log(this.user?.IDUtente)
    }
})
</script>


<template>
    <div v-if="user">

        <button @click="logout" type="submit">Logout</button>

        <form @submit.prevent="modifyPassword">
            <label>Inserisci la vecchia password</label>
            <input v-model="oldPassword" type="text"/>
            <label>Inserisci la nuova password</label>
            <input v-model="newPassword" type="text"/>
            <button type="submit">Cambia Password</button>
        </form>

        <RouterLink v-if="user?.Role == 'admin'" :to="'/accesso/areaPersonale/operazioniProdotti'"><button>Operazioni Prodotti Admin</button></RouterLink>
        <RouterLink v-if="user?.Role == 'admin'" :to="'/accesso/areaPersonale/operazioniOrdini'"><button>Ordini per ID Admin</button></RouterLink>
        <RouterLink :to="'/accesso/areaPersonale/ordiniUtente'"><button>Ordini Utente</button></RouterLink>
        <RouterLink :to="'/accesso/areaPersonale/anagrafica'"><button>Anagrafica</button></RouterLink>
    </div>

    <div class="flex-item">
        <p>{{ user?.IDUtente }}</p>
    </div>


</template>