<script lang="ts">
import { defineComponent, PropType } from "vue";
import { User, Utente } from "../types"
import axios from "axios";

export default defineComponent({
    data() {
        return {
            datiUtente: {} as Utente,
            nuoviDati: {} as Utente,
        }
    },
    props: {
        user: Object as PropType<User>,
    },
    methods: {
        async getUtente(){
            const res = await axios.get("/api/utenze")
            this.datiUtente = res.data

        },
        async modifyData() {
            await axios.post("/api/utenze/modifica", {
                dati: this.nuoviDati
            })
            window.location.reload()
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
        <label >User</label>
        <input v-model="nuoviDati.User" type="text" />
        <label >Nome</label>
        <input v-model="nuoviDati.Nome" type="text" />
        <label >Cognome</label>
        <input v-model="nuoviDati.Cognome" type="text" />
        <label >Mail</label>
        <input v-model="nuoviDati.Mail" type="text" />
        <label >Telefono</label>
        <input v-model="nuoviDati.Telefono" type="text" />
        <label >Indirizzo</label>
        <input v-model="nuoviDati.Indirizzo" type="text" />
        <button type="submit">Modifica LAC</button>
    </form>

</template>