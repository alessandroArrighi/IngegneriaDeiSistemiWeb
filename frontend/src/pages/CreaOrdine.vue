<script lang="ts">
import { defineComponent, PropType } from "vue";
import axios from "axios";
import { User, Ordine } from "../types";

export default defineComponent({
    props: {
        user: Object as PropType<User>,
    },
    data() {
        return{
            idProdotto: "",
            categoria: "",
            quantità: 0,
            ordine: [] as Ordine[],
            pos: 0
        }
    },
    methods: {
        async creaOrdine() {
            const ord = this.ordine
            
            await axios.post("/api/ordini/crea/ordine", {
                IDUtente: this.user?.IDUtente,
                ord
            })
        },


        aggiungiProdotto() {
            const tmp: Ordine = {
                IDProdotto: this.idProdotto,
                Categoria: this.categoria,
                Quantità: this.quantità
            }
            this.ordine[this.pos] = tmp
            console.log(this.ordine)
            console.log(this.user?.Role)
            this.pos++
            /*tmp.IDProdotto = ""
            tmp.Categoria = ""
            tmp.Quantità = 0*/
        }
    }
})
</script>

<template>
    <div class="flex-container">
        <form @submit.prevent="aggiungiProdotto" class="flex-item">
            <label>idProdotto</label>
            <input v-model="idProdotto" type="text" />

            <label>categoria</label>
            <input v-model="categoria" type="text" />

            <label>quantità</label>
            <input v-model="quantità" type="text" />
            <button type="submit">Crea</button>
        </form>
        <button @click="creaOrdine">Ordina</button>
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