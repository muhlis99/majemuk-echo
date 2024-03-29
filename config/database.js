const {Sequelize } = require('sequelize')

const db = new Sequelize('u2785662_majemuk_echo_17', 'u2785662_majemuk_echo_17', 'majemuk_echo_17', {
    host: '151.106.119.201',
    dialect: 'mysql',
    url: 'localhost'
})

module.exports = db