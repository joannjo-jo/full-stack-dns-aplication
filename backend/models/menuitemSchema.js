const mongoose = require("mongoose");

const menuitemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  menuId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "menu",
  },
});

module.exports = mongoose.model("menuitem", menuitemSchema);
