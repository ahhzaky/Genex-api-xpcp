const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const child_process = require("child_process");

const nodePackage = require("./configs/config");
const packagePath = path.join(process.cwd(), "kage.json");
const buildDotEnv = require("./configs/dotEnv");
const buildOnlyMongoDb = require("./configs/expressOnlyMongoDB");
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
  ]);
  let config = {
    name: answers.name,
  };
  // .then((answers) => {
  //   console.log(answers);
  // });
  config.name = answers.name;
  config = await nodePackage(config);

  console.log("this is package.json => \n", config);

  const log_install_mongoose = child_process.execSync(
    "npm install express mongoose",
    {
      stdio: [0, 1, 2],
    }
  );
  const log_install_save = child_process.execSync(
    "npm i --save-dev dotenv nodemon",
    {
      stdio: [0, 1, 2],
    }
  );

  fs.writeFileSync(packagePath, JSON.stringify(config, null, 2), "utf8");
  console.log(`
        Runinng api 🔥🔥: npm run start
        Running endpoint 💨💨: http://localhost:3000/
        All Done 👍👍
      `);
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
        buildDotEnv();
        buildOnlyMongoDb();
        //close

        // process.exit(0);
      } else {
        console.log("Good BY Mr 👋");
      }
    });
} else {
  buildConfig();
}
