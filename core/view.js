/* 
 * Author  : Kharisma Maulana Pasaribu
 * Time    : 07-06-2022 15:18:00
 * Website : www.matadeveloper.com
 * Email   : kharismamaulana1@gmail.com
*/
'use strict';
const { resolve } = require('path')


class View {
  render(res, view, data) {
    return res.render(resolve(process.cwd(), `app/views/${view}`), { ...data })
    // app.use(express.static(__dirname +  `app/views/${view}`));
    // console.log(resolve(process.cwd(), `app/views/${view}`))
  }
}

module.exports = { View }