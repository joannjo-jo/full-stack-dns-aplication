const menu = require("../models/menuSchema");

const menuSave = async (req, res) => {
  const { name, description } = req.body;

  await menu
    .findOne({ name })
    .then((exist) => {
      if (exist) {
        return res.status(200).json({
          message: "Menu already exists",
          status: 200,
          data: exist,
        });
      } else {
        const newMenu = new menu({ name, description });

        newMenu
          .save()
          .then((savedMenu) => {
            res.status(201).json({
              message: "Menu saved successfully",
              status: 201,
              data: savedMenu,
            });
          })
          .catch((err) => {
            res.status(500).json({
              message: "Error saving menu",
              error: err,
            });
          });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "Error checking for existing menu",
        error: err,
      });
    });
};

const menuAlldata = async (req, res) => {
  await menu
    .find({})
    .then((data) => {
      res.status(200).json({
        allData: data,
        message: "done",
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Error fetching menu data",
        error: err,
      });
    });
};

module.exports = {
  menuSave,
  menuAlldata
};