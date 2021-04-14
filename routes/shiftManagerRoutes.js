const express = require('express')
const router = express.Router();
const shiftManagerController = require('../controllers/shiftManagerController.js');

router.get("/manager-dashboard", shiftManagerController.manager_dashaboard_get);
router.get("/manage_shift", shiftManagerController.manage_shifts_get);
router.post("/manage_shift", shiftManagerController.manage_shifts_post);
router.put("/manage_shift", shiftManagerController.manage_shifts_put);
router.delete("/manage_shift", shiftManagerController.manage_shifts_delete);

module.exports = router;
