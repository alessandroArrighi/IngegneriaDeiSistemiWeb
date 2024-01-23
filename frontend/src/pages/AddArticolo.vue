<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
    data() {
        return {
        //datiMontature: [] as Articolo[],
        modelloMontatura: "",
        brandMontatura: "",
        prezzoMontatura: 0,
        versioneMontatura: "",
        calibroMontatura: "",
        ponteMontatura: "",
        asteMontatura: "",
        materialeMontatura: "",
        coloreMontatura: "",
        immagineMontatura:"",
        modelloLAC: "",
        brandLAC: "",
        prezzoLAC: 0,
        durataLAC: "",
        fasciaLAC: "",
        focaleLAC: "",
        }
    },
    methods: {
        async addMontatura() {
            await axios.post("/api/prodotti/aggiungi/montature", {
                Modello: this.modelloMontatura,
                Brand: this.brandMontatura,
                Prezzo: this.prezzoMontatura,
                Versione: this.versioneMontatura,
                Calibro: this.calibroMontatura,
                Ponte: this.ponteMontatura,
                Aste: this.asteMontatura,
                Materiale: this.materialeMontatura,
                Colore: this.coloreMontatura,
                Immagine: this.immagineMontatura
            })
        },
        async addLAC() {
            await axios.post("/api/prodotti/aggiungi/lac", {
                Modello: this.modelloLAC,
                Brand: this.brandLAC,
                Prezzo: this.prezzoLAC,
                Durata: this.durataLAC,
                Fascia: this.fasciaLAC,
                Focale: this.focaleLAC
            })
        }
    },
})

</script>

<template>

    <form @submit.prevent="addMontatura">
        <label >Modello</label>
        <input v-model="modelloMontatura" type="text" />
        <label >Brand</label>
        <input v-model="brandMontatura" type="text" />
        <label >Prezzo</label>
        <input v-model="prezzoMontatura" type="text" />
        <label >Versione</label>
        <input v-model="versioneMontatura" type="text" />
        <label >Calibro</label>
        <input v-model="calibroMontatura" type="text" />
        <label >Ponte</label>
        <input v-model="ponteMontatura" type="text" />
        <label >Aste</label>
        <input v-model="asteMontatura" type="text" />
        <label >Materiale</label>
        <input v-model="materialeMontatura" type="text" />
        <label >Colore</label>
        <input v-model="coloreMontatura" type="text" />
        <label >Immagine</label>
        <input v-model="immagineMontatura" type="text" />
        <button type="submit">Aggiungi Prodotto</button>
    </form>


    <form @submit.prevent="addLAC">
        <label >Modello</label>
        <input v-model="modelloLAC" type="text" />
        <label >Brand</label>
        <input v-model="brandLAC" type="text" />
        <label >Prezzo</label>
        <input v-model="prezzoLAC" type="text" />
        <label >Durata</label>
        <input v-model="durataLAC" type="text" />
        <label >Fascia</label>
        <input v-model="fasciaLAC" type="text" />
        <label >Focale</label>
        <input v-model="focaleLAC" type="text" />
        <button type="submit">Aggiungi Prodotto</button>
    </form>

</template>