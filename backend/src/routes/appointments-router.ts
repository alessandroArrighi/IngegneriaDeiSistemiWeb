import { Router } from "express"
import * as appointmentsController from "../controllers/appointments-controller"

const router: Router = Router()

router.get("/api/appuntamenti", appointmentsController.allAppointments)

export default router