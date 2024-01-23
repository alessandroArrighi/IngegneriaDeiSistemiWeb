import { Router } from "express"
import * as productsController from "../controllers/products-controller"

const router: Router = Router()

router.get("/api/prodotti/montature", productsController.allFrames)
router.get("/api/prodotti/lac", productsController.allLac)
router.get("/api/prodotti/lenti", productsController.allLenses)
router.post("/api/prodotti/aggiungi/montature", productsController.addNewFrame)
router.post("/api/prodotti/aggiungi/lenti", productsController.addNewLens)
router.post("/api/prodotti/aggiungi/lac", productsController.addNewLAC)
router.post("/api/prodotti/modifica/montature", productsController.modifyFrame)
router.post("/api/prodotti/modifica/lenti", productsController.modifyLens)
router.post("/api/prodotti/modifica/lac", productsController.modifyLAC)
router.post("/api/prodotti/elimina", productsController.deleteProduct)

export default router