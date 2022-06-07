/* 
 * Author  : Kharisma Maulana Pasaribu
 * Time    : 07-06-2022 15:18:00
 * Website : www.matadeveloper.com
 * Email   : kharismamaulana1@gmail.com
*/

const express = require("express")
const router = express.Router()

class Controller{
    get(...res){
        return router.get(...arguments)
    }
    post(...res){
        return router.post(...arguments)
    }
    put(...res){
        return router.put(...arguments)
    }
    delete(...res){
        return router.delete(...arguments)
    }
}

module.exports = {Controller}