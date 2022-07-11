const fs = require("fs");
const express = require("express");
const app = express();
let args = process.argv.slice(2);
if (args.length === 2 && fs.existsSync(args[0]) && fs.existsSync(args[1])) {
  let rawdata = fs.readFileSync(args[1]);
  let data = JSON.parse(rawdata);
  console.log(data);
  app.listen(3000, () => {
    console.log("Application started and Listening on port 3000");
  });
  app.get("/", function (request, response) {
    response.render(args[0], { data: data });
  });
} else {
  console.log("Not valid input.");
}
