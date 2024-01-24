<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
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
        }
    }
})
</script>

<template>
    <div class="flex-container">
        <form @submit.prevent="getOrderFromID" class="flex-item">
            <label>ID Ordine</label>
            <input v-model="idRicerca" type="text" />
            <button type="submit">Cerca</button>
        </form>

        <div v-for="gruppoArticoli in datiOrdine" class="flex-item-group">
            <div v-for="articolo in gruppoArticoli" class="flex-item">
                <router-link :to="'/montature/' + articolo.IDProdotto">
                    <img loading="lazy" :src="articolo.Immagine" alt="/">
                    <p>{{ articolo.Modello }}</p>
                    <p>{{ articolo.Brand }}</p>
                    <p>{{ articolo.Prezzo }}</p>
                </router-link>
            </div>
        </div>

    </div>
</template>