
const express = require("express");
const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect("mongodb://127.0.0.1:27017/web12");
};

const newschema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  last_name: { type: String, required: false },
  email: { type: String, required: false },
});

const apple = mongoose.model("container", newschema);

const app = express();

app.use(express.json());

app.post("/user", async (req, res) => {
  const data = await apple.create(req.body);
  return res.status(201).send({ data });
});

app.get("/user", async (req, res) => {
  const data = await apple.find().lean().exec();
  // .sort({id:1})
  return res.status(201).send({ data });
});

app.patch("/user/:id", async(req,res)=>{
  const data = await apple.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
  return res.send({data})
})

app.delete("/user/:id",async (req,res)=>{
  const data1 = await apple.findByIdAndDelete(req.params.id)
  return res.send({data1})
})

app.get("/user/:id",async(req,res)=>{
  const data = await apple.findById(req.params.id).lean().exec();
  return res.send({data})
})

app.listen(2345, async function () {
  await connect();
  console.log("port is running againnnnn");
});
