/* 
 * Author  : Kharisma Maulana Pasaribu
 * Time    : 07-06-2022 15:18:00
 * Website : www.matadeveloper.com
 * Email   : kharismamaulana1@gmail.com
*/
require('module-alias/register') // register all module alias
const {Module} = require("configs/module")
const mod = new Module();

class customMessage {
    constructor(res){
        this.response = res
        this.events = mod.event()
    }
    success(statusCode, message){
        const {response, events} = this
        events.once('success', () => {
            response.status(statusCode).json({...message})
        })
        return events.emit('success')
    }
    error(statusCode, message){
        const {response, events} = this
        events.once('error', () => {
            response.status(statusCode).json({...message})
        })
        return events.emit('error')
    }
}

module.exports = {customMessage}