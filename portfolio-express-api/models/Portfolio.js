const mongoose = require("mongoose");
const PortfolioSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  color: { type: String, required: true },
});

module.exports = mongoose.model("Portfolio", PortfolioSchema);
