export interface Montatura {
    Modello: string
    Brand: string
    IDProdotto: string
    Prezzo: number
    Versione: string
    Calibro: string
    Ponte: string
    Aste: string
    Materiale: string
    Colore: string
    Immagine: string
}

export interface User {
    IDUtente: number
    User: string
    Role: "admin" | "user"
}

export interface Ordine {
    IDProdotto: string
    Categoria: string
    Quantità: number
}