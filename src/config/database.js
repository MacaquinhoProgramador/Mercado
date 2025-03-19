const { Sequelize } = require('sequelize');
require('dotenv').config();

console.log("Conectando ao banco com senha:", process.env.DB_PASSWORD);  // Debug

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: 'postgres',
        port: process.env.DB_PORT,
        logging: console.log,  // Mostra os logs das queries
    }
);

module.exports = sequelize;
