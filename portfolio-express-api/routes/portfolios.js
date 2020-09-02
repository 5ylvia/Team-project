const router = require("express").Router();
const Portfolio = require("../models/Portfolio.js");
const Project = require("../models/Project.js");

router.param("id", (req, res, next, id) => {
  Portfolio.findById(id)
    .then((portfolio) => {
      if (!portfolio) {
        res.status(404).send("portfolio not found");
      } else {
        req.portfolio = portfolio;
        next();

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

//Post request
router.post("/", (req, res) => {
  const portfolio = new Portfolio(req.body);
  console.log(portfolio);
  portfolio.save().then((result) => {
    return res.status(201).send(result);
  });
});

//get portfolio by id
router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  console.log(`get request for user ${id} recived...`);
  res.status(200).send(req.portfolio);
});

//update portfolio info
router.put("/:id", (req, res, next) => {
  const id = req.params.id;
  console.log(`Update request for portfolio ${id} received...`);
  Portfolio.findByIdAndUpdate(req.portfolio.id, req.body).then((portfolio) => {
    res.send(portfolio);
  });
});

//delete portfolio
router.delete("/:id", (req, res, next) => {
  const id = req.params.id;
  Portfolio.findByIdAndDelete(req.portfolio.id).then((portfolio) => {
    res.status(204).send(portfolio);
  });
});

//PROJECTS ---------------------------------------

//Portfolio's projects

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
