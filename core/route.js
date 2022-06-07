/* 
 * Author  : Kharisma Maulana Pasaribu
 * Time    : 07-06-2022 15:18:00
 * Website : www.matadeveloper.com
 * Email   : kharismamaulana1@gmail.com
*/

// deskripsikan semua route didalam sini
const { HomeRoute } = require('routes/home/home.route')
// const { AboutRoute } = require('routes/home/about.route')

class Route{
    init(){
        return [
            //init home route
            new HomeRoute().route(),
        ]
    }
}

module.exports = {Route}