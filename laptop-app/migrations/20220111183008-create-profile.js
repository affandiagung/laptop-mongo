'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Profiles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {  //userID setara dengan id di table Users (line 14 dan 15)
        type: Sequelize.INTEGER,
        allowNull : false, //jgn dibiarkan kosong
        references : {  //menambahkan field ini untuk menunjukkan bahwa userID bagian dari Users setelah model:generate
          model : "Users",
          key : "id"
        },
        onDelete : "CASCADE", //untuk relation onDelete
        onUpdate : "CASCADE" //untuk relation onUpdate
      },
      name: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      dateOfBirth: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('Profiles');
  }
};