import express, { Express } from 'express'
import cookieParser from "cookie-parser"
import bodyParser from "body-parser"
import framesRouter from "./routes/products-router"
import appointmentsRouter from "./routes/appointments-router"
import ordersRouter from "./routes/orders-router"
import usersRouter from "./routes/users-router"
import authRouter from "./routes/auth-router"

const app: Express = express()
const port: Number = 3000

app.use(bodyParser.json())
app.use(cookieParser())

app.use(framesRouter)
app.use(appointmentsRouter)
app.use(ordersRouter)
app.use(usersRouter)
app.use(authRouter)

app.use(express.static("dist-frontend"))

app.use(function(req, res, next) {
    res.setHeader("Content-Type", "text/plain")
    res.status(404).send("404 PAGE NOT FOUND...")
})

app.listen(port, function() {
    console.log("Listening on http://localhost:" + port)
})
