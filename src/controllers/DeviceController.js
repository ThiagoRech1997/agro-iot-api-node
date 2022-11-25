const Devices = require("./../models/Devices")

module.exports = {
    async getDevices(req, res, next){
        const device = await Devices.find({}).then(data => {
            res.status(200).send(data);
          })
          .catch(e => {
            res.status(400).send(e);
          });
        console.log(device)
    },
    async setDevices(req, res, next){
        const { name, data } = req.body
        const device = await Devices.create({
            name,
            data
        });
        console.log(device)
        return res.status(200).send(device)
    }
}