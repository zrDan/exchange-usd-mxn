const mongoose = require("mongoose");

const bankSchema = mongoose.Schema({
  _id: String,
  Compra: Number,
  Venta: Number,
});

module.exports = mongoose.model("bank_info", bankSchema);
