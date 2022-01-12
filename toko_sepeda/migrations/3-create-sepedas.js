'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Sepedas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sepedaId:{
        type : Sequelize.INTEGER,
        allowNull : false,
        references : {
         model : "Vendors",
         key : "id"
        },
        onUpdate : "CASCADE",
        onDelete : "CASCADE"
      },
      name: {
        type: Sequelize.STRING
      },
      harga: {
        type: Sequelize.INTEGER
      },
      stock: {
        type: Sequelize.INTEGER
      },
      image: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Sepedas');
  }
};