const express = require("express");

const app = express();
const port = process.env.CLUSTER_SAMPLE_APP_PORT || 3000;

var server = app.listen(port, () => {
  console.info("App started...");
});

// Now add a default GET handler
app.get("/", (req, res, next) => {
  console.debug("Processing a GET request on /");
  res.send(
    '<html><body><div style="text-align: center;"><h2>HELLO WORLD!</h2></div></body></html>'
  );
});
module.exports = server;
