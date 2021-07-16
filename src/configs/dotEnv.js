const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");

async function buildDotEnv() {
  const filePath = path.join(process.cwd(), ".env");
  const fileJs = fs.existsSync(filePath);

  const answers = await inquirer.prompt([
    {
      type: "text",
      name: "nameDB",
      message: "what is the name of the database you want?",
      default: "user",
    },
  ]);
  let configDotEnv = `DATABASE_URL = 'mongodb://localhost/${answers.nameDB}'`;
  fs.writeFileSync(filePath, configDotEnv, "utf8");
}

module.exports = buildDotEnv;
