const express =  require('express')
const route  = express.Router()
const CayatTigaPuluh = require('../controllers/CayatTIgaPuluh.js')

route.get('/all', CayatTigaPuluh.getAll)

module.exports = route