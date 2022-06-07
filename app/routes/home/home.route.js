/* 
 * Author  : Kharisma Maulana Pasaribu
 * Time    : 07-06-2022 15:18:00
 * Website : www.matadeveloper.com
 * Email   : kharismamaulana1@gmail.com
*/

const {Controller} = require('core/controllers')
const {View} = require('core/view')


class HomeRoute extends Controller{
    constructor(){
        super()
        this.view = new View() 
    }

    route(){
        const {view} = this
        return this.get('/', (req,res) => {
            view.render(res, 'home.views/index', {
                name : 'Kharisma Maulana Pasaribu'
            })
        })
    }
}
module.exports = { HomeRoute }