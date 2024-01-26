<script lang="ts">
import { defineComponent, PropType } from "vue";
import axios from "axios";
import { User, Ordine } from "../types";

export default defineComponent({
    props: {
        user: Object as PropType<User>,
        ordine: Array as PropType<Ordine[]>
    },
    emits: ["cancella"],
    data() {
        return{
            idProdotto: "",
            categoria: "",
            quantità: 0,
        }
    },
    methods: {
        async creaOrdine() {
            console.log(this.ordine)
            await axios.post("/api/ordini/crea/ordine", {
                IDUtente: this.user?.IDUtente,
                ord: this.ordine
            })
        },
        rimuoviProdotto(prodotto: any) {
            const item = {
                IDProdotto: prodotto.IDProdotto,
                Categoria: prodotto.Categoria,
                Quantità: prodotto.Quantità,
            }
            this.$emit("cancella", item)
        }


        /*aggiungiProdotto() {
            const tmp: Ordine = {
                IDProdotto: this.idProdotto,
                Categoria: this.categoria,
                Quantità: this.quantità
            }
            if(this.ordine != null) {
                this.ordine.push(tmp)
            }
            console.log(this.ordine)
            console.log(this.user?.Role)
            /*tmp.IDProdotto = ""
            tmp.Categoria = ""
            tmp.Quantità = 0
        }*/
    },
    mounted() {
        console.log(this.ordine)
    }
})
</script>

<template>
    <div class="flex-container">
        <h1 style="color: white;">CARRELLO</h1>
        <div style="color: white;" v-for = "prodotto in ordine">
            <RouterLink :to="'/prodotti/' + prodotto.Categoria + '-' + prodotto.IDProdotto">
                <p>{{ prodotto.IDProdotto }}</p>
                <p>{{ prodotto.Categoria }}</p>
                <p>{{ prodotto.Quantità }}</p>
                <button @click = "rimuoviProdotto(prodotto)">Rimuovi</button>
            </RouterLink>
        </div>
        <!--<form @submit.prevent="aggiungiProdotto" class="flex-item">
            <label>idProdotto</label>
            <input v-model="idProdotto" type="text" />

            <label>categoria</label>
            <input v-model="categoria" type="text" />

            <label>quantità</label>
            <input v-model="quantità" type="text" />
            <button type="submit">Crea</button>
        </form>-->
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