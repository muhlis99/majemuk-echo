const Myasin =  require("../models/Myasin.js")

module.exports = {
    getAll :  async (req, res, next) => {
        const judul =  await Myasin.findOne()
        await Myasin.findAll()
            .then(result => {
                res.status(200).json({
                    message: "Data yasin Ditemukan",
                    judul : judul.surah,
                    data: result
                })
            })
            .catch(err => {
                console.log(err);
            })
    }
}