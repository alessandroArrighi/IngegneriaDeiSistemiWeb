<script lang="ts">
import { defineComponent, PropType } from "vue";
import axios from "axios";
import { User, Ordine } from "../types";
import { setItem, getItem, STORAGE_NAME, EXPIRE_TIME } from "../utils/localStorage"

export default defineComponent({
    props: {
        user: Object as PropType<User>,
    },
    emits: ["cancella"],
    data() {
        return{
            idProdotto: "",
            categoria: "",
            quantità: 0,
            ordine: [] as Ordine[]
        }
    },
    methods: {
        async creaOrdine() {
            await axios.post("/api/ordini/crea/ordine", {
                IDUtente: this.user?.IDUtente,
                ord: this.ordine
            })
            window.location.href="/"
        },
        async rimuoviProdotto(prodotto: any) {
            const item = {
                IDProdotto: prodotto.IDProdotto,
                Categoria: prodotto.Categoria,
                Quantità: prodotto.Quantità,
                Prezzo: prodotto.Prezzo
            }
            var index = this.ordine.findIndex(obj => obj.IDProdotto === item.IDProdotto);

            if (index !== -1) {
                this.ordine.splice(index, 1);
            }
            await setItem(STORAGE_NAME, this.ordine, EXPIRE_TIME)
        },

        async getOrder() {
            const order = await getItem(STORAGE_NAME)
            this.ordine = order
        }
    },
    mounted() {
        this.getOrder()
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
                <p>{{ prodotto.Prezzo }}</p>
            </RouterLink>
            <button @click = "rimuoviProdotto(prodotto)">Rimuovi</button>
        </div>
        <button @click="creaOrdine">Ordina</button>
    </div>
<section class="h-100 h-custom" style="background-color: #eee;">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col">
        <div class="card">
          <div class="card-body p-4">

            <div class="row">

              <div class="col-lg-7">
                <h5 class="mb-3"><a href="#!" class="text-body"><i
                      class="fas fa-long-arrow-alt-left me-2"></i>Continue shopping</a></h5>
                <hr>

                <div class="d-flex justify-content-between align-items-center mb-4">
                  <div>
                    <p class="mb-1">Shopping cart</p>
                    <p class="mb-0">You have 4 items in your cart</p>
                  </div>
                  <div>
                    <p class="mb-0"><span class="text-muted">Sort by:</span> <a href="#!"
                        class="text-body">price <i class="fas fa-angle-down mt-1"></i></a></p>
                  </div>
                </div>

                <div class="card mb-3" v-for = "prodotto in ordine">
                  <div class="card-body">
                   <RouterLink :to="'/prodotti/' + prodotto.Categoria + '-' + prodotto.IDProdotto">
                    <div class="d-flex justify-content-between">
                      <div class="d-flex flex-row align-items-center">
                        <div>
                          <img
                            src="../../public/1.jpg"
                            class="img-fluid rounded-3" alt="Shopping item" style="width: 65px;">
                        </div>
                        <div class="ms-3">
                          <h5>{{ prodotto.IDProdotto }}</h5>
                          <p class="small mb-0">{{ prodotto.Categoria }}</p>
                        </div>
                      </div>
                      <div class="d-flex flex-row align-items-center">
                        <div style="width: 50px;">
                          <h5 class="fw-normal mb-0">{{ prodotto.Quantità }}</h5>
                        </div>
                        <div style="width: 80px;">
                          <h5 class="mb-0">{{ prodotto.Prezzo }}</h5>
                        </div>
                        <a href="#!" style="color: #cecece;"><i class="fas fa-trash-alt"></i></a>
                      </div>
                    </div>
                   </RouterLink>
                  </div>
                </div>
              </div>
              <div class="col-lg-5">

                <div class="card bg-primary text-white rounded-3">
                  <div class="card-body">
                    <div class="d-flex justify-content-between align-items-center mb-4">
                      <h5 class="mb-0">Card details</h5>
                      <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                        class="img-fluid rounded-3" style="width: 45px;" alt="Avatar">
                    </div>

                    <p class="small mb-2">Card type</p>
                    <a href="#!" type="submit" class="text-white"><i
                        class="fab fa-cc-mastercard fa-2x me-2"></i></a>
                    <a href="#!" type="submit" class="text-white"><i
                        class="fab fa-cc-visa fa-2x me-2"></i></a>
                    <a href="#!" type="submit" class="text-white"><i
                        class="fab fa-cc-amex fa-2x me-2"></i></a>
                    <a href="#!" type="submit" class="text-white"><i class="fab fa-cc-paypal fa-2x"></i></a>

                    <form class="mt-4">
                      <div class="form-outline form-white mb-4">
                        <input type="text" id="typeName" class="form-control form-control-lg" siez="17"
                          placeholder="Cardholder's Name" />
                        <label class="form-label" for="typeName">Cardholder's Name</label>
                      </div>

                      <div class="form-outline form-white mb-4">
                        <input type="text" id="typeText" class="form-control form-control-lg" siez="17"
                          placeholder="1234 5678 9012 3457" minlength="19" maxlength="19" />
                        <label class="form-label" for="typeText">Card Number</label>
                      </div>

                      <div class="row mb-4">
                        <div class="col-md-6">
                          <div class="form-outline form-white">
                            <input type="text" id="typeExp" class="form-control form-control-lg"
                              placeholder="MM/YYYY" size="7" minlength="7" maxlength="7" />
                            <label class="form-label" for="typeExp">Expiration</label>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-outline form-white">
                            <input type="password" id="typeText" class="form-control form-control-lg"
                              placeholder="&#9679;&#9679;&#9679;" size="1" minlength="3" maxlength="3" />
                            <label class="form-label" for="typeText">Cvv</label>
                          </div>
                        </div>
                      </div>

                    </form>

                    <hr class="my-4">

                    <div class="d-flex justify-content-between">
                      <p class="mb-2">Subtotal</p>
                      <p class="mb-2">$4798.00</p>
                    </div>

                    <div class="d-flex justify-content-between">
                      <p class="mb-2">Shipping</p>
                      <p class="mb-2">$20.00</p>
                    </div>

                    <div class="d-flex justify-content-between mb-4">
                      <p class="mb-2">Total(Incl. taxes)</p>
                      <p class="mb-2">$4818.00</p>
                    </div>

                    <button type="button" class="btn btn-info btn-block btn-lg">
                      <div class="d-flex justify-content-between">
                        <span>$4818.00</span>
                        <span>Checkout <i class="fas fa-long-arrow-alt-right ms-2"></i></span>
                      </div>
                    </button>

                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>