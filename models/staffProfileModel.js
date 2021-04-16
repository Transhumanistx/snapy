const { Sequelize, DataTypes, Model } = require('sequelize');
const { poolPromise, sequelize} = require("../includes/db.js");

class StaffProfileModel extends Model {}

StaffProfileModel.init({

    // Model attributes are defined here
    staff_id:{
        type: DataTypes.NUMBER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    full_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    preferred_name : {
        type: DataTypes.STRING,
        allowNull: true
    },
    per_week_work_hours_limit: {
        type: DataTypes.DATE,
        allowNull: false
    },
    home_address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    staff_type: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
  // Other model options go here
  sequelize,                     // We need to pass the connection instance
  modelName: 'StaffProfile',    // We need to choose the model name
  tableName: 'staffProfiles'
});

// the defined model is the class itself
console.log(StaffProfileModel === sequelize.models.StaffProfile); // true

module.exports = {StaffProfileModel};