/* 
 * Author  : Kharisma Maulana Pasaribu
 * Time    : 07-06-2022 15:18:00
 * Website : www.matadeveloper.com
 * Email   : kharismamaulana1@gmail.com
*/
 // register module alias
require('module-alias/register')
const {Module} = require('configs/module')
const databaseConfig = require('configs/database_config')

const mod = new Module()
const Sequelize = mod.sequelize()

const sequelizeInstance = new Sequelize(databaseConfig.DB,databaseConfig.USER, databaseConfig.PASSWORD,{
    host: databaseConfig.HOST,
    dialect: databaseConfig.dialect,
    operatorsAliases: 0,
    pool: {
        max: databaseConfig.pool.max,
        min: databaseConfig.pool.min,
        acquire: databaseConfig.pool.acquire,
        idle: databaseConfig.pool.idle
    }
})

/* Test connection */
// try {
//     sequelizeInstance.authenticate();
//     console.log('Connection has been established successfully.');
// } catch (error) {
//     console.error('Unable to connect to the database:', error);
// }

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelizeInstance
/* init table to database */
db.user = require("models/user")(sequelizeInstance, Sequelize);

module.exports = db