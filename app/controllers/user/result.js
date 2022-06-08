/* 
 * Author  : Kharisma Maulana Pasaribu
 * Time    : 08-06-2022 12:11:00
 * Website : www.matadeveloper.com
 * Email   : kharismamaulana1@gmail.com
*/

const db = require('core/database')
const User = db.user
const Op = db.Sequelize.Op // Operator Sequelize as (like, or, =)
const {customMessage} = require('helpers/customMessage')
class ResultUserController{
    constructor(){

    }

    findAll = (req, res) => {
        // console.log(req)
        const name = req.query.nickName;
        var condition = name ? { nickName: { [Op.like]: `%${name}%` } } : null;
        User.findAll({ where: condition })
        .then(data => {
            return new customMessage(res).success(200, {
                response: {
                  status: 'success',
                  code: res.statusCode,
                  method: req.method,
                  message: 'Yeah..data already to use',
                  data: data
                }
              })
            // res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Some error occurred while retrieving data."
            })
        })
    }

    
}

module.exports = {ResultUserController}