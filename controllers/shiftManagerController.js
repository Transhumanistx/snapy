const shiftModel = require("../models/shiftsModel.js");

const manager_dashaboard_get = async (req, res) => {
    res.render("manager-dashboard/index", {session : req.session});
}

const manage_shifts_get = async (req, res) =>{
    res.render("manager-dashboard/manage-shifts.ejs");
}

const manage_shifts_post = async (req, res) =>{
  
  const new_shift = await shiftModel.create({
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

module.exports = {manager_dashaboard_get, manage_shifts_get, manage_shifts_post, manage_shifts_put, manage_shifts_delete};