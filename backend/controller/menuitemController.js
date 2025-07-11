const MenuItem = require("../models/menuitemSchema");

const addMenuItem = (req, res) => {
  const { _id } = req.params;
  const { name, description, price } = req.body;

  const newItem = new MenuItem({
    name,
    description,
    price,
    menuId: _id,
  });

  newItem
    .save()
    .then((savedItem) => savedItem.populate("menuId"))
    .then((item) => res.status(200).json(item))
    .catch((err) => res.status(500).json({ error: err.message }));
};

const getAllMenuItems = (req, res) => {
  const { _id } = req.params;

  MenuItem.find({ menuId: _id })
    .populate("menuId")
    .then((items) => res.json(items))
    .catch((err) => res.status(500).json({ error: err.message }));
};

module.exports = {
  addMenuItem,
  getAllMenuItems,
};
