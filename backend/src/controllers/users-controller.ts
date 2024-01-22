import { Request, Response } from 'express'
import { connection } from '../utils/db'
import { loggedIn } from '../utils/loggedIn'

export async function getUsersFromID(req: Request, res: Response) {
    if(!await loggedIn(req, res)) return
        
    connection.execute(
        `SELECT * FROM Utenze WHERE IDUtente = ?`,
        [req.params.id],
        function(err, results, fields) {
            const user = (results as any)[0]
            delete user.password
            res.json(user)
        }
    )
}

export async function modifyUser(req: Request, res: Response) {
    const usr = await loggedIn(req, res)
    if(!usr) return

    const { User, Nome, Cognome, Mail, Telefono, Indirizzo } = req.body

    connection.execute(
        "SELECT * FROM Utenze WHERE IDUtente = ?",
        [usr.IDUtente],
        function(err, results, fields) {
            const result = (results as any)[0]

            connection.execute(
                "UPDATE Utenze SET User = ?, Nome = ?, Cognome = ?, Mail = ?, Telefono = ?, Indirizzo = ? WHERE IDUtente = ?",
                [
                    User != null ? User : result.User,
                    Nome != null ? Nome : result.Nome,
                    Cognome != null ? Cognome : result.Cognome,
                    Mail != null ? Mail : result.Mail,
                    Telefono != null ? Telefono : result.Telefono,
                    Indirizzo != null ? Indirizzo : result.Indirizzo,
                    result.IDUtente
                ],
                function(err, results, fields) {
                    if(err) {
                        res.status(400).send(err)
                        return
                    }
                    res.send("Dati modificati")
                }
            )
        }
    )
}