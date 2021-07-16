const path = require("path");
const inquirer = require("inquirer");
const path = require("path");

const fileServerJs = path.join(process.cwd(), "server.js");
const existingConfig = fs.existsSync(fileServerJs);
const baseConfig = {};
