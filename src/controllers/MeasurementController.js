const { create } = require("../models/Devices");
const Devices = require("../models/Devices");
const Measurements = require("./../models/Measurements")

module.exports = {
    async getMeasurements(req, res, next){
        const measurement = await Measurements.find({}).then(data => {
            res.status(200).send(data);
        })
        .catch(e => {
            res.status(400).send(e);
        });
    },
    async getMeasurementsById(req, res, next){
        const id = req.params.id
        const measurement = await Measurements.findOne({ id: id }).then(data => {
            res.status(200).send(data);
        })
        .catch(e => {
            res.status(400).send(e);
        })
    },
    async setMeasurements(req, res, next){
        const id = req.params.id
        const { value } = req.body;

        if(!value) {
            return res.status(400).send({ message: "Dispositino nao Encontrado." })
        }

        try{
            const oldDevice = await Devices.findOne({ id: id })
            if(!oldDevice) {
                return res.status(404).json({ message: "Dispositivo nao Encontrado." })
            }
            const measurement = await Measurements.create({ value })
            const newDevice = { ...oldDevice, measurement }
            const updated = await Devices.updateOne({ _id: id }, newDevice)

            if(updated.matchedCount === 0) {
                return res.status(404).json({ message: "Falha ao Atualizar Dispositivo."})
            }
            console.log(measurement)
            res.status(200).send(measurement)
        } catch(e){
            res.status(400).send(e);
            console.log(e)
        }
    },
}