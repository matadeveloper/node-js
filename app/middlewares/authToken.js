/* 
 * Author  : Kharisma Maulana Pasaribu
 * Time    : 08-06-2022 11:49:00
 * Website : www.matadeveloper.com
 * Email   : kharismamaulana1@gmail.com
*/

require('module-alias/register') // register all module alias
const {Module} = require('configs/module')
const jwt = new Module().jwt()
const {customMessage} = require('helpers/customMessage')


module.exports = (req, res, next) => {
    /* Function custom message */
    const msg = new customMessage(res)
    try {
        /* Get token from header */
        // const token = req.headers.authorization.split(' ')[1]
        var token = jwt.sign({ foo: 'matadeveloper' }, req.headers.authorization.split(' ')[1]);
        /* check token is ready */
        const decode = jwt.verify(token, process.env.JWT_SECRET)
        if(decode){
            console.log(decode.foo)
            next()
        }else{
            msg.error(401, {
                response: {
                    status : res.statusCode,
                    method : req.method,
                    url    : req.originalUrl,
                    message: `Failed to authenticate token.`
                }
            })
        }
    } catch (err) {
        // return res.json({
        //     success: false,
        //     message: "Failed to authenticate token.",
        // });
        //msg if token failed or expaired
        // console.log(err) 
        msg.error(401, {
            response: {
                status : res.statusCode,
                method : req.method,
                url    : req.originalUrl,
                message: `Oops..Unauthorized access, please give valid token`
            }
        })
    }
}