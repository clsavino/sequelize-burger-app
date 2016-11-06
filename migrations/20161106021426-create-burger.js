// *************************************************
// $ sequelize db:migrate // Run pending migrations.
// *************************************************

'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    /* Return a promise to correctly handle asynchronicity.
      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.createTable('burgers', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      burger_name: {
        type: Sequelize.STRING
      },
      devoured: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      createdAt: {
        type: Sequelize.STRING,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    /*Return a promise to correctly handle asynchronicity.
      Example:
      return queryInterface.dropTable('users');
    */
    return queryInterface.dropTable('burgers');
  }
};
