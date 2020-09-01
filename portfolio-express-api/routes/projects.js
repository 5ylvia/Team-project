const router = require("express").Router();
const Project = require("../models/Project.js");

router.param("id", (req, res, next, id) => {
    Project.findById(id)
    .populate("author")
      .then((project) => {
        if (!project) {
          res.status(404).send("Project not found");
        } else {
          req.project = project;
          return next();
        }
      })
      .catch(next);
  });
  
  router.get("/", (req, res, next) => {
    Project.find({})
      .sort({ createdAt: "desc" })
      .then((results) => {
        return res.send(results);
      })
      .catch(next);
  });
  

module.exports = router;
