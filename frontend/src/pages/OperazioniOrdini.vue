<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
    data() {
        return{
            idRicerca: "",
            datiOrdine: [] as Ordine[],
        }
    },
    methods: {
        async getOrderFromID() {
            await axios.post("/api/ordini/idordine", {
                id: this.idRicerca,
            }).then(response => this.datiOrdine = response.data);
            console.log(this.datiOrdine);
            this.idRicerca= "";
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
        
        <!--<div v-for="ordine  in sortedData.slice(0, aggiungiElementi)" class="flex-item">
            <RouterLink :to="'/montature/' + montatura.IDProdotto">
            <img loading="lazy" :src="montatura.Immagine" alt="/">
            <p>{{ montatura.IDProdotto }}</p>
            <p>{{ montatura.Brand }}</p>
            <p>{{ montatura.Prezzo }}</p>
            </RouterLink>
        </div>-->

    </div>
</template>