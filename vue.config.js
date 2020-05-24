const path = require("path");

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.join(__dirname, "src/GUI"),
        "@@": path.join(__dirname, "src/GUI/components")
      }
    }
  }
};
