const mongoose = require("mongoose");

const PortfolioSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    description: String,
    sources: { type: Object, required: true },
    color: String,
    skills: { type: Object, required: true },
    contact: { type: Object, required: true },
    projects: [{ type: mongoose.Schema.Types.ObjectId, ref: "Project" }],
  },

  { timestamps: true }
);

module.exports = mongoose.model("Portfolio", PortfolioSchema);
