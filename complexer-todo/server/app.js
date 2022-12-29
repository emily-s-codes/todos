import express from "express"
import cors from 'cors'
import fs from 'fs'

const PORT = 9898
const app = express()

app.use(cors())
app.use(express.json())

app.get('/list', (_, res) => {
    res.json(list)
})

let list = []
fs.readFile('./data.js', (err, data) => {
    if (err) console.log(err)
    list = JSON.parse(data)
})

app.post('/list', (req, res) => {
    console.log(req.body)
    list.push(req.body)
    console.log(list)
    fs.writeFile('./data.js', JSON.stringify(list), (err) => console.log(err))
    res.json(list)
})

app.listen(PORT, () => console.log("running on port", PORT))