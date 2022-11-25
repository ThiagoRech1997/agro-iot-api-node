const express = require('express')
const { getDevices, setDevices } = require('./controllers/DeviceController')

const routes = express.Router()

routes.get("/device", getDevices)
routes.post("/device", setDevices)

module.exports = routes