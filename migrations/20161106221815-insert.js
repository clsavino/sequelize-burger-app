// *************************************************
// $ sequelize db:migrate // Run pending migrations.
// Check database for insertion of rows
//
// Revert the last migration run - truncate burgers
// $ sequelize db:migrate:undo
//
// Check database to see if burgers deleted.
// Run migration again
// $ sequelize db:migrate
// Verify ids start at 1
// *************************************************

'use strict';
// Require the burger model, these two are equal
//var burger = require('../models');
var model = require("../models");

module.exports = {
  // migration
  up: function (queryInterface, Sequelize) {
    /* Return a promise to correctly handle asynchronicity.
      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    // bulk insert these entries using our model
    return model.burger.bulkCreate(
      [
        {burger_name: "All American Bacon Burger"},
        {burger_name: "Srirach Habanero Burger"},
        {burger_name: "Mushroom and Crispy Onion Straws Burger"},
        {burger_name: "Bacon Lettuce and Tomato Burger"},
        {burger_name: "Salsa Quac and Queso Burger"}
      ]
    )
  },
  // undo
  down: function (queryInterface, Sequelize) {
    /*Return a promise to correctly handle asynchronicity.
      Example:
      return queryInterface.dropTable('users');
    */
    // remove all instances of these burgers from the table
    return model.burger.destroy({ where:{burger_name: [
      "All American Bacon Burger",
      "Srirach Habanero Burger",
      "Mushroom and Crispy Onion Straws Burger",
      "Bacon Lettuce and Tomato Burger",
      "Salsa Quac and Queso Burger"
      ]},

      truncate: true
    })
  }
};
