const Mdoa =  require("../models/Mdoa.js")

module.exports = {
    getAll :  async (req, res, next) => {
        await Mdoa.findAll()
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