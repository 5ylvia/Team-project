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
    .then((projects) => {
      return res.send(projects);
    })
    .catch(next);
});

router.post("/", (req, res, next) => {
  const project = new Project(req.body);
  project
    .save()
    .then((project) => {
      return res.status(201).send(project);
    })
    .catch(next);
});

router.get("/:id", (req, res, next) => {
  return res.status(200).send(req.project);
});

module.exports = router;
