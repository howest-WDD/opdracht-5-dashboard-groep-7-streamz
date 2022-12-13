const path = require("path");
module.exports = {
  //...
  watch: true, 
},
module.exports = {
  mode: "production",
  entry: ["./js/test.js","./js/clock.js"],
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};
