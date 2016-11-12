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

// GET /register
router.get('/register', mid.loggedOut, function(req, res, next) {
  return res.render('registration', { title: 'Sign Up' });
});

// POST /register
router.post('/registration', function(req, res, next) {
  if (req.body.email &&
    req.body.name &&
    req.body.phone &&
    req.body.address &&
    req.body.password &&
    req.body.password2) {

      // confirm that user typed same password twice
      if (req.body.password !== req.body.password2) {
        var err = new Error('Passwords do not match.');
        err.status = 400;
        return next(err);
      }

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
// GET profile
router.get('/profile', function(req, res, next) {
  return res.render('profile', { title: 'profile' });
});


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
