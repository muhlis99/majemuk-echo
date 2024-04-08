const express =  require('express')
const route  = express.Router()
const CayatTigaPuluh = require('../controllers/CayatTigaPuluh.js')

route.get('/all', CayatTigaPuluh.getAll)

module.exports = route