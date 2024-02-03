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
    }
})
</script>


<template>
    <div v-if="user" class="flex-container-ap">
        <form @submit.prevent="modifyPassword" class="flex-item">
            <label>Inserire la vecchia password</label>
            <input v-model="oldPassword" type="text"/>
            <label>Inserire la nuova password</label>
            <input v-model="newPassword" type="text"/>
            <button type="submit">Cambia Password</button>
        </form>
    </div>

    <div class="flex-container-op">
        <div class="flex-item"><button @click="logout" type="submit">Logout</button></div>
        <RouterLink v-if="user?.Role == 'admin'" :to="'/accesso/areaPersonale/operazioniProdotti'" class="flex-item"><button>Operazioni Prodotti</button></RouterLink>
        <RouterLink v-if="user?.Role == 'admin'" :to="'/accesso/areaPersonale/operazioniOrdini'" class="flex-item"><button>Ordini per ID</button></RouterLink>
        <RouterLink :to="'/accesso/areaPersonale/ordiniUtente'" class="flex-item"><button>Ordini Utente</button></RouterLink>
        <RouterLink :to="'/accesso/areaPersonale/anagrafica'" class="flex-item"><button>Anagrafica</button></RouterLink>
    </div>
</template>