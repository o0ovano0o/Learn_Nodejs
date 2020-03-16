const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 3000
const routers = require('./routes/index')
require('dotenv').config()
var bodyParser = require('body-parser')

const session = require('express-session')
const logger = require('morgan')
const cors = require("cors");

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(logger("dev"));
app.use(session({
    secret: "key",
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: true
    }
}))

app.use(cors({
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "allowedHeaders": ["Content-Type", "Authorization", "token"],
    "exposedHeaders": ["Cookie"]
}));

app.use(function(req, res, next) {
    res.locals.session = req.session
    next()
})

const mongoose = require('mongoose')
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(process.env.DB_URL)



app.use("/api/v1", routers)



app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')


app.listen(port, () => {
    console.log("server running at http://localhost:" + port)
})