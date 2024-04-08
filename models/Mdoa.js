const db = require('../config/database.js')
const { Sequelize, INTEGER, TEXT } = require('sequelize')


const Mdoa =  db.define("Mdoa",{
    'id_doa': {
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
    tableName: 'doa',
    freezeTableName: true,
    timestamps: false,
    underscored: true,
    paranoid: true,
})

module.exports = Mdoa