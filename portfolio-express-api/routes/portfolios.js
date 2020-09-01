const router = require("express").Router();
const Portfolio = require("../models/Portfolio.js");
const Project = require("../models/Project.js");
const { request } = require("express");

//id convert
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

//Get Portfolios
router.get("/", (req, res, next) => {
  Portfolio.find({})
    .sort({ createdAt: "desc" })
    .then((portfolio) => {
      return res.status(200).send(portfolio);
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
  Project.find({ projects: req.portfolio.id })
    .sort({ createdAt: "desc" })
    .then((projects) => {
      return res.status(200).send(projects);
    })
    .catch(next);
});

// router.post("/:id/articles", (req, res, next) => {
//   const article = new Article(req.body);
//   article.author = req.user.id;
//   article
//     .save()
//     .then((article) => {
//       if (!req.user.articles) {
//         req.user.articles = [];
//       }
//       req.user.articles.push(article);
//       req.user
//         .save()
//         .then((article) => {
//           res.status(201).send({ user: user, article: article });
//         })
//         .catch(next);
//     })
//     .catch(next);
// });

module.exports = router;
