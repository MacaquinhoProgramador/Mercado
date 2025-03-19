const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');

const ProductModel = sequelize.define('Product', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    nome: { type: DataTypes.STRING, allowNull: false },
    quantidade: { type: DataTypes.INTEGER, allowNull: false }
});

module.exports = ProductModel;
