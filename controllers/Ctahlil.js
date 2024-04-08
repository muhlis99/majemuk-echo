const Mtahlil =  require("../models/Mtahlil.js")

module.exports = {
    getAll :  async (req, res, next) => {
        const judul =  await Mtahlil.findOne()
        await Mtahlil.findAll()
            .then(result => {
                res.status(200).json({
                    message: "Data tahlil Ditemukan",
                    judul : judul.surah,
                    data: result
                })
            })
            .catch(err => {
                console.log(err);
            })
    }
}