/* 
 * Author  : Kharisma Maulana Pasaribu
 * Time    : 08-06-2022 12:11:00
 * Website : www.matadeveloper.com
 * Email   : kharismamaulana1@gmail.com
*/

const db              = require('core/database')
const fs              = require('fs')
const path            = require('path')
const User            = db.user
const Op              = db.Sequelize.Op // Operator Sequelize as (like, or, = )
const {customMessage} = require('helpers/customMessage')
const {Module}        = require("configs/module")
const Resize          = require('helpers/resize')


class ResultUserController{

    
    /* note for rememmber (super() use for call constructor parent) */
    constructor(){
    }
    
    /* Arrow Function */
    findAllUser = (req, res) => {
        
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
        })
        .catch(err => {
            return new customMessage(res).success(500, {
                response: {
                  status: 'error',
                  code: res.statusCode,
                  method: req.method,
                  message: err.message || "Some error occurred while retrieving data."
                }
              })
        })
    }

    // create data user
    createUser = (req, res) => {

      const datetime = new Module().datetime()
      const dt       = datetime.create()
      var formatted  = dt.format('Y-m-d H:M:S');
      // Get data input
      const {nickName, fullName} = req.body
      // console.log(dateFormatSql)
      if(!nickName){
          return new customMessage(res).success(400, {
              response: {
                message: 'nickName can not be empty',
              }
          })
      }
      if(!fullName){
          return new customMessage(res).success(400, {
              response: {
                message: 'fullName can not be empty',
              }
          })
      }

      /* check nickName */
      var checkName = User.findOne()

      /* check file */
      if(!fs.existsSync('public/uploads/user')){
          /* create folder */
        fs.mkdirSync('public/uploads/user', {recursive : true})
      }

      // console.log(__dirname)
      // const imagePath = path.join(__dirname, 'public/uploads/user');
      const imagePath = 'public/uploads/user';
      const fileUpload = new Resize(imagePath);
      if (!req.file) {
        res.status(401).json({error: 'Please provide an image'});
      }
      const fileName = fileUpload.save(req.file.buffer);
      // console.log(fileName)
      const dataUser = {
          nickName : nickName,
          fullName : fullName,
          images   : fileName
      }

      // console.table(dataUser)

      User.create(dataUser).then(data => {
        return new customMessage(res).success(200, {
          response: {
            status: 'success',
            code: res.statusCode,
            method: req.method,
            message: 'User has been saved',
            data: data
          }
        })
      }).catch(err => {
        return new customMessage(res).success(500, {
          response: {
            status: 'error',
            code: res.statusCode,
            method: req.method,
            message: err.message || "Error occurred while creating the user."
          }
        })
      })
    }

    
}

module.exports = {ResultUserController}