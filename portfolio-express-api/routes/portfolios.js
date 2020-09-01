const router = require("express").Router();
const Portfolio = require("../models/Portfolio.js");
const Project = require("../models/Project.js");

router.param("id", (req, res, next, id) => {
  Portfolio.findById(id)
    .then((portfolio) => {
      if (!portfolio) {
        res.status(404).send("Portfolio not found");
      } else {
        req.portfolio = portfolio;
        return next();
      }
    })
    .catch(next);
});

router.get("/", (req, res, next) => {
  Portfolio.find({})
    .sort({ createdAt: "desc" })
    .then((portfolios) => {
      return res.status(200).send(portfolios);
    })
    .catch(next);
});

router.get("/:id", (req, res) => {
  return res.status(200).send(req.portfolio);
});

// Author's project
router.get("/:id/projects", (req, res, next) => {
  Project.find({ author: req.portfolio.id })
  .sort({ createdAt: "desc" })
  .then((projects) => {
    return res.status(200).send(projects);
  })
  .catch(next);
})


router.post("/:id/projects", (req, res, next) => {
  const project = new Project(req.body);
  project.author = req.portfolio.id;
  project.save().then((project)=>{
      if (!req.portfolio.projects) {
      req.portfolio.projects = [];
    }
    req.portfolio.projects.push(project);
    res.status(201).send(article)
    }).catch(next);
})

module.exports = router;
