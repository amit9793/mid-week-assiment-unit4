const express = require("express");

const connect = require("./configs/db");

const jobscontroller = require("./controllers/job.controller");

//const job = require('./models/job.models')

const app = express();
app.use(express.json());

app.use("/jobs", jobscontroller);

const jobschema = new mongoose.Schema(
  {
    job_name: { type: String, required: true },
    company_name: { type: String, required: true },
    city: { type: String, required: true },
    avability: { type: String, required: true },
    skillsrequired: { type: String, required: true },
    noticeperiod: { type: Number, required: true },
    rating: { type: Number, required: true },
    openjobs: { type: Number, required: true },
  },
  {
    versionkey: false,
    timestamps: true,
  }
);

const express = require("express");

const router = express.Router();

const job = require("../models/job.models");
//---- post--------------------------------
router.post("", async function (req, res) {
  const jobs = await job.create(req.body);

  return res.status(201).send(jobs);
});

// get api for all jobs

router.get("", async function (req, res) {
  const jobs = await job.find().lean().exec();

  return res.status(200).send(jobs);
});

// get api for particular city------------------------

router.get("/city", async function (req, res) {
  const jobs = await job.find({ city: "patna" }).lean().exec();

  return res.status(200).send(jobs);
});
//----------------------------------------------------------------

router.get("/cityskill", async function (req, res) {
  const jobs = await job
    .find({ $and: [{ city: "patna" }, { skillsrequired: "java" }] })
    .lean()
    .exec();
  return res.status(200).send(jobs);
});
//----- get api for particular skills------------------------

router.get("/skillsrequired", async function (req, res) {
  const jobs = await job.find({ skillsrequired: "java" }).lean().exec();

  return res.status(200).send(jobs);
});

//------ get api for avaibility work from home-------

router.get("/availibility", async function (req, res) {
  const jobs = await job.find({ avability: "yes" }).lean().exec();

  return res.status(200).send(jobs);
});
//----- get api for rating--------------------------------

router.get("/rating", async function (req, res) {
  const jobs = await job
    .find({ rating: { $gt: 7 } })
    .sort({ rating: -1 })
    .lean()
    .exec();

  return res.status(200).send(jobs);
});
//------get api for company details--------------------------------

router.get("/companyDetails", async function (req, res) {
  const jobs = await job.find({ company_name: "masai" }).lean().exec();

  return res.status(200).send(jobs);
});

//----- get api for notice period of 2 month--------------------------------

router.get("/noticePeriod", async function (req, res) {
  const jobs = await job
    .find({ notice_period: { $eq: 2 } })
    .lean()
    .exec();

  return res.status(200).send(jobs);
});
//------- get api for most open job--------------------------------

router.get("/openjobs", async function (req, res) {
  const jobs = await job.find().sort({ openjobs: -1 }).limit(1).lean().exec();

  return res.status(200).send(jobs);
});

module.exports = router;

const Job = mongoose.model("user", jobschema);

module.exports = Job;

app.listen(3011, async function () {
  await connect();
  console.log("listening on port 3011");
});
