const router = require("express").Router();
const Portfolio = require("../models/Portfolio.js");

//Get Portfolios
router.get("/", (req, res) => {
  console.log("Portfolio requested for all Portfolios received...");
  Portfolio.find({})
    .sort({ createdAt: "desc" })
    .then((result) => {
      return res.send(result);
    });
});

//Post request
router.post("", (req, res) => {
  const portfolio = new Portfolio(req.body);
  portfolio.save().then((result) => {
    return res.status(201).send(result);
  });
});

module.exports = router;
