const express = require("express");

const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const data = [
  {
    id: "sylvia",
    name: "Sylvia Lee",
    sources: ["GRAPHIC", "UX/UI", "WEB"],
    description: "ac velit tellus. Eleifend id suspendisse ipsum etiam at.",
    color: "#7A79C0",
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
        title: "1-Project name-s",
        description: [
          "1-Coinbase was created as a reliable, trusted, and safe bridge for people to buy and sell cryptocurrency, and we remain committed to providing the best crypto investing experience for our customers.",
          "2-Coinbase was created as a reliable, trusted, and safe bridge for people to buy and sell cryptocurrency, and we remain committed to providing the best crypto investing experience for our customers.",
          "3-Coinbase was created as a reliable, trusted, and safe bridge for people to buy and sell cryptocurrency, and we remain committed to providing the best crypto investing experience for our customers.",
        ],
        images: [
          "/portfolio-view-app/src/assets/1.jpg",
          "/portfolio-view-app/src/assets/2.jpg",
          "/portfolio-view-app/src/assets/3.jpg",
        ],
      },
      {
        id: 2,
        title: "2-Project name-s",
        description: [
          "1-Coinbase was created as a reliable, trusted, and safe bridge for people to buy and sell cryptocurrency, and we remain committed to providing the best crypto investing experience for our customers.",
          "2-Coinbase was created as a reliable, trusted, and safe bridge for people to buy and sell cryptocurrency, and we remain committed to providing the best crypto investing experience for our customers.",
          "3-Coinbase was created as a reliable, trusted, and safe bridge for people to buy and sell cryptocurrency, and we remain committed to providing the best crypto investing experience for our customers.",
        ],
        images: [
          "/portfolio-view-app/src/assets/1.jpg",
          "/portfolio-view-app/src/assets/2.jpg",
          "/portfolio-view-app/src/assets/3.jpg",
        ],
      },
      {
        id: 3,
        title: "3-Project name-s",
        description: [
          "1-Coinbase was created as a reliable, trusted, and safe bridge for people to buy and sell cryptocurrency, and we remain committed to providing the best crypto investing experience for our customers.",
          "2-Coinbase was created as a reliable, trusted, and safe bridge for people to buy and sell cryptocurrency, and we remain committed to providing the best crypto investing experience for our customers.",
          "3-Coinbase was created as a reliable, trusted, and safe bridge for people to buy and sell cryptocurrency, and we remain committed to providing the best crypto investing experience for our customers.",
        ],
        images: [
          "/portfolio-view-app/src/assets/1.jpg",
          "/portfolio-view-app/src/assets/2.jpg",
          "/portfolio-view-app/src/assets/3.jpg",
        ],
      },
      {
        id: 4,
        title: "4-Project name-s",
        description: [
          "1-Coinbase was created as a reliable, trusted, and safe bridge for people to buy and sell cryptocurrency, and we remain committed to providing the best crypto investing experience for our customers.",
          "2-Coinbase was created as a reliable, trusted, and safe bridge for people to buy and sell cryptocurrency, and we remain committed to providing the best crypto investing experience for our customers.",
          "3-Coinbase was created as a reliable, trusted, and safe bridge for people to buy and sell cryptocurrency, and we remain committed to providing the best crypto investing experience for our customers.",
        ],
        images: [
          "/portfolio-view-app/src/assets/1.jpg",
          "/portfolio-view-app/src/assets/2.jpg",
          "/portfolio-view-app/src/assets/3.jpg",
        ],
      },
    ],
  },
  {
    id: "thom",
    name: "Thomas Hendrikz",
    sources: ["GRAPHIC", "UX/UI", "WEB"],
    description: "ac velit tellus. Eleifend id suspendisse ipsum etiam at.",
    color: "#7CB7ED",
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
        title: "1-Project name-t",
        description: [
          "1-Coinbase was created as a reliable, trusted, and safe bridge for people to buy and sell cryptocurrency, and we remain committed to providing the best crypto investing experience for our customers.",
          "2-Coinbase was created as a reliable, trusted, and safe bridge for people to buy and sell cryptocurrency, and we remain committed to providing the best crypto investing experience for our customers.",
          "3-Coinbase was created as a reliable, trusted, and safe bridge for people to buy and sell cryptocurrency, and we remain committed to providing the best crypto investing experience for our customers.",
        ],
        images: [
          "/portfolio-view-app/src/assets/1.jpg",
          "/portfolio-view-app/src/assets/2.jpg",
          "/portfolio-view-app/src/assets/3.jpg",
        ],
      },
      {
        id: 2,
        title: "2-Project name-t",
        description: [
          "1-Coinbase was created as a reliable, trusted, and safe bridge for people to buy and sell cryptocurrency, and we remain committed to providing the best crypto investing experience for our customers.",
          "2-Coinbase was created as a reliable, trusted, and safe bridge for people to buy and sell cryptocurrency, and we remain committed to providing the best crypto investing experience for our customers.",
          "3-Coinbase was created as a reliable, trusted, and safe bridge for people to buy and sell cryptocurrency, and we remain committed to providing the best crypto investing experience for our customers.",
        ],
        images: [
          "/portfolio-view-app/src/assets/1.jpg",
          "/portfolio-view-app/src/assets/2.jpg",
          "/portfolio-view-app/src/assets/3.jpg",
        ],
      },
      {
        id: 3,
        title: "3-Project name-t",
        description: [
          "1-Coinbase was created as a reliable, trusted, and safe bridge for people to buy and sell cryptocurrency, and we remain committed to providing the best crypto investing experience for our customers.",
          "2-Coinbase was created as a reliable, trusted, and safe bridge for people to buy and sell cryptocurrency, and we remain committed to providing the best crypto investing experience for our customers.",
          "3-Coinbase was created as a reliable, trusted, and safe bridge for people to buy and sell cryptocurrency, and we remain committed to providing the best crypto investing experience for our customers.",
        ],
        images: [
          "/portfolio-view-app/src/assets/1.jpg",
          "/portfolio-view-app/src/assets/2.jpg",
          "/portfolio-view-app/src/assets/3.jpg",
        ],
      },
      {
        id: 4,
        title: "4-Project name-t",
        description: [
          "1-Coinbase was created as a reliable, trusted, and safe bridge for people to buy and sell cryptocurrency, and we remain committed to providing the best crypto investing experience for our customers.",
          "2-Coinbase was created as a reliable, trusted, and safe bridge for people to buy and sell cryptocurrency, and we remain committed to providing the best crypto investing experience for our customers.",
          "3-Coinbase was created as a reliable, trusted, and safe bridge for people to buy and sell cryptocurrency, and we remain committed to providing the best crypto investing experience for our customers.",
        ],
        images: [
          "/portfolio-view-app/src/assets/1.jpg",
          "/portfolio-view-app/src/assets/2.jpg",
          "/portfolio-view-app/src/assets/3.jpg",
        ],
      },
    ],
  },
  {
    id: "vinny",
    name: "Vincent Pollett",
    sources: ["GRAPHIC", "UX/UI", "WEB"],
    description: "ac velit tellus. Eleifend id suspendisse ipsum etiam at.",
    color: "#C9B364",
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
        title: "1-Project name-v",
        description: [
          "1-Coinbase was created as a reliable, trusted, and safe bridge for people to buy and sell cryptocurrency, and we remain committed to providing the best crypto investing experience for our customers.",
          "2-Coinbase was created as a reliable, trusted, and safe bridge for people to buy and sell cryptocurrency, and we remain committed to providing the best crypto investing experience for our customers.",
          "3-Coinbase was created as a reliable, trusted, and safe bridge for people to buy and sell cryptocurrency, and we remain committed to providing the best crypto investing experience for our customers.",
        ],
        images: [
          "/portfolio-view-app/src/assets/1.jpg",
          "/portfolio-view-app/src/assets/2.jpg",
          "/portfolio-view-app/src/assets/3.jpg",
        ],
      },
      {
        id: 2,
        title: "2-Project name-v",
        description: [
          "1-Coinbase was created as a reliable, trusted, and safe bridge for people to buy and sell cryptocurrency, and we remain committed to providing the best crypto investing experience for our customers.",
          "2-Coinbase was created as a reliable, trusted, and safe bridge for people to buy and sell cryptocurrency, and we remain committed to providing the best crypto investing experience for our customers.",
          "3-Coinbase was created as a reliable, trusted, and safe bridge for people to buy and sell cryptocurrency, and we remain committed to providing the best crypto investing experience for our customers.",
        ],
        images: [
          "/portfolio-view-app/src/assets/1.jpg",
          "/portfolio-view-app/src/assets/2.jpg",
          "/portfolio-view-app/src/assets/3.jpg",
        ],
      },
      {
        id: 3,
        title: "3-Project name-v",
        description: [
          "1-Coinbase was created as a reliable, trusted, and safe bridge for people to buy and sell cryptocurrency, and we remain committed to providing the best crypto investing experience for our customers.",
          "2-Coinbase was created as a reliable, trusted, and safe bridge for people to buy and sell cryptocurrency, and we remain committed to providing the best crypto investing experience for our customers.",
          "3-Coinbase was created as a reliable, trusted, and safe bridge for people to buy and sell cryptocurrency, and we remain committed to providing the best crypto investing experience for our customers.",
        ],
        images: [
          "/portfolio-view-app/src/assets/1.jpg",
          "/portfolio-view-app/src/assets/2.jpg",
          "/portfolio-view-app/src/assets/3.jpg",
        ],
      },
      {
        id: 4,
        title: "4-Project name-v",
        description: [
          "1-Coinbase was created as a reliable, trusted, and safe bridge for people to buy and sell cryptocurrency, and we remain committed to providing the best crypto investing experience for our customers.",
          "2-Coinbase was created as a reliable, trusted, and safe bridge for people to buy and sell cryptocurrency, and we remain committed to providing the best crypto investing experience for our customers.",
          "3-Coinbase was created as a reliable, trusted, and safe bridge for people to buy and sell cryptocurrency, and we remain committed to providing the best crypto investing experience for our customers.",
        ],
        images: [
          "/portfolio-view-app/src/assets/1.jpg",
          "/portfolio-view-app/src/assets/2.jpg",
          "/portfolio-view-app/src/assets/3.jpg",
        ],
      },
    ],
  },
];

app.get("/", (req, res) => {
  res.send({ portfolios: data });
});

app.get("/portfolio", (req, res) => {
  res.send({ portfolios: data });
});

app.get("/portfolio/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  for (const portfolio of data) {
    if (portfolio.id === id) {
      res.send({ portfolio: portfolio, projects: portfolio.projects });
    }
  }
});

app.get("/portfolio/:id/project/:projectId", (req, res) => {
  // const projectId = req.params;
  // console.log(req.params.pro);
  res.send(req.params);
});

app.listen(3000, () => {
  console.log("Server on!");
});
