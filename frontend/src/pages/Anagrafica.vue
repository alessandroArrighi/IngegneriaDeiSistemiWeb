<script lang="ts">
import { defineComponent, PropType } from "vue";
import { User, Utente } from "../types"
import axios from "axios";

export default defineComponent({
    data() {
        return {
            datiUtente: {} as Utente,
            nuoviDati: {} as Utente
        }
    },
    props: {
        user: Object as PropType<User>,
    },
    methods: {
        getUtente(){
            axios.get("/api/utenze/" + this.user?.IDUtente)
            .then(response => this.datiUtente = response.data)
        },
        modifyData() {
            axios.post("/api/utenze/modifica", {
                dati: this.nuoviDati
            })
        }
    },
    mounted(){
        this.getUtente()
    }
})

</script>

<template>
    <div class="flex-item">
        <p>{{ datiUtente.IDUtente }}</p>
        <p>{{ datiUtente.User }}</p>
        <p>{{ datiUtente.Password }}</p>
        <p>{{ datiUtente.Nome }}</p>
        <p>{{ datiUtente.Cognome }}</p>
        <p>{{ datiUtente.Mail }}</p>
        <p>{{ datiUtente.Telefono }}</p>
        <p>{{ datiUtente.Indirizzo }}</p>
        <p>{{ datiUtente.Role }}</p>
    </div>

    
    <form @submit.prevent="modifyData" class="flex-item">
        <label >Modello</label>
        <input v-model="nuoviDati.User" type="text" />
        <label >Brand</label>
        <input v-model="nuoviDati.Nome" type="text" />
        <label >Prezzo</label>
        <input v-model="nuoviDati.Cognome" type="text" />
        <label >Durata</label>
        <input v-model="nuoviDati.Mail" type="text" />
        <label >Fascia</label>
        <input v-model="nuoviDati.Telefono" type="text" />
        <label >Focale</label>
        <input v-model="nuoviDati.Indirizzo" type="text" />
        <button type="submit">Modifica LAC</button>
    </form>

</template>