const inquirer = require("inquirer");
const path = require("path");

const baseConfig = {
  version: "1.0.1",
  description: "",
  main: "index.js",
  scripts: {
    start: "nodemon server.js",
    test: 'echo "Error: no test specified" && exit 1',
  },
  keywords: [],
  author: "",
  license: "ISC",
  dependencies: {},
  devDependencies: {},
};

async function nodePackage(config) {
  const answers = await inquirer.prompt([
    {
      type: "text",
      name: "descriptionAPI",
      message: "Description of the api project you want to make?",
      default: "Api standard",
    },
  ]);
  baseConfig.description = answers.descriptionAPI;
  return {
    ...config,
    ...baseConfig,
  };
}

module.exports = nodePackage;
