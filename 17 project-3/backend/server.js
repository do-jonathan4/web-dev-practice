const express = require('express')
const dotenv = require('dotenv').config()
const colors = require('colors')
const router = require('./utils/routes/router')
const errorHandler = require('./utils/error/errorHandler')
const connectDB = require('./utils/config/db')
const PORT = 5000 || process.env.PORT

const app = express()
connectDB()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/todo', router)
app.use(errorHandler)

app.listen(PORT, () => console.log(`listening on port ${PORT}`.magenta.bold))