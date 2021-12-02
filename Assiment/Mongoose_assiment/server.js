const express = require("express");
const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect("mongodb://127.0.0.1:27017/web11");
};

const newschema = new mongoose.Schema({
  id: { type: Number, required: true },
  movies_name: { type: String, required: true },
  movies_genre: { type: String, required: true },
  production_year: { type: Number, required: true },
  budget: { type: Number, required: true },
});

const apple = mongoose.model("assiment", newschema);
const app = express();
app.use(express.json());

app.post("/user", async (req, res) => {
  const data = await apple.create(req.body);
  return res.status(201).send({ data });
});

app.get("/user/:id", async (req, res) => {
  const data = await apple.find({ id : req.params.id }).lean().exec();
  if (data.length > 0) {
    return res.status(201).send(data);
  } else {
    return res.status(201).send("This Data Is Not Present in My Data Base");
  }
});

app.get("/user/:movies_name", async (req, res) => {
  const data = await apple.find({ movies_name:{$ne:"req.params.movies_name"}  }).lean().exec();
  if (data.length > 0) {
    return res.status(201).send(data);
  } else {
    return res.status(201).send("This Data Is Not Present in My Data Base");
  }
});

app.get("/user/:production_year", async (req, res) => {
  const data = await apple.find({$or:[{budget:{$gt:req.params.production_year}},{budget:req.params.production_year}]}).lean().exec();
  if (data.length > 0) {
    return res.status(201).send(data);
  } else {
    return res.status(201).send("This Data Is Not Present in My Data Base");
  }
});





app.listen(2345, async function () {
  await connect();
  console.log("port is running");
});
