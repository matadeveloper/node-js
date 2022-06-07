const express    = require("express");
const datetime   = require("./app/helpers/datetime");
const bodyParser = require("body-parser");
const dotenv     = require('dotenv').config();
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }))
// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))
// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }))

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(process.env.PORT, function(){
    console.log(datetime.todayDisplay());
    console.log(datetime.dateDisplay('2022-01-02'));
    console.log("Listen on 3000")
})