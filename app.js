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
var app = express()

http.Server(app).listen(config.port)

app.use('/', require('redirect-https')({
	body: '',
  	port: 443,
  	trustProxy: true
}))

app.all('/*', function(req, res, next) {
	if(!/^www\./.test(req.headers.host)) {
		res.status(301).redirect(req.protocol + '://www.' + req.headers.host + req.url)
	} else {
		next()
	}
})


app.use(cors())
app.use(bodyParser.json({strict: false}))
app.use(bodyParser.urlencoded({extended: true}))
app.use(errorHandler({dumpExceptions: true, showStack: true}))
app.use(express.static(path.join(__dirname, 'angular2app/dist')))
app.get('*',function(req, res){
     res.sendFile(path.join(__dirname, 'angular2app/dist/index.html'))
})
var options = {
	key: fs.readFileSync('./cert/key.pem', 'utf8'),
	cert: fs.readFileSync('./cert/server.crt', 'utf8')
}
https.createServer(options, app).listen(443)
