import { Router } from "express"
import * as usersController from "../controllers/users-controller"

const router: Router = Router()

router.get("/api/utenzeClienti", usersController.allCustomersUsers)
router.get("/api/utenzeAdmin", usersController.allAdminUsers)

export default router