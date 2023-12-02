import { Request, Response } from 'express'
import { connection } from '../utils/db'

export async function allCustomersUsers(req: Request, res: Response) {
    connection.execute(
        `SELECT * FROM UtenzeCliente`,
        [],
        function(err, results, fields) {
            res.json(results)
        }
    )
}

export async function allAdminUsers(req: Request, res: Response) {
    connection.execute(
        `SELECT * FROM UtenzeAdmin`,
        [],
        function(err, results, fields) {
            res.json(results)
        }
    )
}