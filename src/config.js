const path = require("path");

const nodeExpress = {
  name: path.basename(process.cwd()),
  version: "1.0.0",
  description: "",
  main: "index.js",
  scripts: {
    test: 'echo "Error: no test specified" && exit 1',
  },
  keywords: [],
  author: "",
  license: "ISC",
};

module.exports = {
  nodeExpress,
};
