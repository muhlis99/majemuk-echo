const Myasin =  require("../models/Myasin.js")

module.exports = {
    getAll :  async (req, res, next) => {
        await Myasin.findAll()
            .then(result => {
                res.status(200).json({
                    message: "Data Semester Ditemukan",
                    data: result
                })
            })
            .catch(err => {
                console.log(err);
            })
    }
}