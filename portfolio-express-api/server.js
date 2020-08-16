const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

const data = [
  {
    id: "sylvia",
    name: "Sylvia Lee",
    sources: ["GRAPHIC", "UX/UI", "WEB"],
    description: "ac velit tellus. Eleifend id suspendisse ipsum etiam at.",
    skills: [
      "Graphic Design",
      "HTML, CSS, JS",
      "UX/Ui Design",
      "Adobe Creative Suite",
    ],
    contact: {
      email: "NameEmail@Gmail.com",
      phone: "021 123 1234",
      web: "WebDomain.com",
    },
  },
  {
    id: "thom",
    name: "Thomas Hendrikz",
    sources: ["GRAPHIC", "UX/UI", "WEB"],
    description: "ac velit tellus. Eleifend id suspendisse ipsum etiam at.",
    skills: [
      "Graphic Design",
      "HTML, CSS, JS",
      "UX/Ui Design",
      "Adobe Creative Suite",
    ],
    contact: {
      email: "NameEmail@Gmail.com",
      phone: "021 123 1234",
      web: "WebDomain.com",
    },
  },
  {
    id: "vinny",
    name: "Vincent Pollett",
    sources: ["GRAPHIC", "UX/UI", "WEB"],
    description: "ac velit tellus. Eleifend id suspendisse ipsum etiam at.",
    skills: [
      "Graphic Design",
      "HTML, CSS, JS",
      "UX/Ui Design",
      "Adobe Creative Suite",
    ],
    contact: {
      email: "NameEmail@Gmail.com",
      phone: "021 123 1234",
      web: "WebDomain.com",
    },
  },
];

app.get("/", (req, res) => {
  res.send("Hello world!!");
});

app.get("/users", (req, res) => {
  res.send({ users: data });
});

app.get("/users/:id", (req, res) => {
  console.log(req.params.id);
});

app.listen(3000, () => {
  console.log("Server on!");
});
