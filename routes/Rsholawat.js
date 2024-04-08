const express =  require('express')
const route  = express.Router()
const Csholawat = require('../controllers/Csholawat.js')

route.get('/all', Csholawat.getAll)

module.exports = route