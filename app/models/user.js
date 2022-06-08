/* 
 * Author  : Kharisma Maulana Pasaribu
 * Time    : 08-06-2022 10:39:00
 * Website : www.matadeveloper.com
 * Email   : kharismamaulana1@gmail.com
*/
module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
        id : {
            type : Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nickName : {
            type : Sequelize.STRING
        },
        fullName : {
            type : Sequelize.STRING
        }
    })

    return User
}