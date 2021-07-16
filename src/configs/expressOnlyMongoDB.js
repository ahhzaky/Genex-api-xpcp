const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");

const fileServerJs = path.join(process.cwd(), "server.js");
// const existingConfigJs = fs.existsSync(fileServerJs);
const baseServerJs = ` // Version 1 by jack
require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");

//connect to db
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Connected to Database"));

app.use(express.json());

const subscriberRouter = require("./routes/subscribers");
app.use("/subscribers", subscriberRouter);

// listen port
app.listen(3000, () => console.log("Server Run on: http://localhost:3000/"));
`;

async function buildOnlyMongoDb() {
  console.log("Only");
  fs.writeFileSync(fileServerJs, baseServerJs, "utf8");
}

module.exports = buildOnlyMongoDb;
