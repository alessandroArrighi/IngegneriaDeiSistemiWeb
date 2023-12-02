import express, { Express } from 'express'
import framesRouter from "./routes/frames-router"
import lensesRouter from "./routes/lenses-router"
import lacRouter from "./routes/lac-router"
import appointmentsRouter from "./routes/appointments-router"
import ordersRouter from "./routes/orders-router"
import usersRouter from "./routes/users-router"

const app: Express = express()
const port: Number = 3000

app.use(express.static("dist-forntend"))

app.use(framesRouter)
app.use(lensesRouter)
app.use(lacRouter)
app.use(appointmentsRouter)
app.use(ordersRouter)
app.use(usersRouter)

app.use(function(req, res, next) {
    res.setHeader("Content-Type", "text/plain")
    res.status(404).send("404 PAGE NOT FOUND...")
})

app.listen(port, function() {
    console.log("Listening on http://localhost:" + port)
})