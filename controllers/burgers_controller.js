// Require

var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

// add a '/' endpoint that redirects to the /index route
router.get('/', function(req, res) {
  res.redirect('/index');
});

router.get('/index', function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    res.render('index', hbsObject);
  });
});

router.post('/burgers/insertOne', function(req, res) {
  burger.insertOne(['burger_name', 'devoured'], [req.body.name, false], function() {
    res.redirect('/index');
  });
});

router.put('/burgers/updateOne/:id', function(req, res) {
  var condition = 'id = ' + req.params.id;

  burger.updateOne({
    devoured: req.body.devoured
  }, condition, function() {
    res.redirect('/index');
  });
});

// export the router (controller) back to the server
module.exports = router;