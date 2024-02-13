<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
    data() {
        return{
            datiOrdine: [] as any[],
        }
    },
    methods: {
        async getOrderFromID() {
            const res = await axios.post("/api/ordini/user")
            this.datiOrdine = res.data
        }
    },
    mounted() {
        this.getOrderFromID()
    }
})
</script>

<template>
    <div class="flex-container-prodotti">
        <div v-for="ordine in datiOrdine" class="flex-item">
            <RouterLink :to="'/accesso/areaPersonale/operazioniOrdini/' + ordine.IDOrdine"><p>{{ ordine.IDOrdine }}</p></RouterLink>
        </div>
    </div>    
</template>