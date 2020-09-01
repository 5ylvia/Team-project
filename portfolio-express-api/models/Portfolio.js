const mongoose = require("mongoose");
const PortfolioSchema = new mongoose.Schema({
  name: String,
  description: String,
  color: String,
});

module.exports = mongoose.model("Portfolio", PortfolioSchema);
