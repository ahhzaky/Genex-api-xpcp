const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const child_process = require("child_process");

const nodePackage = require("./configs/config");
const packagePath = path.join(process.cwd(), "kage.json");
const existingConfig = fs.existsSync(packagePath);

console.log(process.cwd());

async function buildConfig() {
  const answers = await inquirer.prompt([
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
  ]);
  let config = {
    name: answers.name,
  };
  // .then((answers) => {
  //   console.log(answers);
  // });
  config.name = answers.name;
  console.log(answers);
  switch (answers.typeDB) {
    case "MongoDB":
      config = await nodePackage(config);
      console.log("this is package.json => \n", config);
      const log_install_mongoose = child_process.execSync(
        "npm install express mongoose",
        {
          stdio: [0, 1, 2],
        }
      );
      break;

    //   case "Mysql":
    //     console.log("This Mysql");
    //     break;
    default:
      break;
  }
  fs.writeFileSync(packagePath, JSON.stringify(config, null, 2), "utf8");
  console.log("All Done 👍👍");
  process.exit(0);
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
