/**
 * @fileOverview This is javascript server file. Saves contact information and linking of pages
 * @author Evan Rubin
 * @version 1
 */
 var app = require('express')();
 var express = require('express');
 var mainRouter = require('./MainRoutes');
 var http = require('http').Server(app);
 var io = require('socket.io')(http);
 module.exports = app

 app.use("/",mainRouter);

 http.listen(process.env.PORT || 8080, function(){
   console.log('listening on', http.address().port);
 });
