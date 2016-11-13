var express = require('express');
var router = express.Router();

var User = require('../models/user');
var mid = require('../middleware/middle');
//var User = require ('./models/user.js');

/*
// GET /profile
router.get('/profile', mid.requiresLogin, function(req, res, next) {
  User.findById(req.session.userId)
      .exec(function (error, user) {
        if (error) {
          return next(error);
        } else {
          return res.render('profile', {title:'Profile', name: user.name, email: user.email, address:user.address, phone: user.phone, password: user.password});
          //{ title: 'Profile', name: user.name, favorite: user.favoriteBook }
        }
      });
});
*/
/*
// GET /logout
router.get('/logout', function(req, res, next) {
  if (req.session) {
    // delete session object
    req.session.destroy(function(err) {
      if(err) {
        return next(err);
      } else {
        return res.redirect('/');
      }
    });
  }
});

// GET /login
router.get('/login', mid.loggedOut, function(req, res, next) {
  return res.render('login', { title: 'Log In'});
});
*/
/* POST /login
router.post('/login', function(req, res, next) {
  if (req.body.email && req.body.password) {
    User.authenticate(req.body.email, req.body.password, function (error, user) {
      if (error || !user) {
        var err = new Error('Wrong email or password.');
        err.status = 401;
        return next(err);
      }  else {
        req.session.userId = user._id;
        return res.redirect('/profile');
      }
    });
  } else {
    var err = new Error('Email and password are required.');
    err.status = 401;
    return next(err);
  }
});
*/
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
// POST /register

router.post('/profile', function(req, res, next) {

  var name = req.body.name;
  console.log(name);
  var username = req.body.username;
  var phone = req.body.phone;
  var email = req.body.email;
  var address = req.body.address;
  var password = req.body.password;
  var confirmPassword =req.body.confirmPassword;

 console.log(name, username, phone, email, address, password);
 console.log("after variables was called!");
 User.create({name, username, phone, email, address, password});

//    console.log("profile was called!");
 return res.render('profile', { title: 'profile' });
//res.end("yes");
  });


    // use schema's `create` method to insert document into Mongo
/*

        //req.session.userId = user._id
        return res.redirect('/profile');

      };
*/
/*
  console.log("there");
  var userData = {
   name: req.body.name,
//  console.log(name);
   username: req.body.username,
   phone: req.body.phone,
   email: req.body.email,
   address: req.body.address,
   password: req.body.password,
   confirmPassword: req.body.confirmPassword
};
console.log('here');
console.log(userData);
User.create(useData, function (error, dog) {
        if (error) {
          return next(error);
        } else {
        //  req.session.userId = user._id;
          return res.redirect('/profile');
        }
      });
*/


//  var userData = [name:name, username, phone, email, address, password];

// console.log("after variables was called!");

//    console.log("profile was called!");
//document.write( name, username, phone, email, address, password, confirmPassword);
//  return res.render('profile', { title: 'profile' });
//console.log(name, username, phone, email, address, password, confirmPassword);

  //document.write( name, username, phone, email, address, password, confirmPassword);
//res.end("yes");
//console.log("we made it to here!");
//  });
  User.create({
    name:"Mary",
    username:"HadaLamb",
    phone:"555-555-5678",
    email:"mlamb@yahoo.com",
    address:"15 Shepard st  Shepardsville KY 40216",
    password:"ml2345"
  });
/*
  User.create({
    var name = req.body.name;
  //  console.log(name);
    var username = req.body.username;
    var phone = req.body.phone;
    var email = req.body.email;
    var address = req.body.address;
    var password = req.body.password;
  });
*/
/*
  if (req.body.email &&
    req.body.name &&
    req.body.phone &&
    req.body.address &&
    req.body.password &&
    req.body.confirmPassword) {

      // confirm that user typed same password twice
      if (req.body.password !== req.body.password2) {
        var err = new Error('Passwords do not match.');
        err.status = 400;
        return next(err);
      }

*/
/*
      // create object with form input
      var userData = { name, username, phone, email, address, password
      };
*/
      // use schema's `create` method to insert document into Mongo


