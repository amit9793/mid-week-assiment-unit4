const express = require("express");

const app = express();

app.use(express.json());
const user = require("./MOCK_DATA.json");




app.get("/", (req, res) => {
  res.send(user);
});



app.post("/books", (req, res) => {
  const newuser = [...user, req.body];
  res.send(newuser);
});




app.get("/books/:author", (req, res) => {
  const newuser = user.filter((user) => user.author === req.params.author);
  res.send(newuser);
});




app.patch("/book/:id", (req, res) => {
  const newuser = user.map((user) => {
    if (+req.params.id === user.id) {
      if (req?.body?.year) user.year = req.body.year;
    }
    return user;
  });
  res.send(newuser);
});




app.delete("/books/:id", (req, res) => {
  const newuser = user.filter((user) => user.id !== +req.params.id);
  res.send(newuser);
});




app.listen(2345, function () {
  console.log("port are running");
});
