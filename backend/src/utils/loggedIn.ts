import { Request, Response } from "express";
import { decodeAccessToken } from "./auth"
import { connection } from "./db";

export async function loggedIn(req: Request, res: Response) {
    const cookie = decodeAccessToken(req, res)

    if(!cookie) {
        res.status(403).send("Effettuare l'accesso")
        return false
    }

    return cookie
}

export async function adminLoggedIn(req: Request, res: Response) {
    const cookie = decodeAccessToken(req, res)

    if(!cookie) {
        res.status(403).send("Effettuare l'accesso")
        return false
    }

    const risultato = await connection
                .promise()
                .query(
                    "SELECT Ruolo FROM Utenze WHERE IDUtente = ?",
                    [cookie.IDUtente]
                )
                .then(([rows, fields]) => {
                    const ruolo = (rows as any)[0]['Ruolo']
                    if(ruolo != 'admin') {
                        res.status(403).send("Permesso negato")
                        return false
                    }
                    return cookie
                })
    return (risultato as any)
}