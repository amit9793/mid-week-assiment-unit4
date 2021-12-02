const express = require("express");

const app = express();

app.use(express.json());

const user = require("./data.json");

app.get("/", (req, res) => {
  res.send({ user });
});

app.post("/", (req, res) => {
  const newuser = [...user, req.body]; //...User Se Data Array Me Store Hogi Otherwise Object Me Store Hogi
  res.send(newuser);
});

app.patch("/:email", (req, res) => {
  const new_user = user.map((user) => {
    if (req.params.email === user.email) {
      return req.body;
    }
    return user;
  });
  res.send(new_user);
});

app.delete("/:email", (req, res) => {
  const newuser = user.filter((user) => user.email !== req.params.email);
  res.send(newuser);
});

app.get("/:email", (req, res) => {
  const newuser = user.filter((user) => user.email === req.params.email);
  res.send(newuser);
});

app.listen(2345, function () {
  console.log("port is running again");
});
