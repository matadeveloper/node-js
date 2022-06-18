/* 
 * Author  : Kharisma Maulana Pasaribu
 * Time    : 07-06-2022 15:18:00
 * Website : www.matadeveloper.com
 * Email   : kharismamaulana1@gmail.com
*/
'use strict';

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
const Multer           = require("multer") // handle multipart-form data
const Datetime         = require("node-datetime")
/* Graphql */
const ExpressGraphql   = require("express-graphql")
const Graphql          = require("graphql")
const { v4: uuidv4 }   = require('uuid');
const Sharp            = require("sharp")
const Moment           = require("moment")


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
        app.use(bodyParser.json())
        app.use(bodyParser.urlencoded({ extended: true }))
        // app.use(bodyParser.urlencoded({ extended: false }))
        // app.use(bodyParser.json({ type: 'application/*+json' }))
        // app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))
        // app.use(bodyParser.text({ type: 'text/html' }))
    }
    morgan(){
        const {app} = this
        app.use(logger('combined'))
    }
    event(){
        const events = new EventEmitter()
        return events
    }
    jwt(){
        return jsonwebtoken
    }
    multer(){
        return Multer
    }
    moment(){
        return Moment
    }
    uuidv4(){
        return uuidv4
    }
    sharp(){
        return Sharp
    }
    datetime(){
        return Datetime
    }
    expressGraphql(){
        return ExpressGraphql
    }
    graphql(){
        return Graphql
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