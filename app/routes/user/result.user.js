/* 
 * Author  : Kharisma Maulana Pasaribu
 * Time    : 08-06-2022 12:11:00
 * Website : www.matadeveloper.com
 * Email   : kharismamaulana1@gmail.com
*/

const {ResultUserController} = require('controllers/user/result')
const {Controller}           = require('core/controllers')
const authToken              = require('middlewares/authToken')

class ResultUserRoute extends Controller {
    constructor(){
        super()
        this.auth = authToken
    }

    route(){
        const {auth} = this
        return this.get('/user/result',auth, (req,res) => new ResultUserController().findAll(req,res))
    }
}

module.exports = {ResultUserRoute}