const mongoose = require("mongoose");
const PortfolioSchema = new mongoose.Schema(
  {
    author: String,
    name: { type: String, required: true },
    sources: { type: Object, required: true },
    description: String,
    color: String,
    skills: { type: Object, required: true },
    contact: { type: Object, required: true },
    projects: [{ type: mongoose.Schema.Types.ObjectId, ref: "Project" }],
  },

  { timestamps: true }
);

module.exports = mongoose.model("Portfolio", PortfolioSchema);
