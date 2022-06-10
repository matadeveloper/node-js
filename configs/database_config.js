/* 
 * Author  : Kharisma Maulana Pasaribu
 * Time    : 07-06-2022 15:18:00
 * Website : www.matadeveloper.com
 * Email   : kharismamaulana1@gmail.com
*/
'use strict';
module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "",
    DB: "node_js",
    dialect: "mysql",
    timezone: "Asia/Jakarta",
    pool: {//pool configuration
        max: 5,//maximum number of connection in pool
        min: 0,//minimum number of connection in pool
        acquire: 30000,//maximum time in ms that pool will try to get connection before throwing error
        idle: 10000//maximum time in ms, that a connection can be idle before being released
    }
}