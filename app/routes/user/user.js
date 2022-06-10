/* 
 * Author  : Kharisma Maulana Pasaribu
 * Time    : 08-06-2022 12:11:00
 * Website : www.matadeveloper.com
 * Email   : kharismamaulana1@gmail.com
*/

const {ResultUserController} = require('controllers/user/controller')
const {Controller}           = require('core/controllers')
const authToken              = require('middlewares/authToken')
const {Module}               = require('configs/module')
const fs                     = require('fs')
const {Resize}               = require('helpers/resize')

class ResultUserRoute extends Controller {
    constructor(){
        super()
        this.auth = authToken
    }

    route(){
        const {auth} = this
        return this.get('/user/result',auth, (req,res) => new ResultUserController().findAllUser(req,res))
    }
    routeCreate(){
        const {auth} = this
        const multer = new Module().multer()
        /* check file */
        if(!fs.existsSync('public/uploads/user')){
            /* create folder */
            fs.mkdirSync('public/uploads/user', {recursive : true})
        }
        // const upload = multer({ dest: 'public/uploads/user' })
        const upload = multer()
        // upload.none() // if not upload file
        
        return this.post('/user/create',auth,upload.single('images'),(req,res) => new ResultUserController().createUser(req,res))
    }
}

module.exports = {ResultUserRoute}