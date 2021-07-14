const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");

const existingConfig = fs.existsSync("kage.json");

console.log(process.cwd());

function buildConfig() {
  inquirer
    .prompt([
      {
        type: "text",
        name: "name",
        message: "What is the name of the project api?",
        default: path.basename(process.cwd()),
      },
      {
        type: "list",
        name: "typeAPI",
        message: "Do you want the default endpoint?",
        choices: ["only-express", "standard-endpoint"],
      },
      {
        type: "list",
        name: "typeDB",
        message: "What database will you use?",
        choices: ["MongoDB", "Mysql"],
      },
    ])
    .then((answers) => {
      console.log(answers);
    });
}

// for check file.js
if (existingConfig) {
  inquirer
    .prompt([
      {
        type: "confirm",
        name: "overwrite",
        message:
          "package.json already exists! Whould you like to overwrite it?",
        default: path.basename(process.cwd()),
      },
    ])
    .then((answers) => {
      if (answers.overwrite) {
        buildConfig();
      } else {
        console.log("Good BY Mr 👋");
      }
    });
} else {
  buildConfig();
}
