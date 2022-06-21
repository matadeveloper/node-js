/* 
 * Author  : Kharisma Maulana Pasaribu
 * Time    : 19-06-2022 10:58:00
 * Website : www.matadeveloper.com
 * Email   : kharismamaulana1@gmail.com
*/
require('module-alias/register') // register all module alias
const {Module} = require('configs/module')
const mod = new Module();
const log4js = mod.log4js()
const moment = mod.moment()

const dateNow = moment().format("DD_MM_YYYY")
log4js.configure({
    appenders: { cheese: { type: "file", filename: `./logs/log_${dateNow}.log` } },
    categories: { default: { appenders: ["cheese"], level: "error" } }
});
const logger = log4js.getLogger("cheese");

class Logger {
    constructor(status,message){
        this.status = status
        this.message = message
    }

    call(){
        const {status, message} = this
        switch (status) {
            case 'trace':
                logger.trace(message); 
                break;
            case 'debug':
                logger.debug(message); 
                break;
            case 'info':
                logger.info(message); 
                break;
            case 'warn':
                logger.warn(message); 
                break;
            case 'error':
                logger.error(message); 
                break;
            default:
                logger.fatal(message);
                break;
        }
    }
    
}

module.exports = {Logger}