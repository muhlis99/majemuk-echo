const express =  require('express')
const route  = express.Router()
const Cdoa = require('../controllers/Cdoa.js')

route.get('/all', Cdoa.getAll)

module.exports = route