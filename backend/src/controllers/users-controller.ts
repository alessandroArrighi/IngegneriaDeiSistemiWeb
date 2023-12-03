import { Request, Response } from 'express'
import { connection } from '../utils/db'

export async function customersUsersFromID(req: Request, res: Response) {
    connection.execute(
        `SELECT * FROM UtenzeCliente WHERE IDUtente = ?`,
        [req.params.id],
        function(err, results, fields) {
            res.json(results)
        }
    )
}

export async function adminUsersFromID(req: Request, res: Response) {
    connection.execute(
        `SELECT * FROM UtenzeAdmin WHERE IDUtente = ?`,
        [req.params.id],
        function(err, results, fields) {
            res.json(results)
        }
    )
}