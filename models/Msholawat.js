const db = require('../config/database.js')
const { Sequelize, INTEGER, TEXT } = require('sequelize')


const Msholawat =  db.define("Msholawat",{
    'id_sholawat': {
        type: INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    'judul' : {
        type : TEXT
    },
    'judul_arab': {
        type: TEXT,
    },
    'isi': {
        type: TEXT,
    },
    'des': {
        type: TEXT
    }
}, {
    tableName: 'sholawat',
    freezeTableName: true,
    timestamps: false,
    underscored: true,
    paranoid: true,
})

module.exports = Msholawat