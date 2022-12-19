const express = require('express')
const routes = require('./src/routes')
const cors = require('cors')
const mongoose = require("mongoose");

mongoose.connect("mongodb://10.51.240.109:27017/agro-iot", { useNewUrlParser: true });

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3001)

module.exports = app
