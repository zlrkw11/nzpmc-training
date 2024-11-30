require("dotenv").config();
const express = require("express");
const app = express();

const jwt = require("jsonwebtoken");
app.use(express.json());

const posts = [
  { username: "zl", title: "post 1" },
  { username: "as", title: "post 2" },
];

app.get("/posts", (req, res) => {
  res.json(posts);
});

app.post("/login", (req, res) => {
  // authenticate user
  const username = req.body.username;
  const user = { name: username };
  const acessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
  res.json({ accessToken: acessToken });
});

app.listen(3001, () => {
  console.log("server running on port 3001");
});
