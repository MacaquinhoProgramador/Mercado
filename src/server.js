const app = require('./app');
const sequelize = require('./config/database');

const PORT = 3000;
sequelize.sync().then(() => {
    console.log('Banco sincronizado!');
    app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
});
