const express = require("express");
const CatController = require("../controller/cat.controller");
const router = express.Router();

router.post("/cat",CatController.create);
router.get("/cat",CatController.getIndian);

module.exports = router;