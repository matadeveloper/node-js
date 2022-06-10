/* 
 * Author  : Kharisma Maulana Pasaribu
 * Time    : 07-06-2022 15:18:00
 * Website : www.matadeveloper.com
 * Email   : kharismamaulana1@gmail.com
*/
'use strict';

require('module-alias/register') // register all module alias
const cluster  = require('cluster')
const express  = require('express')
const os       = require('os')
const http     = require('http')
const {app}    = require('./app')
const {Route}  = require('./core/route')
const {Module} = require('configs/module')
const TZ       = require('set-tz')

var { graphqlHTTP } = new Module().expressGraphql()
var { buildSchema } = new Module().graphql()

const errorHandler = (error, request, response, next) => {
// Error handling middleware functionality
console.log( `error ${error.message}`) // log the error
const status = error.status || 400
// send back an easily understandable error message to the caller
response.status(status).send(error.message)
}


// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return 'Hello world!';
  },
};

class App extends Route{
    
    init(){
        // Setting timezone
        TZ('Asia/Jakarta')
        /* create date global function */
        const datetime = new Module().datetime()
        const dt = datetime.create()
        global.dateFormatSql = dt.format('Y-m-d H:M:S') // global function date for mysql

        if (cluster.isMaster) {
            let cpuCore = os.cpus().length
            for (let i = 0; i < cpuCore; i++) {
                cluster.fork()
            }
            cluster.on('online', (worker) => {
                if (worker.isConnected()) {
                    // console.log(`worker is active ${worker.process.pid}`)
                }else{
                    console.log(`worker is not active ${worker.process.pid}`)
                }
            })
        
            cluster.on('exit', (worker) => {
                // if (worker.isDead()) console.log(`worker is dead ${worker.process.pid}`)
                cluster.fork()
            })
        } else {

            var stateDevelopment = ['production','staging'];
            //init default route
            app.use(super.init())
            if(stateDevelopment.indexOf(process.env.NODE_ENV) >= 0){
                // app.use(errorHandler);
            }else{
                app.use(errorHandler);
            }

            app.use('/graphql', graphqlHTTP({
                schema: schema,
                rootValue: root,
                graphiql: true,
            }));

            // set timezone
            // process.env.TZ = 'Asia/Makassar'
            // console.log(new Date().toString())

            app.engine('html', require('ejs').renderFile);
            app.set('views', __dirname + '/views');
            app.set('view engine', 'ejs');
            // listenint server port
            http.createServer(app).listen(process.env.PORT)
            // console.log('Listen Port '+process.env.PORT)
        }
    }
}

new App().init()