const express =  require('express')
const route  = express.Router()
const Ctahlil = require('../controllers/Ctahlil.js')

route.get('/all', Ctahlil.getAll)

module.exports = route