<script lang="ts">
import { defineComponent, PropType } from "vue";
import { User } from "../types"
import axios from "axios";

export default defineComponent({
    data() {
        return {
        oldPassword: "",
        newPassword: ""
        }
    },
    props: {
        user: Object as PropType<User>,
    },
    methods: {
        async logout() {
            await axios.post("/api/auth/logout")
            window.location.href ="/"
        },
        async modifyPassword() {
            await axios.post("/api/auth/mod/password", {
                oldPassword: this.oldPassword,
                newPassword: this.newPassword
            })
            window.location.reload()
        }
    }
})
</script>


<template>
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 m-4" id="area-personale">
        <div class="col col-lg-3" v-if="user?.Role == 'admin'">
            <RouterLink :to="'/accesso/areaPersonale/operazioniProdotti'">
                <div class="card">
                    <img src="../../public/2.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Operazioni Prodotti</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                    </div>
                </div>
            </RouterLink>
        </div>
        <div class="col col-lg-3">
            <RouterLink v-if="user?.Role == 'admin'" :to="'/accesso/areaPersonale/operazioniOrdini'">
                <div class="card">
                    <img src="../../public/2.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Ordini per ID</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                    </div>
                </div>
            </RouterLink>
        </div>
        <div class="col col-lg-3">
            <RouterLink :to="'/accesso/areaPersonale/ordiniUtente'">
                <div class="card">
                    <img src="../../public/2.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Ordini Utente</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                    </div>
                </div>
            </RouterLink>
        </div>
        <div class="col col-lg-3">
            <RouterLink :to="'/accesso/areaPersonale/anagrafica'">
                <div class="card">
                    <img src="../../public/2.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Anagrafica</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                    </div>
                </div>
            </RouterLink>
        </div>
    </div>

    <div v-if="user" class="flex-container-ap">
        <form @submit.prevent="modifyPassword" class="flex-item">
            <label>Inserire la vecchia password</label>
            <input v-model="oldPassword" type="text"/>
            <label>Inserire la nuova password</label>
            <input v-model="newPassword" type="text"/>
            <button type="submit">Cambia Password</button>
        </form>
    </div>

    <div class="flex-container-op">
        <div class="flex-item"><button @click="logout" type="submit">Logout</button></div>
    </div>
</template>