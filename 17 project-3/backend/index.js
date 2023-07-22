const express = require('express')
const dotenv = require('dotenv').config()
const colors = require('colors')
const PORT = 5000 || process.env.PORT

const app = express()


app.listen(PORT, () => console.log(`listening on port ${PORT}`.magenta.bold))