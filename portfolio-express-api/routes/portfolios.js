const router = require("express").Router();
const Portfolio = require("../models/Portfolio.js");
// const Project = require("../models/Project.js");

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

router.get("", (req, res) => {
  Portfolio.find({})
    .sort({ createdAt: "desc" })
    .then((portfolios) => {
      return res.status(200).send(portfolios);
    })
    .catch(next);
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  for (const portfolio of data) {
    if (portfolio.id === id) {
      res.send({ portfolio: portfolio });
    }
  }
});
router.get("/:id/projects", (req, res) => {
  const id = req.params.id;
  console.log(id);
  for (const portfolio of data) {
    if (portfolio.id === id) {
      res.send({ projects: portfolio.projects });
    }
  }
});

router.get("/:id/projects/:projectId", (req, res) => {
  const projectId = req.params.projectId;
  console.log(projectId);
  // for (const portfolio of data) {
  //   if (portfolio.projects.id === id) {
  //     res.send({ project: project });
  //   }
  // }
  res.send();
});

module.exports = router;
