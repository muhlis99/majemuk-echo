const db = require('../config/database.js')
const { Sequelize, INTEGER, TEXT } = require('sequelize')


const Myasin =  db.define("Myasin",{
    'id_yasin': {
        type: INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    'ayat': {
        type: TEXT,
    },
    'des': {
        type: TEXT
    }
}, {
    tableName: 'yasin',
    freezeTableName: true,
    timestamps: false,
    underscored: true,
    paranoid: true,
})

module.exports = Myasin