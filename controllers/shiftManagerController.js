const ShiftModel = require("../models/shiftsModel.js");
const StaffProfileModel = require("../models/staffProfileModel.js");

const manager_dashaboard_get = async (req, res) => {
    res.render("manager-dashboard/index", {session : req.session});
}

const manage_shifts_get = async (req, res) =>{
    res.render("manager-dashboard/manage-shifts.ejs");
}

const manage_shifts_post = async (req, res) =>{
  
  const new_shift = await ShiftModel.create({
    start_dt_time: req.fields.start_dt_time,
    end_dt_time: req.fields.end_dt_time,
    location: req.fields.location,
    staff_id : req.fields.staff_id
  });

}

const manage_shifts_put = async (req, res) =>{

}

const manage_shifts_delete = async (req, res) =>{

}


const staff_account_create_get = async (req, res) =>{
  res.render("authentication/staff-registration.ejs");
}

const staff_account_create_post = async (req, res) =>{

  var new_staff = JSON.parse(req.fields.new_staff);

  console.log(StaffProfileModel); // This is good!

  const new_profile = await StaffProfileModel.StaffProfileModel.create({
    full_name: new_staff.full_name,
    preferred_name: new_staff.preferred_name,
    per_week_work_hours_limit: new_staff.per_week_work_hours_limit,
    home_address: new_staff.home_address,
    email: new_staff.email,
    phone: new_staff.phone,
    staff_type: new_staff.staff_type
  });

  return res.send({"status":"success"});
}

module.exports = {manager_dashaboard_get, manage_shifts_get, manage_shifts_post, manage_shifts_put, manage_shifts_delete, staff_account_create_get, staff_account_create_post};