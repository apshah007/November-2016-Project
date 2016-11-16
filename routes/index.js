var express = require('express');
var router = express.Router();

var User = require('../models/user');
var mid = require('../middleware/middle');

// GET /login
router.get('/login',/* mid.loggedOut, */function(req, res, next) {
  return res.render('login', { title: 'Log In'});
});


// GET /register
router.get('/register',/* mid.loggedOut,*/ function(req, res, next) {
  return res.render('registration', { title: 'register' });
//  res.sendfile('profile');
//  console.log("register was called!");
});
/*
app.get('/',function(req,res){
  res.sendfile("index.html");
*/
// POST /register
// send the information from the form to the profile page

router.post('/profile', function(req, res, next) {

  var name = req.body.name;
  console.log(name);
  var username = req.body.username;
  var phone = req.body.phone;
  var email = req.body.email;
  var address = req.body.address;
  var password = req.body.password;
  var confirmPassword =req.body.confirmPassword;

// console.log(name, username, phone, email, address, password);
// console.log("after variables was called!");
User.create({
  name: name,
  username:username,
  phone:phone,
  email:email,
  address:address,
  password:password
});

//    console.log("profile was called!");
 return res.render('profile', { title: 'profile', name:name,
  username:username, phone:phone, address:address, email:email });
//document.write(name, username, phone, email, address, password);

//res.end("yes");
  });


/*
  User.create({
    name:"sary",
    username:"sdaLamb",
    phone:"555-553-5678",
    email:"slamb@yahoo.com",
    address:"15 Ssepard st  Shepardsville KY 40216",
    password:"ml3345"
  });
*/

// GET /
router.get('/index', function(req, res, next) {
//  console.log("I'm here!");
  return res.render('index', { title: 'Home' });
});

// GET /upload
router.get('/upload', function(req, res, next) {
  return res.render('upload', { title: 'upload' });
});

// GET /current
router.get('/current', function(req, res, next) {
  return res.render('current', { title: 'Current' });
});

// GET /hours
router.get('/hours', function(req, res, next) {
  return res.render('hours', { title: 'hours' });
});

// GET /hours
router.get('/printout', function(req, res, next) {
  User.find({}, function(err, users){
    return res.render('printout', { title: 'printout', users: users });
});

});



module.exports = router;
