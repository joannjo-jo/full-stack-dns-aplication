var express = require("express");
var router = express.Router();
var controllerMenu = require("./controller/menuController");
const menuItemController = require("./controller/menuitemController");
router.post("/addMenuitem/:_id", menuItemController.addMenuItem);
router.get("/allMenuitem/:_id", menuItemController.getAllMenuItems);
router.post("/menuSave", controllerMenu.menuSave);
router.get("/menuAlldata", controllerMenu.menuAlldata);
module.exports = router;
