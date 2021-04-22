const express = require('express')
const router = express.Router();
const staffMemberController = require('../controllers/staffMemberController.js');


router.get('/staff-dashboard', staffMemberController.staff_dashboard_get);


module.exports = router;