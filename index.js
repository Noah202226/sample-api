const fs = require("fs/promises");
const express = require("express");
const cors = require("cors");
const _ = require("lodash");
const { v4: uuid } = require("uuid");

const app = express();

// Routes
app.get("/outfit", (req, res) => {
  const tops = ["Black", "White", "Orange", "Navy"];
  const jeans = ["Grey", "Dark Grey", "Black", "White"];
  const shoes = ["Red", "White", "Black"];

  res.json({
    top: _.sample(tops),
    jean: _.sample(jeans),
    shoe: _.sample(shoes),
  });
});

// Listen
app.listen(3000, () => console.log("Server running ..."));
