const express = require("express");

const app = express();
const port = process.env.APP_PORT || 8080;

var server = app.listen(port, () => {
  console.info("App started...");
});

// Now add a default GET handler
app.get("/items", (req, res, next) => {
  console.log('req', req);
  res.send(
    JSON.stringify({
        items: [
            {
                name: 'item1'
            },
            {
                name: 'item2'
            }
        ]
    })
  );
});
module.exports = server;
