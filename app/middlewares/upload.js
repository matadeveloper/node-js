/* 
 * Author  : Kharisma Maulana Pasaribu
 * Time    : 10-06-2022 10:27:00
 * Website : www.matadeveloper.com
 * Email   : kharismamaulana1@gmail.com
*/

const {Module} = require('configs/module')

const multer = new Module.multer();

const upload = multer({
  limits: {
    fileSize: 4 * 1024 * 1024,
  }
})

module.exports = upload