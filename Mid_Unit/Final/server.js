const express = require("express");
const mongoose = require("mongoose");


const connect =()=>{
  return mongoose.connect("mongodb://127.0.0.1:27017/god")
};

const jobSchema = new mongoose.Schema(
    {
      job_name: { type: String },
      city:{type : String },
      skill :{type : String},
      wfh:{type : String},
      notice:{type : Number},
      rating:{type:Number},
      detail:{type:String},
    },
    {
      versionKey: false,
      timestamps: true,
    }
  );
  
  const Job = mongoose.model("job", jobSchema);

  
const app = express();
app.use(express.json());

  app.post("/job", async (req, res) => {
    const user = await Job.create(req.body);
    return res.status(201).send(user);
  });

  app.get("/job/:city/:skill", async (req, res) => {
    const user = await Job.find({ and : [{"city":"req.params.city"},{"skill":"req.params.skill"}]});
    return res.status(201).send(user);
  });



app.listen(3000, async function () {
    await connect();
    console.log("port is running");
  });
  