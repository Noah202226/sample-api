const fs = require("fs/promises");
const express = require("express");
const cors = require("cors");
const _ = require("lodash");
const { v4: uuid } = require("uuid");

const app = express();

// Middlewares
app.use(express.json());

// const whitelist = [
//   "https://sample-api-omega.vercel.app/",
//   "http://127.0.0.1:3000",
// ];
// const corsOptions = {
//   origin: (origin, callback) => {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not Allowed by CORS"));
//     }
//   },
//   optionsSuccess: 200,
// };
// app.use(cors(corsOptions));

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
