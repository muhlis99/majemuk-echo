const Msholawat =  require("../models/Msholawat.js")

module.exports = {
    getAll :  async (req, res, next) => {
        await Msholawat.findAll()
            .then(result => {
                res.status(200).json({
                    message: "Data tahlil Ditemukan",
                    data: result
                })
            })
            .catch(err => {
                console.log(err);
            })
    }
}