const express = require("express");

const router = express.Router();
const schoolController = require("../controller/school.controller")
router.post("/school",schoolController.create)
router.put("/school",schoolController.updateAddress)
router.put("/push",schoolController.pushUpdate)

module.exports = router;

