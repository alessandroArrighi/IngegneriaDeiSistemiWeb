import express, { Express } from 'express'
import framesRouter from "./routes/frames-router"

const app: Express = express()
const port: Number = 3000

app.use(express.static("dist-forntend"))

app.use(framesRouter)

app.use(function(req, res, next) {
    res.setHeader("Content-Type", "text/plain")
    res.status(404).send("404 PAGE NOT FOUND...")
})

app.listen(port, function() {
    console.log("Listening on http://localhost:" + port)
})