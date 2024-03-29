const express =  require('express')
const route  = express.Router()
const Cyasin = require('../controllers/Cyasin.js')

route.get('/all', Cyasin.getAll)

module.exports = route