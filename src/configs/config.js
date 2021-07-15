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
  license: "Create by jack",
};

async function nodePackage(config) {
  const answers = await inquirer.prompt([
    {
      type: "text",
      name: "descriptionAPI",
      message: "Description of the api project you want to make?",
      default: "Api standard",
    },
    {
      type: "text",
      name: "runStartApi",
      message: "How do you want to run the API?",
      default: "nodemon server.js",
    },
  ]);
  baseConfig.description = answers.descriptionAPI;
  baseConfig.scripts.start = answers.runStartApi;
  return {
    ...config,
    ...baseConfig,
  };
}

module.exports = nodePackage;
