import { Request, Response } from 'express'
import { connection } from '../utils/db'
import { adminLoggedIn } from "../utils/loggedIn"

export async function allFrames(req: Request, res: Response) {
    connection.execute(
        `SELECT * FROM Montature`,
        [],
        function(err, results, fields) {
            res.json(results)
        }
    )
}

export async function addNewFrame(req: Request, res: Response) {
    if(!await adminLoggedIn(req, res)) return

    const { Modello, Brand, Prezzo, Versione, Calibro, Ponte, Aste, Materiale, Colore, Immagine } = req.body
    
    connection.execute(
        "INSERT INTO Montature(Modello, Brand, Prezzo, Versione, Calibro, Ponte, Aste, Materiale, Colore, Immagine) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [Modello, Brand, Prezzo, Versione, Calibro, Ponte, Aste, Materiale, Colore, Immagine],
        function(err, results, fields) {
            if(err) {
                res.status(400).send(err)
                return
            }
            res.send("Prodotto aggiunto")
        }
    )
}

export async function modifyFrame(req: Request, res: Response) {
    if(!await adminLoggedIn(req, res)) return

    const { Modello, Brand, Prezzo, Versione, Calibro, Ponte, Aste, Materiale, Colore, Immagine, NewModello } = req.body

    connection.execute(
        "SELECT * FROM Montature WHERE Modello = ?",
        [Modello],
        function(err, results, fields) {
            const result = (results as any)[0]
            connection.execute(
                "UPDATE Montature SET Modello = ?, Brand = ?, Prezzo = ?, Versione = ?, Calibro = ?, Ponte = ?, Aste = ?, Materiale = ?, Colore = ?, Immagine = ? WHERE Modello = ?",
                [
                    NewModello != null ? NewModello : Modello,
                    Brand != null ? Brand : result['Brand'],
                    Prezzo != null ? Prezzo : result['Prezzo'],
                    Versione != null ? Versione : result['Versione'],
                    Calibro != null ? Calibro : result['Calibro'],
                    Ponte != null ? Ponte : result['Ponte'],
                    Aste != null ? Aste : result['Aste'],
                    Materiale != null ? Materiale : result['Materiale'],
                    Colore != null ? Colore : result['Colore'],
                    Immagine != null ? Immagine : result['Immagine'],
                    Modello
                ]
            )
        }
    )
}

export async function addNewLens(req: Request, res: Response) {
    if(!await adminLoggedIn(req, res)) return

    const { Modello, Brand, Prezzo, Versione, Antiriflesso, Sfericità, Focale } = req.body

    connection.execute(
        "INSERT INTO Lenti(Modello, Brand, Prezzo, Versione, Antiriflesso, Sfericità, Focale) VALUES(?, ?, ?, ?, ?, ?, ?)",
        [Modello, Brand, Prezzo, Versione, Antiriflesso, Sfericità, Focale],
        function(err, results, fields) {
            if(err) {
                res.status(400).send(err)
                return
            }
            res.send("Prodotto aggiunto")
        }
    )
}

export async function modifyLens(req: Request, res: Response) {
    if(!await adminLoggedIn(req, res)) return

    const { Modello, Brand, Prezzo, Versione, Antiriflesso, Sfericità, Focale, NewModello } = req.body

    connection.execute(
        "SELECT * FROM Lenti WHERE Modello = ?",
        [Modello],
        function(err, results, fields) {
            const result = (results as any)[0]
            connection.execute(
                "UPDATE Lenti SET Modello = ?, Brand = ?, Prezzo = ?, Versione = ?, Antiriflesso = ?, Sfericità = ?, Focale = ? WHERE Modello = ?",
                [
                    NewModello != null ? NewModello : Modello,
                    Brand != null ? Brand : result['Brand'],
                    Prezzo != null ? Prezzo : result['Prezzo'],
                    Versione != null ? Versione : result['Versione'],
                    Antiriflesso != null ? Antiriflesso : result['Antiriflesso'],
                    Sfericità != null ? Sfericità : result['Sfericità'],
                    Focale != null ? Focale : result['Focale'],
                    Modello
                ]
            )
        }
    )
}

export async function addNewLAC(req: Request, res: Response) {
    if(!await adminLoggedIn(req, res)) return

    const { Modello, Brand, Prezzo, Durata, Fascia, Focale } = req.body

    connection.execute(
        "INSERT INTO LAC(Modello, Brand, Prezzo, Durata, Fascia, Focale) VALUES(?, ?, ?, ?, ?, ?)",
        [Modello, Brand, Prezzo, Durata, Fascia, Focale],
        function(err, results, fields) {
            if(err) {
                res.status(400).send(err)
                return
            }
            res.send("Prodotto aggiunto")
        }
    )
}

export async function modifyLAC(req: Request, res: Response) {
    if(!await adminLoggedIn(req, res)) return

    const { Modello, Brand, Prezzo, Durata, Fascia, Focale, NewModello } = req.body

    connection.execute(
        "SELECT * FROM LAC WHERE Modello = ?",
        [Modello],
        function(err, results, fields) {
            const result = (results as any)[0]
            connection.execute(
                "UPDATE LAC SET Modello = ?, Brand = ?, Prezzo = ?, Durata = ?, Fascia = ?, Focale = ? WHERE Modello = ?",
                [
                    NewModello != null ? NewModello : Modello,
                    Brand != null ? Brand : result['Brand'],
                    Prezzo != null ? Prezzo : result['Prezzo'],
                    Durata != null ? Durata : result['Durata'],
                    Fascia != null ? Fascia : result['Fascia'],
                    Focale != null ? Focale : result['Focale'],
                    Modello
                ]
            )
        }
    )
}

export async function deleteProduct(req: Request, res: Response) {
    if(!await adminLoggedIn(req, res)) return

    const { modello, categoria } = req.body

    connection.execute(
        `DELETE FROM ${categoria} WHERE Modello = ?`,
        [modello],
        function(err, results, fields) {
            if(err) {
                res.status(400).send(err)
                return
            }
            res.send("Prodotto eliminato")
        }
    )
}

export async function allLac(req: Request, res: Response) {
    connection.execute(
        `SELECT * FROM LAC`,
        [],
        function(err, results, fields) {
            res.json(results)
        } 
    )
}

export async function allLenses(req: Request, res: Response) {
    connection.execute(
        `SELECT * FROM Lenti`,
        [],
        function(err, results, fields) {
            res.json(results)
        }
    )
}