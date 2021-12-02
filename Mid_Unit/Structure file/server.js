const express = require("express");
//const mongoose = require("mongoose");//use can remove

const connect = require("./src/configs/db");

// const City = require("./src/models/city_model");
// const Company = require("./src/models/company_model");
// const Job = require("./src/models/job_model");
// const Skill = require("./src/models/skill_model");
// const work_from_home = require("./src/models/wfh_model");
// const Rating = require("./src/models/rating_model");

const cityControler = require("./src/controllers/city.controler");
const companyControler = require("./src/controllers/company.controler");
const jobControler = require("./src/controllers/job.controler");
const ratingControler = require("./src/controllers/rating.controlers");
const skillControler = require("./src/controllers/skill.controler");
const wfhControler = require("./src/controllers/wfh.controlers");

const app = express();
app.use(express.json());

app.use("/city", cityControler);////error aayega app is not defined

app.use("/company", companyControler);

app.use("/job", jobControler);

app.use("/rating", ratingControler);

app.use("/skill", skillControler);

app.use("/wfh", wfhControler);

app.listen(3000, async function () {
  await connect();
  console.log("port is again  dubararunning");
});
