// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm || cb(["This is a test"])
  },
  // The variables cols and vals are arrays.
  selectAll: function(cols, vals, cb) {
    orm.selectAll("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  insertOne: function(objColVals, condition, cb) {
    orm.insertOne("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },
  updateOne: function(condition, cb) {
    orm.updateOne("burgers", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;