import { Request, Response, response } from 'express'
import { connection } from '../utils/db'
import { loggedIn, adminLoggedIn } from '../utils/loggedIn'

export async function ordersFromID(req: Request, res: Response) {
    if(!await adminLoggedIn(req, res)) return

    connection.execute(
        "SELECT IDProdotto, Categoria, Quantità FROM dettOrdini WHERE IDOrdine = ?",
        [req.body.id],
        async function(err, results, fields) {
            const result = results as any
            const ordine = []

            for(let i = 0; i < result.length; ++i) {
                //ordine.push(await selecProdotto(result[i]['Categoria'], result[i]['IDProdotto']))
                ordine.push(await selecProdotto(`SELECT * FROM ${result[i]['Categoria']} WHERE Modello = '${result[i]['IDProdotto']}'`))
            }
            res.json(ordine)
        }
    )
}

export async function getOrder(req: Request, res: Response) {
    const user = await loggedIn(req, res)
    if(!user) return

    const IDOrdine = req.body.id

    connection.execute(
        "SELECT IDUtente FROM Ordini WHERE IDOrdine = ?",
        [IDOrdine],
        function(err, results, fields) {
            const check = (results as any)[0]['IDUtente']
            if(check != user.IDUtente) {
                res.status(403).send("Permesso negato")
                return
            }
            connection.execute(
                "SELECT IDProdotto, Categoria, Quantità FROM dettOrdini WHERE IDOrdine = ?",
                [IDOrdine],
                async function(err, results, fields) {
                    const result = results as any
                    const ordine = []
        
                    for(let i = 0; i < result.length; ++i) {
                        //ordine.push(await selecProdotto(result[i]['Categoria'], result[i]['IDProdotto']))
                        ordine.push(await selecProdotto(`SELECT * FROM ${result[i]['Categoria']} WHERE Modello = '${result[i]['IDProdotto']}'`))
                    }
                    res.json(ordine)
                }
            )
        }
    )
}

export async function ordersFromUser(req: Request, res: Response) {
    const user = await loggedIn(req, res)
    if(!user) return;

    connection.execute(
        //"SELECT * FROM dettOrdini dt JOIN Ordini o ON dt.IDOrdine = o.IDOrdine WHERE o.IDUtente = ? ORDER BY o.IDOrdine DESC",
        "SELECT IDOrdine FROM Ordini WHERE IDUtente = ?",
        [user.IDUtente],
        async function(err, results, fields) {
            res.json(results)

            /*
            const ordini = []

            let id = result[0]['IDOrdine'];
            let k = 0
            let tmp: any = []
            for(let i = 0; i < result.length; ++i) {
                if(id != result[i]['IDOrdine']) {
                    id = result[i]['IDOrdine']
                    ordini[k] = tmp
                    ++k
                    tmp = []
                }
                const prodotto = await selecProdotto(`SELECT * FROM ${result[i]['Categoria']} WHERE Modello = '${result[i]['IDProdotto']}'`)
                tmp.push(prodotto[0])
            }
            ordini[k] = tmp
            res.json(ordini)*/
        }
    )
}

const selecProdotto = async (query: string) => {
    const res = await connection
                .promise()
                .query(/*
                    `SELECT * FROM ${prodotto} WHERE Modello = ?`,
                    [modello]*/
                    query,
                    []
                )
                .then(([rows, fields]) => {
                    return rows
                })
    return (res as any)
}

export async function createOrder(req: Request, res: Response) {
    if(!await loggedIn(req, res)) return

    const data = new Date().toISOString().slice(0, 19)
    const ord = req.body.ord
    const IDUtente = req.body.IDUtente

    connection.execute(
        "INSERT INTO Ordini(IDUtente, Data) VALUES(?, ?)",
        [IDUtente, data],
        async function(err, results, fields) {
            connection.execute(
                "SELECT IDOrdine FROM Ordini WHERE IDUtente = ? AND Data = ?",
                [IDUtente, data],
                async function(err, results, fields) {
                    const IDOrdine = (results as any)[0]['IDOrdine']

                    for(let i = 0; i < ord.length; ++i) {
                        let IDProdotto: string = (ord as any)[i]['IDProdotto']
                        let Quantità: number = (ord as any)[i]['Quantità']
                        let Categoria: string = (ord as any)[i]['Categoria']

                        await selecProdotto(`INSERT INTO dettOrdini(IDOrdine, IDprodotto, Categoria, Quantità) VALUES(${IDOrdine}, '${IDProdotto}', '${Categoria}', ${Quantità})`)
                    }
                }
            )
        }
    )
    res.send("Ordine creato")
}


/*
const createProd = async (categoria: any, IDProdotto: string) => {
    const IDCategoria = "ID" + categoria

    const res = await connection
                                    .promise()
                                    .execute(
                                        `SELECT IDProdotto FROM Prodotti WHERE ${IDCategoria} = ?`, [IDProdotto]
                                    )
                                    .then(([rows, fields]) => { // IDMontature
                                        return rows
                                    })
    return (res as any)[0]['IDProdotto']
}*/

/*
export async function createGlassesOrder(req: Request, res: Response) {
    if(!await loggedIn(req, res)) return

    const { IDUtente, IDMontature, IDLenti } = req.params

    connection.execute(
        "INSERT INTO Ordini(IDUtente, IDMontature, IDLenti) VALUES(?, ?, ?)",
        [IDUtente, IDMontature, IDLenti],
        function(err, results, fields) {
            if(err) {
                res.send(err)
            }
            else {
                res.send("Ordine creato")
            }
        }
    )
}

export async function createLACOreder(req: Request, res: Response) {
    if(!await loggedIn(req, res)) return

    connection.execute(
        "INSERT INTO Ordini(IDLAC) VALUES(?)",
        [req.params.id],
        function(err, results, fields) {
            if(err) {
                res.send(err)
            }
            else {
                res.send("Ordine creato")
            }
        }
    )
}
*/