
const express = require("express");
const Users = require("./models/user-model");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ msg: "users" });
});

app.get("/api/v1/users", async (req, res) => {
  const users = await Users.find({});
  res.json(users);
});

app.post("/api/v1/users", async (req, res) => {
  const user = new Users({ name: req.body.name });
  const savedUser = await user.save();
  res.json(savedUser);
});

module.exports = app;