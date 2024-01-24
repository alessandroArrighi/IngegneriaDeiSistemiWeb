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

        modelloMontaturaNuovo: "",
        brandMontaturaNuovo: "",
        prezzoMontaturaNuovo: 0,
        versioneMontaturaNuovo: "",
        calibroMontaturaNuovo: "",
        ponteMontaturaNuovo: "",
        asteMontaturaNuovo: "",
        materialeMontaturaNuovo: "",
        coloreMontaturaNuovo: "",
        immagineMontaturaNuovo: "",
        newmodelloMontaturaNuovo: "",

        modelloLACNuovo: "",
        brandLACNuovo: "",
        prezzoLACNuovo: "",
        versioneLACNuovo: "",
        durataLACNuovo: "", 
        fasciaLACNuovo: "",
        focaleLACNuovo: "",
        newmodelloLACNuovo: "",

        modelloDaEliminare: "",
        categoriaModelloDaEliminare: ""
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
            });
            this.modelloMontatura = "";
            this.brandMontatura = "";
            this.prezzoMontatura = 0;
            this.versioneMontatura = "";
            this.calibroMontatura = "";
            this.ponteMontatura = "";
            this.asteMontatura = "";
            this.materialeMontatura = "";
            this.coloreMontatura = "";
            this.immagineMontatura = "";
        },
        async addLAC() {
            await axios.post("/api/prodotti/aggiungi/lac", {
                Modello: this.modelloLAC,
                Brand: this.brandLAC,
                Prezzo: this.prezzoLAC,
                Durata: this.durataLAC,
                Fascia: this.fasciaLAC,
                Focale: this.focaleLAC
            });
            this.modelloLAC = "";
            this.brandLAC = "";
            this.prezzoLAC = 0;
            this.durataLAC = "";
            this.fasciaLAC = "";
            this.focaleLAC = "";
        },
        async modifyMontatura() {
            await axios.post("/api/prodotti/modifica/montature", {
                Modello: this.modelloMontaturaNuovo,
                Brand: this.brandMontaturaNuovo,
                Prezzo: this.prezzoMontaturaNuovo,
                Versione: this.versioneMontaturaNuovo,
                Calibro: this.calibroMontaturaNuovo,
                Ponte: this.ponteMontaturaNuovo,
                Aste: this.asteMontaturaNuovo,
                Materiale: this.materialeMontaturaNuovo,
                Colore: this.coloreMontaturaNuovo,
                Immagine: this.immagineMontaturaNuovo,
                NewModello: this.newmodelloMontaturaNuovo
            });
            this.modelloMontaturaNuovo = "";
            this.brandMontaturaNuovo = "";
            this.prezzoMontaturaNuovo = 0;
            this.versioneMontaturaNuovo = "";
            this.calibroMontaturaNuovo = "";
            this.ponteMontaturaNuovo = "";
            this.asteMontaturaNuovo = "";
            this.materialeMontaturaNuovo = "";
            this.coloreMontaturaNuovo = "";
            this.immagineMontaturaNuovo = "";
            this.newmodelloMontaturaNuovo = "";
        },
        async modifyLAC() {
            await axios.post("/api/prodotti/modifica/lac", {
                Modello: this.modelloLACNuovo,
                Brand: this.brandLACNuovo,
                Prezzo: this.prezzoLACNuovo,
                Durata: this.durataLACNuovo,
                Fascia: this.fasciaLACNuovo,
                Focale: this.focaleLACNuovo,
                NewModello: this.newmodelloLACNuovo
            });
            this.modelloLACNuovo = "";
            this.brandLACNuovo = "";
            this.prezzoLACNuovo = "";
            this.versioneLACNuovo = "";
            this.durataLACNuovo = "";
            this.fasciaLACNuovo = "";
            this.focaleLACNuovo = "";
            this.newmodelloLACNuovo = "";
        }, 
        async deleteProduct() {
            await axios.post("/api/prodotti/elimina", {
                modello: this.modelloDaEliminare,
                categoria: this.categoriaModelloDaEliminare
            });
            this.modelloDaEliminare = "";
            this.categoriaModelloDaEliminare = "";
        }
    },
})

</script>

<template>

    <div class="flex-container">
        <form @submit.prevent="addMontatura" class="flex-item">
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
            <button type="submit">Aggiungi Montatura</button>
        </form>

        <form @submit.prevent="addLAC" class="flex-item">
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
            <button type="submit">Aggiungi LAC</button>
        </form>

        <form @submit.prevent="modifyMontatura" class="flex-item">
            <label >Modello</label>
            <input v-model="modelloMontaturaNuovo" type="text" />
            <label >Brand</label>
            <input v-model="brandMontaturaNuovo" type="text" />
            <label >Prezzo</label>
            <input v-model="prezzoMontaturaNuovo" type="text" />
            <label >Versione</label>
            <input v-model="versioneMontaturaNuovo" type="text" />
            <label >Calibro</label>
            <input v-model="calibroMontaturaNuovo" type="text" />
            <label >Ponte</label>
            <input v-model="ponteMontaturaNuovo" type="text" />
            <label >Aste</label>
            <input v-model="asteMontaturaNuovo" type="text" />
            <label >Materiale</label>
            <input v-model="materialeMontaturaNuovo" type="text" />
            <label >Colore</label>
            <input v-model="coloreMontaturaNuovo" type="text" />
            <label >Immagine</label>
            <input v-model="immagineMontaturaNuovo" type="text" />
            <label >NewModello</label>
            <input v-model="newmodelloMontaturaNuovo" type="text" />
            <button type="submit">Modifica Montatura</button>
        </form>

        <form @submit.prevent="modifyLAC" class="flex-item">
            <label >Modello</label>
            <input v-model="modelloLACNuovo" type="text" />
            <label >Brand</label>
            <input v-model="brandLACNuovo" type="text" />
            <label >Prezzo</label>
            <input v-model="prezzoLACNuovo" type="text" />
            <label >Durata</label>
            <input v-model="durataLACNuovo" type="text" />
            <label >Fascia</label>
            <input v-model="fasciaLACNuovo" type="text" />
            <label >Focale</label>
            <input v-model="focaleLACNuovo" type="text" />
            <label >Nuovo Modello</label>
            <input v-model="newmodelloLACNuovo" type="text" />
            <button type="submit">Modifica LAC</button>
        </form>

        <form @submit.prevent="deleteProduct" class="flex-item">
            <label>Modello da eliminare</label>
            <input v-model="modelloDaEliminare" type="text"/>
            <label>Categoria prodotto</label>
            <input v-model="categoriaModelloDaEliminare" type="text" />
            <button type="submit">Elimina</button>
        </form>
    </div>
</template>