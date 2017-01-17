'use strict';

var express = require('express')
var errorHandler = require('errorhandler')
var bodyParser = require('body-parser')
var path = require('path')
var cors = require('cors')
var fs = require('fs')
var http = require('http')
var https = require('https')
var config = require('./config')
const dotenv = require('dotenv');
const forceDomain = require('forcedomain')

dotenv.load({ path: '.env.data' })

var app = express()


app.use(forceDomain({
  hostname: 'www.starbook.co',
  port: config.port,
  protocol: 'https'
}))

app.use('/', require('redirect-https')({
  body: '',
  trustProxy: true
}))
app.use(cors())
app.use(bodyParser.json({strict: false}))
app.use(bodyParser.urlencoded({extended: true}))
app.use(errorHandler({dumpExceptions: true, showStack: true}))
app.use(express.static(path.join(__dirname, 'angular2app/dist')))
app.get('*',function(req, res){
     res.sendFile(path.join(__dirname, 'angular2app/dist/index.html'))
})

http.Server(app).listen(config.port)

var options = {
	key: fs.readFileSync('./cert/key.pem', 'utf8'),
	cert: fs.readFileSync('./cert/server.crt', 'utf8')
}
https.createServer(options, app).listen(443)