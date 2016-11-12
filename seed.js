var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');
var app = express();
var User = require ('./models/user.js');

var users = [
{
"name":"Amy Smith",
"username": "pearl1",
"password": "Pizza1.",
"phone": "555-555-1234",
"address": "123 Penny Lane Louisville, KY 45677",
"email" : "smithamy23@hotmail.com"
},
{
"name":"Ainsley Smith",
"username": "mong1grel",
"password": "asIkikf",
"phone": "555-555-2356",
"address": "20 Harris Blvd. Louisville, KY 45697",
"email" : "mong1grel@hotmail.com"
},
{
"name":"Sara Morris",
"username": "olyeller12",
"password": "asldfER",
"phone": "555-555-4558",
"address": "123 Penny Lane Louisville, KY 45677",
"email" : "smithamy23@hotmail.com"
},
{
"name":" Donnie George",
"username": "ger456ty",
"password": "weetrty",
"phone": "555-555-7894",
"address": "1234 Yellow Blvd. Louisville, KY 78515",
"email" : "mong1grel@hotmail.com"
}
];

// iterate over the information in the seed file and see if it has been written before
/*from another example of someone's iteration
areas.forEach(function(area, index){
  Area.find({}, function(err, areas) {
    if (!err && !areas.length) {
      Area.create({
        name:area.name,
        description:area.description
      });
    }
  });
});
*/

users.forEach(function(user, index){
  User.find({}, function(err, users) {
    if (!err && !users.length){
      User.create({
        name:user.name,
        username:user.username,
        password:user.password,
        phone:user.phone,
        address:user.address,
        email:user.email
      })
    }
  })
})

User.create({
  name:"Amy Shah",
  usermame:"Amy_Shah",
  password:"sail",
  phone:"555-555-5555",
  address:"720 Dream St",
  email:"apshah007@yahoo.com"
  })


/*
for (var x=1, x < users.length, x++)  {
  document.write(user.name, user.password, user.username, user.phone, user.address, user.email );
  }
*/
/*
users.forEach(function(user, index){
  User.find(user, function(err, dbUsers) {
    if (!err && !dbUsers.length) {
      User.create({
        name:user.name,
        username:user.username,
        password:user.password,
        phone:user.phone,
        address:user.address,
        email:user.email
      });
    }
  });
});
*/



/*
users.forEach(function(err, index){
  area.find({}, function(err, area){
  if (!err && !areas.length) {
    name:area.name,
    description: area.description
  });
}
});
});
*/
