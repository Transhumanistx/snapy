const staff_dashboard_get = async (req, res) => {
    req.session.role = "staff";
    req.session.staff_member_id = 1;
    console.log(req.session);
    res.render("staff-dashboard/index.ejs", {session : req.session});
}


module.exports = {
    staff_dashboard_get
}