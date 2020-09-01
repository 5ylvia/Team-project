//SET UP ------------------------------------
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const morgan = require("morgan");
dotenv.config();

//New Instance
const app = express();
const isProduction = process.env.MODE_ENV === "production";

const cors = require("cors");
app.use(cors());
app.use(express.json());

//Mongoose errors go away
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

mongoose.connection.on("open", (ref) => {
  console.log("Mongo.DB connected");
  app.listen(3000, () => {
    console.log("listening on port 3k");
  });
});

//ROUTING ------------------------------------
app.use(morgan("dev"));

app.use((req, res, next) => {
  console.log("Hey theres a " + req.method + "....cool");
  next();
});

//route to home page of http://localhost:3000/
app.get("/", (req, res) => {
  console.log(`${req.method} request received...`);
  res.send("server running.....Type `/portfolios` to get data");
});

//routes to the http://localhost:3000/portfolios
const portfolios = require("./routes/portfolios.js");
app.use("/portfolios", portfolios);

// app.get("/portfolio/:id", (req, res) => {
//   const id = req.params.id;
//   for (const portfolio of data) {
//     if (portfolio.id === id) {
//       res.send({ portfolio: portfolio });
//     }
//   }
// });

// app.get("/portfolio/:id/projects", (req, res) => {
//   const id = req.params.id;
//   console.log(id);
//   res.end();
// });

//ERRORS------------------------------------;
app.use((req, res, next) => {
  const error = new Error("Errors are happening, try again...");
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
