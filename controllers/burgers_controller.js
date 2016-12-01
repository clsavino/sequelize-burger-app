// create all the functions that will do the routing for the app,
//and the logic of each route.
var express = require('express');
var router = express.Router();
var model = require('../models');
var connection = require('../config/connection.js');

//model.burger.sync({force:true});
model.burger.sync();

//root route redirect to /burgers
router.get('/', function (req, res) {
  res.redirect('/burgers');
});

// display all burgers route
router.get('/burgers', function (req, res) {
  model.burger.findAll({}).then(function(data) {
    res.render("index", {burgers : data});
  });
});

// Insert route inserts new burger in database - '/burgers/new'
router.post('/burgers/insertOne', function (req, res) {
  var newBurger = req.body.burger_name;
  model.burger.create({
    burger_name: newBurger,
    devoured: false
  })
  .then(function () {
    res.redirect("/burgers");
  });
});

// Update route updates the devoured field to true
router.put('/burgers/updateOne/:id', function (req, res) {
  var burgerId = req.params.id;
  model.burger.update({
    devoured: true
  },
  {
    where: {
      id: burgerId
    }
  }).then(function () {
    res.redirect("/burgers");
  });
});

router.delete('/burgers/delete/:id', function (req, res) {
  var burgerId = req.params.id;
  model.burger.destroy({
    where: {
      id: burgerId
    }
    }) .then(function() {
      res.redirect('/burgers');
  });
});

module.exports = router;


