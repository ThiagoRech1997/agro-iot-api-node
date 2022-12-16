const Devices = require("./../models/Devices")

module.exports = {
    async getDevices(req, res, next){
        const device = await Devices.find({}).then(data => {
            res.status(200).send(data);
        })
        .catch(e => {
            res.status(400).send(e);
        });
    },
    async getDevicesById(req, res, next){
        const id = req.params.id
        const devices = await Devices.findOne({ id: id }).then(data => {
            res.status(200).send(data);
        })
        .catch(e => {
            res.status(400).send(e);
        })
    },
    async setDevices(req, res, next){
        const { name, coordinate } = req.body

        if (!name) {
            res.status(400).json({ error: 'o nome é obrigatório' })
            return
        }
        
        if (!coordinate) {
            res.status(400).json({ error: 'a coordenada é obrigatória' })
            return
        }

        const device = await Devices.create({
            name,
            coordinate
        }).then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
        })
        return res.status(200).send(device)
    }
}