/*
      User.create(userData, function (error, user) {
        if (error) {
          return next(error);
        } else {
          req.session.userId = user._id;
          return res.redirect('/profile');
        }
      });
    */
/*    } else {
      var err = new Error('All fields required.');
      err.status = 400;
      return next(err);
    }
})
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
/* GET profile
router.get('/profile', function(req, res, next) {
  return res.render('profile', { title: 'profile' });
});
*/

module.exports = router;









/*
var express = require('express');
var router = express.Router();

var User = require('../models/user');
var mid = require('../middleware/middle');

// GET /profile
router.get('/profile', mid.requiresLogin, function(req, res, next) {
  User.findById(req.session.userId)
      .exec(function (error, user) {
        if (error) {
          return next(error);
        } else {
          return res.render('profile', {title:'Profile', name: user.name, email: user.email, address:user.address, phone: user.phone, password: user.password});
          //{ title: 'Profile', name: user.name, favorite: user.favoriteBook }
        }
      });
});

// GET /logout
router.get('/logout', function(req, res, next) {
  if (req.session) {
    // delete session object
    req.session.destroy(function(err) {
      if(err) {
        return next(err);
      } else {
        return res.redirect('/');
      }
    });
  }
});

// GET /login
router.get('/login', mid.loggedOut, function(req, res, next) {
  return res.render('login', { title: 'Log In'});
});

// POST /login
router.post('/login', function(req, res, next) {
  if (req.body.email && req.body.password) {
    User.authenticate(req.body.email, req.body.password, function (error, user) {
      if (error || !user) {
        var err = new Error('Wrong email or password.');
        err.status = 401;
        return next(err);
      }  else {
        req.session.userId = user._id;
        return res.redirect('/profile');
      }
    });
  } else {
    var err = new Error('Email and password are required.');
    err.status = 401;
    return next(err);
  }
});
//alert("does this work1?");
// GET /register
router.get('/register', mid.loggedOut, function(req, res, next) {
  return res.render('registration', { title: 'Sign Up' });
});

//alert("does this work?");
// POST /register
router.post('/register', function(req, res, next) {
  if (req.body.email &&
    req.body.name &&
    req.body.phone &&
    req.body.address &&
    req.body.password &&
    req.body.confirmPassword) {

      // confirm that user typed same password twice
      if (req.body.password !== req.body.confirmPassword) {
        var err = new Error('Passwords do not match.');
        err.status = 400;
        return next(err);
      }




/*
router.post('/registration', function(req, res, next) {
  if (req.body.email &&
    req.body.name &&
    req.body.phone &&
    req.body.address &&
    req.body.password &&
    req.body.confirmPassword)
     console.log(req.body.email, req.body.name, req.body.phone, req.body.address, req.body.password, req.body.confirmPassword );
}else {
  var err = Error ('All fields required');
  err.status =400;
  return next(err);
}
});
      // confirm that user typed same password twice
      if (req.body.password !== req.body.confirmPassword) {
        var err = new Error('Passwords do not match.');
        err.status = 400;
        return next(err);


      // create object with form input
      var userData = {
        email: req.body.email,
        name: req.body.name,
        phone: req.body.phone,
        address: req.body.address,
        password: req.body.password
      };



      // use schema's `create` method to insert document into Mongo

      User.create(userData, function (error, user) {
          if (error) {
            return next(error);
          } else {
            req.session.userId = user._id;
            return res.redirect('/profile');
          }
        });

      } else {
        var err = new Error('All fields required.');
        err.status = 400;
        return next(err);
      }
  })

// GET /index
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



module.exports = router;

//prints all the users to the screen
//var collection = db.userData.find( );
*/
