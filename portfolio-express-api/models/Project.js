const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema(
  {
    id: String,
    title: { type: String, required: true },
    description: Object,
    images: Object,
    author: { type: mongoose.Schema.Types.ObjectId, ref: "Portfolio" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", ProjectSchema);
