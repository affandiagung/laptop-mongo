'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Profile.belongsTo(models.Users , {as:"user", foreignKey:"userID"})
    }
  };
  Profile.init({
    userId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    address: DataTypes.STRING,
    dateOfBirth: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Profile',
  });
  return Profile;
};