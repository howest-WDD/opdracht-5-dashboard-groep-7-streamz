const path = require("path");
(module.exports = {
  //...
  watch: true,
}),
  (module.exports = {
    mode: "production",
    entry: ["./js/test.js", "./js/clock.js", "./js/chartgebruikers.js", "./js/chartkijkuren.js", "./js/chartsubs.js", "./node_modules/chart.js/dist/chart.umd.js", "./js/dbdropdown.js"],
    output: {
      filename: "main.js",
      path: path.resolve(__dirname, "dist"),
    },
  });

