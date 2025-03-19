const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');

const UserModel = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    nome: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    senha: { type: DataTypes.STRING, allowNull: false },
    role: { type: DataTypes.ENUM('admin', 'usuario'), defaultValue: 'usuario' }
});

module.exports = UserModel;
