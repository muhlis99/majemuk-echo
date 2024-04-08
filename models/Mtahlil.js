const db = require('../config/database.js')
const { Sequelize, INTEGER, TEXT } = require('sequelize')


const Mtahlil =  db.define("Mtahlil",{
    'id_tahlil': {
        type: INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    'surah' : {
        type : TEXT
    },
    'ayat': {
        type: TEXT,
    },
    'roksu_ayat': {
        type: TEXT,
    },
    'des': {
        type: TEXT
    }
}, {
    tableName: 'tahlil',
    freezeTableName: true,
    timestamps: false,
    underscored: true,
    paranoid: true,
})

module.exports = Mtahlil