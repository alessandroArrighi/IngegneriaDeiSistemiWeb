import { connection } from "../utils/db"
import { decodeAccessToken, createAccessToken, deleteAccessToken } from "../utils/auth"
import { Request, Response } from "express"
import bcrypt from "bcrypt"

export async function registerUser(req: Request, res: Response) {
    const cookie = decodeAccessToken(req, res)

    if(!cookie) {
        res.status(403).send("L'utente ha già effettuato il log-in")
        return
    }

    const { username, password } = req.body

    connection.execute(
        "SELECT * FROM UtenzeCliente WHERE User = ?",
        [username],
        function(err, results, fields) {
            if(Array.isArray(results) && results.length > 0) {
                res.status(400).send("Username già registrato")
                return
            }
            const passwordHash = bcrypt.hash(password, 10)

            connection.execute(
                "INSERT INTO UtenzeCliente (User, Password) VALUES(?, ?)",
                [username, passwordHash],
                function(err, results, fields) {
                    connection.execute(
                        "SELECT IDUtente, User FROM UtenzeClienti WHERE User = ?",
                        [username],
                        function(err, results, fields) {
                            const newUser = results as any
                            createAccessToken(req, res, newUser)
                            res.json({message: "Registrazione effettuata con successo"})
                        }
                    )
                }
            )
        }
    )
}