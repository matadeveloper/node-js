/* 
 * Author  : Kharisma Maulana Pasaribu
 * Time    : 08-06-2022 10:39:00
 * Website : www.matadeveloper.com
 * Email   : kharismamaulana1@gmail.com
*/
module.exports = (sequelize, Sequelize, Model, DataTypes) => {
    const User = sequelize.define("user", {
        id : {
            type : DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nickName : {
            type : DataTypes.STRING
        },
        fullName : {
            type : DataTypes.STRING
        },
        images : {
            type : DataTypes.STRING
        }
    },{
        tableName : 'user' // setting table name
    })

    return User
}