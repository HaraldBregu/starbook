'use strict';

var express = require('express')
var errorHandler = require('errorhandler')
var bodyParser = require('body-parser')
var path = require('path')
var cors = require('cors')
var config = require('./config')
var app = express()
var http = require('http')
var httpServer = http.Server(app)

app.use(cors())
app.use(bodyParser.json({strict: false}))
app.use(bodyParser.urlencoded({extended: true}))
app.use(errorHandler({dumpExceptions: true, showStack: true}))
app.use(express.static(path.join(__dirname, 'angular2app/dist')))

httpServer.listen(config.port, function() {
	console.log('Server is running on port:' + config.port)
})
