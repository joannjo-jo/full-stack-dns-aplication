var express = require("express");
var router = express.Router();
var controllerMenu = require("./controller/menuController");
const menuitemController = require("./controller/menuitemController");

router.post("/addMenuitem/:_id", menuitemController.addMenuItem);
router.get("/allMenuitem/:_id", menuitemController.getAllMenuItems);
router.post("/menuSave", controllerMenu.menuSave);

router.get("/menuAlldata", controllerMenu.menuAlldata);
module.exports = router;
