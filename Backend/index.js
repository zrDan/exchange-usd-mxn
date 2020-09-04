const express = require("express");
const morgan = require("morgan");
const routes = require("./src/routes/routes");
const cron = require("node-cron");
const updateReg = require("./src/scraping/scraping");
const mongoDB = require("./src/DB/db");
const app = express();

//Settings
app.set("port", process.env.PORT || 3000);

//Middleware
app.use(morgan("dev"));
app.use(express.json({ extended: false }));

//CORS
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept,content-type,application/json"
  );
  next();
});

//Routes
app.use(routes);

//Database
mongoDB();

cron.schedule("*/1 * * * *", () => {
  updateReg();
  console.log("running a task every minute");
});

//Server
app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});
