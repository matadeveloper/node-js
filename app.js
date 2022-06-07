/* 
 * Author  : Kharisma Maulana Pasaribu
 * Time    : 07-06-2022 15:18:00
 * Website : www.matadeveloper.com
 * Email   : kharismamaulana1@gmail.com
*/

const express = require("express")
const app = express()
const {Module} = require('./configs/module')

// Init all module
const mod = new Module(app)
mod.bodyParser()
mod.dotenv()
mod.morgan()
mod.assets()
mod.event()

module.exports = {app}