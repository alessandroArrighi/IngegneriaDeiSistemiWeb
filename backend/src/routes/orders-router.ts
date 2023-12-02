import { Router } from "express"
import * as ordersController from "../controllers/orders-controller"

const router: Router = Router()

router.get("/api/ordini", ordersController.ordersFromID)

export default router