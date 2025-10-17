import express from "express"
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const port = process.env.APP_PORT || 3000

// Serve static files from dist
app.use(express.static(path.join(__dirname, "../dist")))

app.all("/{*\w}", (req, res, next) => {
    res.sendFile(path.join(__dirname, "../dist", "index.html"))
})

app.listen(port, () => {
    console.log(`Server running at port: ${port}`)
})
