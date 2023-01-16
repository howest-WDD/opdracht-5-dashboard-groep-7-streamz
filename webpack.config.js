const path = require("path");
(module.exports = {
  //...
  watch: true,
}),
  (module.exports = {
    mode: "production",
    entry: ["./js/test.js", "./js/clock.js","./js/addnav.js","./js/startscherm.js","./js/chartgebruikers.js", "./js/chartkijkuren.js", "./js/chartsubs.js", "./node_modules/chart.js/dist/chart.umd.js", "./js/dbdropdown.js", "./js/belgium.js", "./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js", "./js/formvalid.js", "./js/formavatar.js", "./js/table.js"],
    output: {
      filename: "main.js",
      path: path.resolve(__dirname, "dist"),
    },
  });
