const express = require("express");

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const morgan = require("morgan");

dotenv.config();
const isProduction = false;

const app = express();

const cors = require("cors");

app.use(cors());

app.use(express.json());

mongoose.connect(
  "mongodb+srv://sylvia:YOOBEE@cluster0.syz6k.mongodb.net/team-portfolio?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }
);
// .catch((err) => {
//   console.log(err);
// });

mongoose.connection.on("open", function (ref) {
  console.log("MongoDB connected");

  app.listen(3000, () => {
    console.log("Listening on port 3000...");
  });
});

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
          "https://images.unsplash.com/photo-1593642632505-1f965e8426e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1225&q=80",
          "https://images.unsplash.com/photo-1593642632505-1f965e8426e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1225&q=80",
          "https://images.unsplash.com/photo-1593642632505-1f965e8426e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1225&q=80",
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
          "https://images.unsplash.com/photo-1593642632505-1f965e8426e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1225&q=80",
          "https://images.unsplash.com/photo-1593642632505-1f965e8426e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1225&q=80",
          "https://images.unsplash.com/photo-1593642632505-1f965e8426e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1225&q=80",
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
          "https://images.unsplash.com/photo-1593642632505-1f965e8426e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1225&q=80",
          "https://images.unsplash.com/photo-1593642632505-1f965e8426e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1225&q=80",
          "https://images.unsplash.com/photo-1593642632505-1f965e8426e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1225&q=80",
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
          "https://images.unsplash.com/photo-1593642632505-1f965e8426e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1225&q=80",
          "https://images.unsplash.com/photo-1593642632505-1f965e8426e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1225&q=80",
          "https://images.unsplash.com/photo-1593642632505-1f965e8426e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1225&q=80",
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
          "https://images.unsplash.com/photo-1593642632505-1f965e8426e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1225&q=80",
          "https://images.unsplash.com/photo-1593642632505-1f965e8426e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1225&q=80",
          "https://images.unsplash.com/photo-1593642632505-1f965e8426e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1225&q=80",
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
          "https://images.unsplash.com/photo-1593642632505-1f965e8426e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1225&q=80",
          "https://images.unsplash.com/photo-1593642632505-1f965e8426e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1225&q=80",
          "https://images.unsplash.com/photo-1593642632505-1f965e8426e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1225&q=80",
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
          "https://images.unsplash.com/photo-1593642632505-1f965e8426e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1225&q=80",
          "https://images.unsplash.com/photo-1593642632505-1f965e8426e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1225&q=80",
          "https://images.unsplash.com/photo-1593642632505-1f965e8426e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1225&q=80",
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
          "https://images.unsplash.com/photo-1593642632505-1f965e8426e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1225&q=80",
          "https://images.unsplash.com/photo-1593642632505-1f965e8426e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1225&q=80",
          "https://images.unsplash.com/photo-1593642632505-1f965e8426e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1225&q=80",
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
          "https://images.unsplash.com/photo-1593642632505-1f965e8426e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1225&q=80",
          "https://images.unsplash.com/photo-1593642632505-1f965e8426e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1225&q=80",
          "https://images.unsplash.com/photo-1593642632505-1f965e8426e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1225&q=80",
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
          "https://images.unsplash.com/photo-1593642632505-1f965e8426e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1225&q=80",
          "https://images.unsplash.com/photo-1593642632505-1f965e8426e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1225&q=80",
          "https://images.unsplash.com/photo-1593642632505-1f965e8426e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1225&q=80",
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
          "https://images.unsplash.com/photo-1593642632505-1f965e8426e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1225&q=80",
          "https://images.unsplash.com/photo-1593642632505-1f965e8426e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1225&q=80",
          "https://images.unsplash.com/photo-1593642632505-1f965e8426e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1225&q=80",
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
          "https://images.unsplash.com/photo-1593642632505-1f965e8426e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1225&q=80",
          "https://images.unsplash.com/photo-1593642632505-1f965e8426e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1225&q=80",
          "https://images.unsplash.com/photo-1593642632505-1f965e8426e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1225&q=80",
        ],
      },
    ],
  },
];

// Routing

app.use(morgan("dev"));

app.get("/", (req, res) => {
  console.log(`${req.method} request received...`);
  res.send("Hello");
});

const projects = require("./routes/projects.js");
const portfolios = require("./routes/portfolios.js");
app.use("/projects", projects);
app.use("/portfolios", portfolios);

// Errors

app.use((req, res, next) => {
  const error = new Error("Endpoint Not Found");
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  if (!isProduction) {
    console.log(err.stack);
  }

  res.status(err.status || 500);

  res.json({
    errors: {
      message: err.message,
      error: err,
    },
  });
});
