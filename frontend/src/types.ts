export interface Articolo {
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

export interface montaturaDaAggiungere {
    Modello: string
    Brand: string
    Prezzo: number
    Versione: string
    Calibro: string
    Ponte: string
    Aste: string
    Materiale: string
    Colore: string
    Immagine: string
}

export interface lacDaAggiungere {
    Modello: string
    Brand: string
    Prezzo: number
    Durata: string
    Fascia: string
    Focale: string
}

export interface nuovoProfilo {
    username: string
    password: string
    ruolo: string
}

export interface profiloEsistente {
    username: string
    password: string
}