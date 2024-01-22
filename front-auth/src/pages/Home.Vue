<script lang = "ts">
    import axios from 'axios';
    import { defineComponent } from 'vue'

    interface Ordine {
        IDProdotto: string
        Categoria: string
        Quantità: number
    }
    
    export default defineComponent({
        props: {
            //user: Object as PropType<User>,
        },
        data() {
            return {
                risultato: null as Object | null,
            }
        },
        methods: {
            async sendReq() {
                const ord1: Ordine = {
                    IDProdotto: "CCC03",
                    Categoria: "Montature",
                    Quantità: 1
                }
                const ord2: Ordine = {
                    IDProdotto: "AAA07",
                    Categoria: "LAC",
                    Quantità: 1
                }
                const ord3: Ordine = {
                    IDProdotto: "BBB12",
                    Categoria: "Lenti",
                    Quantità: 2
                }
                                
                const ord = [1, ord1, ord2, ord3]

                await axios.post("/api/ordini/crea/ordine", {
                    ord
                })
            },

            async selecOrd() {
                const res = await axios.post("/api/ordini/idordine", {
                    id: 8
                })
                this.risultato = res.data
                const mont = res.data
                console.log(mont)
                for(let i = 0; i < mont.length; ++i) {
                    console.log(mont[i][0]['Modello'])
                }
            },

            async sendImg() {/*
                const imageFile = new File([""], "eyeglasses-wear.jpg")
                console.log(imageFile)
                await axios.post("/api/porva/img", imageFile, {
                    headers: {
                        'Content-Type': imageFile.type
                    }
                })*/
                await axios.post("/api/prova/mod", {
                    Modello: "CCC00",
                    Prezzo: 200
                })
            },

            async carrello() {
                const res = await axios.post("/api/ordini/user")
                console.log(res.data)
            }
        },
        mounted() {
            
        }
    })
</script>

<template>
    <h1>Home</h1>
    <button type="submit" @click = "sendReq">Crea Ordine</button>
    <button type="submit" @click = "selecOrd">Seleziona Ordine</button>
    <button type="submit" @click = "sendImg">Immagine</button>
    <button type="submit" @click = "carrello">Carrello</button>
</template>