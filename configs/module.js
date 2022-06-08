/* 
 * Author  : Kharisma Maulana Pasaribu
 * Time    : 07-06-2022 15:18:00
 * Website : www.matadeveloper.com
 * Email   : kharismamaulana1@gmail.com
*/
const express          = require("express")
const dotenv           = require("dotenv")
const bodyParser       = require("body-parser")
const logger           = require("morgan")
const jsonwebtoken     = require("jsonwebtoken")
const events           = require("events")
const { EventEmitter } = require("stream")
const path             = require("path")
const Sequelize        = require("sequelize")
const cors             = require("cors")

class Module {
    constructor(app){
        this.app = app
    }
    dotenv(){
        const env = dotenv.config()
        return env
    }
    bodyParser(){
        const {app} = this
        app.use(bodyParser.urlencoded({ extended: false }))
        app.use(bodyParser.json({ type: 'application/*+json' }))
        app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))
        app.use(bodyParser.text({ type: 'text/html' }))
    }
    morgan(){
        const {app} = this
        app.use(logger('dev'))
    }
    event(){
        const events = new EventEmitter()
        return events
    }
    jwt(){
        return jsonwebtoken
    }
    cors(){
        const {app} = this
        app.use(cors())
    }
    assets(){
        const {app} = this
        app.use(express.static(path.resolve(process.cwd(),'public/assets')))
    }
    sequelize(){
        return Sequelize
    }
}

module.exports = {Module}