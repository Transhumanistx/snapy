const ShiftModel = require("../models/shiftsModel.js");
const StaffProfileModel = require("../models/staffProfileModel.js");

// const createShiftTable = () => {
    
//     ShiftModel.ShiftModel.sync()
//     .then(() => {
//         console.log("Table created successfully")
//     })
//     .catch((err) => {
//         console.log()
//     });
// }

const addNewStaff = (new_staff) => {
    return new Promise((resolve, reject) => {

        StaffProfileModel.StaffProfileModel.create({
            full_name: new_staff.full_name,
            preferred_name: new_staff.preferred_name,
            per_week_work_hours_limit: new_staff.per_week_work_hours_limit,
            home_address: new_staff.home_address,
            email: new_staff.email,
            phone: new_staff.phone,
            staff_type: new_staff.staff_type
          }).then((result) => {
              resolve(result);
          }).catch((err) => {
              reject(err);
          });
    })
}

module.exports = {
    addNewStaff
}