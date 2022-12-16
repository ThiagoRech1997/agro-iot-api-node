const express = require('express')
const { getDevices, getDevicesById, setDevices } = require('./controllers/DeviceController')
const { getMeasurements, getMeasurementsById, setMeasurements } = require('./controllers/MeasurementController')

const routes = express.Router()

routes.get("/device", getDevices)
routes.get("/device/:id", getDevicesById)
routes.post("/device", setDevices)

routes.get("/measurement", getMeasurements)
routes.get("/measurement/:id", getMeasurementsById)
routes.post("/measurement/:id", setMeasurements)

module.exports = routes