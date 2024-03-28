const express = require("express");
const dotenv = require("dotenv");

const app = express();

app.listen("5000", () => {
  console.log("App is listening on port 5000");
});
