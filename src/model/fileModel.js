const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.js');

const myfile = sequelize.define('myfileurls', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    filename: {
        type: DataTypes.STRING,
        allowNull: false,
    }
    }, {
    timestamps: true,  
});

module.exports = myfile;
