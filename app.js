const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
const port = 8000

app.get('/', (req, res) => res.json({ data: 'secret data' }))

app.listen(port, () => console.log(`example app listening at http://localhost:${port}`))