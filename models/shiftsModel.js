const { Sequelize, DataTypes, Model } = require('sequelize');
const { poolPromise, sequelize} = require("../includes/db.js");

class ShiftModel extends Model {}

ShiftModel.init({

    // Model attributes are defined here
    shift_id:{
        type: DataTypes.NUMBER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    start_dt_time: {
        type: DataTypes.DATE,
        allowNull: false
    },
    end_dt_time: {
        type: DataTypes.DATE,
        allowNull: false
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false
    },
    staff_id: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
  // Other model options go here
  freezeTableName: true,
  sequelize,                // We need to pass the connection instance
  modelName: 'ShiftModel',  // We need to choose the model name
  tableName: 'shifts'
});

// the defined model is the class itself
console.log(ShiftModel === sequelize.models.ShiftModel); // true

module.exports = {ShiftModel};