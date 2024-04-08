const MayatTigaPuluh =  require("../models/MayatTigaPuluh.js")

module.exports = {
    getAll :  async (req, res, next) => {
        await MayatTigaPuluh.findAll()
            .then(result => {
                res.status(200).json({
                    message: "Data ayat tiga puluh Ditemukan",
                    data: result
                })
            })
            .catch(err => {
                console.log(err);
            })
    }
}