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
 app.use("/addContact",mainRouter);
 app.use("/viewContacts",mainRouter);
 app.use("/editContacts",mainRouter);
 
 //Add an array for the storage of contacts:
 contacts = [];

io.on('connection', function(socket){
 //The function used to add a contact to the array
  socket.on('add', function(data){
    var personFound = 0;

    for (i = 0; i < contacts.length; i++) {
      if(contacts[i].name==data.name && contacts[i].surname==data.surname){
        personFound=1;
        break;
      }
    }

    if (personFound==1){
      socket.emit('contactExists', 'Contact: '+ data.name + ' ' + data.surname + ' is already found.\nPlease edit the existing contact if required.');
    }
    else{
      contacts.push(data);
      //Sort the object alphabetically
      //Future functionality to sort by other options
      contacts.sort(orderBy("name"));
      socket.emit('addSuccess');
    }
  });

  //Function to help sort the list
  function orderBy(prop) {
    return function(a, b){
        if (a[prop] > b[prop]){
            return 1;
        }
        else if (a[prop] < b[prop]){
            return -1;
        }
        return 0;
    }
  }

  socket.on('fetchContactList', function(){
    socket.emit('getContactList', contacts);
  });
});

 http.listen(process.env.PORT || 8080, function(){
   console.log('listening on', http.address().port);
 });
