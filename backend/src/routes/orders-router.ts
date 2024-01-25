import { Router } from "express"
import * as ordersController from "../controllers/orders-controller"

const router: Router = Router()

router.post("/api/ordini/idordine", ordersController.ordersFromID)      //fatto
/*router.get("/api/ordini/crea/occhiali/:IDUtente-:IDMontature-:IDLenti", ordersController.createGlassesOrder)
router.get("/api/ordini/crea/lac/:id", ordersController.createLACOreder)*/
router.post("/api/ordini/crea/ordine", ordersController.createOrder)    //fatto
router.post("/api/ordini/user", ordersController.ordersFromUser)        // fatto
router.post("/api/ordini/getordine", ordersController.getOrder)

export default router