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
    projects: [
      {
        id: 1,
        title: "Project name",
        description: [
          "Coinbase was created as a reliable, trusted, and safe bridge for people to buy and sell cryptocurrency, and we remain committed to providing the best crypto investing experience for our customers.",
          "Coinbase was created as a reliable, trusted, and safe bridge for people to buy and sell cryptocurrency, and we remain committed to providing the best crypto investing experience for our customers.",
          "Coinbase was created as a reliable, trusted, and safe bridge for people to buy and sell cryptocurrency, and we remain committed to providing the best crypto investing experience for our customers.",
        ],
        images: [
          "/portfolio-view-app/src/asset/1.jpg",
          "/portfolio-view-app/src/asset/2.jpg",
          "/portfolio-view-app/src/asset/3.jpg",
        ],
      },
      {
        id: 2,
        title: "Project name",
        description: [
          "Coinbase was created as a reliable, trusted, and safe bridge for people to buy and sell cryptocurrency, and we remain committed to providing the best crypto investing experience for our customers.",
          "Coinbase was created as a reliable, trusted, and safe bridge for people to buy and sell cryptocurrency, and we remain committed to providing the best crypto investing experience for our customers.",
          "Coinbase was created as a reliable, trusted, and safe bridge for people to buy and sell cryptocurrency, and we remain committed to providing the best crypto investing experience for our customers.",
        ],
        images: [
          "/portfolio-view-app/src/asset/1.jpg",
          "/portfolio-view-app/src/asset/2.jpg",
          "/portfolio-view-app/src/asset/3.jpg",
        ],
      },
      {
        id: 3,
        title: "Project name",
        description: [
          "Coinbase was created as a reliable, trusted, and safe bridge for people to buy and sell cryptocurrency, and we remain committed to providing the best crypto investing experience for our customers.",
          "Coinbase was created as a reliable, trusted, and safe bridge for people to buy and sell cryptocurrency, and we remain committed to providing the best crypto investing experience for our customers.",
          "Coinbase was created as a reliable, trusted, and safe bridge for people to buy and sell cryptocurrency, and we remain committed to providing the best crypto investing experience for our customers.",
        ],
        images: [
          "/portfolio-view-app/src/asset/1.jpg",
          "/portfolio-view-app/src/asset/2.jpg",
          "/portfolio-view-app/src/asset/3.jpg",
        ],
      },
      {
        id: 4,
        title: "Project name",
        description: [
          "Coinbase was created as a reliable, trusted, and safe bridge for people to buy and sell cryptocurrency, and we remain committed to providing the best crypto investing experience for our customers.",
          "Coinbase was created as a reliable, trusted, and safe bridge for people to buy and sell cryptocurrency, and we remain committed to providing the best crypto investing experience for our customers.",
          "Coinbase was created as a reliable, trusted, and safe bridge for people to buy and sell cryptocurrency, and we remain committed to providing the best crypto investing experience for our customers.",
        ],
        images: [
          "/portfolio-view-app/src/asset/1.jpg",
          "/portfolio-view-app/src/asset/2.jpg",
          "/portfolio-view-app/src/asset/3.jpg",
        ],
      },
    ],
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
    projects: [
      {
        id: 1,
        title: "Project name",
        description: [
          "Coinbase was created as a reliable, trusted, and safe bridge for people to buy and sell cryptocurrency, and we remain committed to providing the best crypto investing experience for our customers.",
          "Coinbase was created as a reliable, trusted, and safe bridge for people to buy and sell cryptocurrency, and we remain committed to providing the best crypto investing experience for our customers.",
          "Coinbase was created as a reliable, trusted, and safe bridge for people to buy and sell cryptocurrency, and we remain committed to providing the best crypto investing experience for our customers.",
        ],
        images: [
          "/portfolio-view-app/src/asset/1.jpg",
          "/portfolio-view-app/src/asset/2.jpg",
          "/portfolio-view-app/src/asset/3.jpg",
        ],
      },
      {
        id: 2,
        title: "Project name",
        description: [
          "Coinbase was created as a reliable, trusted, and safe bridge for people to buy and sell cryptocurrency, and we remain committed to providing the best crypto investing experience for our customers.",
          "Coinbase was created as a reliable, trusted, and safe bridge for people to buy and sell cryptocurrency, and we remain committed to providing the best crypto investing experience for our customers.",
          "Coinbase was created as a reliable, trusted, and safe bridge for people to buy and sell cryptocurrency, and we remain committed to providing the best crypto investing experience for our customers.",
        ],
        images: [
          "/portfolio-view-app/src/asset/1.jpg",
          "/portfolio-view-app/src/asset/2.jpg",
          "/portfolio-view-app/src/asset/3.jpg",
        ],
      },
      {
        id: 3,
        title: "Project name",
        description: [
          "Coinbase was created as a reliable, trusted, and safe bridge for people to buy and sell cryptocurrency, and we remain committed to providing the best crypto investing experience for our customers.",
          "Coinbase was created as a reliable, trusted, and safe bridge for people to buy and sell cryptocurrency, and we remain committed to providing the best crypto investing experience for our customers.",
          "Coinbase was created as a reliable, trusted, and safe bridge for people to buy and sell cryptocurrency, and we remain committed to providing the best crypto investing experience for our customers.",
        ],
        images: [
          "/portfolio-view-app/src/asset/1.jpg",
          "/portfolio-view-app/src/asset/2.jpg",
          "/portfolio-view-app/src/asset/3.jpg",
        ],
      },
      {
        id: 4,
        title: "Project name",
        description: [
          "Coinbase was created as a reliable, trusted, and safe bridge for people to buy and sell cryptocurrency, and we remain committed to providing the best crypto investing experience for our customers.",
          "Coinbase was created as a reliable, trusted, and safe bridge for people to buy and sell cryptocurrency, and we remain committed to providing the best crypto investing experience for our customers.",
          "Coinbase was created as a reliable, trusted, and safe bridge for people to buy and sell cryptocurrency, and we remain committed to providing the best crypto investing experience for our customers.",
        ],
        images: [
          "/portfolio-view-app/src/asset/1.jpg",
          "/portfolio-view-app/src/asset/2.jpg",
          "/portfolio-view-app/src/asset/3.jpg",
        ],
      },
    ],
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
    projects: [
      {
        id: 1,
        title: "Project name",
        description: [
          "Coinbase was created as a reliable, trusted, and safe bridge for people to buy and sell cryptocurrency, and we remain committed to providing the best crypto investing experience for our customers.",
          "Coinbase was created as a reliable, trusted, and safe bridge for people to buy and sell cryptocurrency, and we remain committed to providing the best crypto investing experience for our customers.",
          "Coinbase was created as a reliable, trusted, and safe bridge for people to buy and sell cryptocurrency, and we remain committed to providing the best crypto investing experience for our customers.",
        ],
        images: [
          "/portfolio-view-app/src/asset/1.jpg",
          "/portfolio-view-app/src/asset/2.jpg",
          "/portfolio-view-app/src/asset/3.jpg",
        ],
      },
      {
        id: 2,
        title: "Project name",
        description: [
          "Coinbase was created as a reliable, trusted, and safe bridge for people to buy and sell cryptocurrency, and we remain committed to providing the best crypto investing experience for our customers.",
          "Coinbase was created as a reliable, trusted, and safe bridge for people to buy and sell cryptocurrency, and we remain committed to providing the best crypto investing experience for our customers.",
          "Coinbase was created as a reliable, trusted, and safe bridge for people to buy and sell cryptocurrency, and we remain committed to providing the best crypto investing experience for our customers.",
        ],
        images: [
          "/portfolio-view-app/src/asset/1.jpg",
          "/portfolio-view-app/src/asset/2.jpg",
          "/portfolio-view-app/src/asset/3.jpg",
        ],
      },
      {
        id: 3,
        title: "Project name",
        description: [
          "Coinbase was created as a reliable, trusted, and safe bridge for people to buy and sell cryptocurrency, and we remain committed to providing the best crypto investing experience for our customers.",
          "Coinbase was created as a reliable, trusted, and safe bridge for people to buy and sell cryptocurrency, and we remain committed to providing the best crypto investing experience for our customers.",
          "Coinbase was created as a reliable, trusted, and safe bridge for people to buy and sell cryptocurrency, and we remain committed to providing the best crypto investing experience for our customers.",
        ],
        images: [
          "/portfolio-view-app/src/asset/1.jpg",
          "/portfolio-view-app/src/asset/2.jpg",
          "/portfolio-view-app/src/asset/3.jpg",
        ],
      },
      {
        id: 4,
        title: "Project name",
        description: [
          "Coinbase was created as a reliable, trusted, and safe bridge for people to buy and sell cryptocurrency, and we remain committed to providing the best crypto investing experience for our customers.",
          "Coinbase was created as a reliable, trusted, and safe bridge for people to buy and sell cryptocurrency, and we remain committed to providing the best crypto investing experience for our customers.",
          "Coinbase was created as a reliable, trusted, and safe bridge for people to buy and sell cryptocurrency, and we remain committed to providing the best crypto investing experience for our customers.",
        ],
        images: [
          "/portfolio-view-app/src/asset/1.jpg",
          "/portfolio-view-app/src/asset/2.jpg",
          "/portfolio-view-app/src/asset/3.jpg",
        ],
      },
    ],
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
