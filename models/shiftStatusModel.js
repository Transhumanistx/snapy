const { Sequelize, DataTypes, Model } = require('sequelize');
const { poolPromise, sequelize} = require("../includes/db.js");

class ShiftStatusModel extends Model{}

ShiftStatusModel.init({

    //model attributes
    shift_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    staff_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'pending_response'
    }
}, {
    // Other model options go here
    freezeTableName: true,
    sequelize,                // We need to pass the connection instance
    modelName: 'ShiftStatus',  // We need to choose the model name
    tableName: 'shiftstatus'
  });

  // the defined model is the class itself
console.log(ShiftStatusModel === sequelize.models.ShiftStatus); // true

module.exports = {ShiftStatusModel};