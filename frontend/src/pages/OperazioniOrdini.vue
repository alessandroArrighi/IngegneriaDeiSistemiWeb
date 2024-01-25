<script lang="ts">
import { defineComponent, PropType } from "vue";
import axios from "axios";
import { User } from "../types"

export default defineComponent({
    props: {
        user: Object as PropType<User>,
    },
    data() {
        return{
            idRicerca: "",
            datiOrdine: [] as any[],
        }
    },
    methods: {
        async getOrderFromID() {
            const res = await axios.post("/api/ordini/idordine", {
                id: this.idRicerca,
            })
            this.datiOrdine = res.data
            this.idRicerca= ""
        },
        async getOrderIniziale() {
            const res = await axios.post("/api/ordini/getordine", {
                id: this.$route.params.IDOrdine,
            })
            this.datiOrdine = res.data
        }
    },
    mounted() {
        if(this.user?.Role == 'user') this.getOrderIniziale()
    }
})
</script>

<template>
    <div class="flex-container">
        <form v-if="user?.Role == 'admin'" @submit.prevent="getOrderFromID" class="flex-item">
            <label>ID Ordine</label>
            <input v-model="idRicerca" type="text" />
            <button type="submit">Cerca</button>
        </form>

        <div v-for="articolo in datiOrdine" class="flex-item">
            <router-link :to="'/montature/' + articolo.IDProdotto">
                <img loading="lazy" :src="articolo.Immagine" alt="/">
                <p>{{ articolo.Modello }}</p>
                <p>{{ articolo.Brand }}</p>
                <p>{{ articolo.Prezzo }}</p>
            </router-link>
        </div>

    </div>
</template>