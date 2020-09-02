//SET UP ------------------------------------
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");

//New Instance
const app = express();
const isProduction = process.env.MODE_ENV === "production";

app.use(cors());

app.use(express.json());
dotenv.config();

//Mongoose errors go away
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

const projects = require("./routes/projects");
app.use("/projects", projects);

//ERRORS------------------------------------
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
