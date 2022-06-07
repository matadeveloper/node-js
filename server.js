/* 
 * Author  : Kharisma Maulana Pasaribu
 * Time    : 07-06-2022 15:18:00
 * Website : www.matadeveloper.com
 * Email   : kharismamaulana1@gmail.com
*/
require('module-alias/register')
const cluster = require('cluster')
const os = require('os')
const http = require('http')
const {app} = require('./app')
const {Route} = require('./core/route')

class App extends Route{
    init(){
        if (cluster.isMaster) {
            let cpuCore = os.cpus().length
            for (let i = 0; i < cpuCore; i++) {
                cluster.fork()
            }
            cluster.on('online', (worker) => {
                if (worker.isConnected()) console.log(`worker is active ${worker.process.pid}`)
            })
        
            cluster.on('exit', (worker) => {
                if (worker.isDead()) console.log(`worker is dead ${worker.process.pid}`)
                cluster.fork()
            })
        } else {
            //init default route
            app.use(super.init())

            app.engine('html', require('ejs').renderFile);
            app.set('views', __dirname + '/views');
            app.set('view engine', 'ejs');
            // listenint server port
            http.createServer(app).listen(process.env.PORT)
            console.log('Listen Port '+process.env.PORT)
        }
    }
}

new App().init()