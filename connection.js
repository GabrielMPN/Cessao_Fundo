require('dotenv').config();
const Sequelize = require('sequelize');

exports.sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    logging: false
});

exports.db ={ 
    async attTables() {
    console.log("Sincronizando models...")
    await exports.sequelize.sync()
    await exports.sequelize.sync({ alter: true })
    console.log("Models sincronizados.")
}
}