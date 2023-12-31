const express = require('express')
const userRouter = require('./router/mapels')
const app = express()
const port = 5000
const connectDB = require('./config/db')

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
  res.send('Daftar Mapel')
})

app.use(userRouter)

connectDB()

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})