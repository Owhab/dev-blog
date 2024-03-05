const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();
const db_connection_url = process.env;
console.log("URL", db_connection_url);
mongoose
  .connect(db_connection_url)
  .then(() => console.log("Connection to MongoDB Connection Successful.."))
  .catch((error) => console.error(error));

app.listen("5000", () => {
  console.log("App is listening on port 5000");
});
