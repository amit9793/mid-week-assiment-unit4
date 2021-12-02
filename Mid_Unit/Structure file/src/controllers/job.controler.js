const express = require("express");

const Job = require("../models/job_model");

const router = express.Router();


  router.post("", async (req, res) => {
    const user = await Job.create(req.body);
    return res.status(201).send(user);
  });

  router.get("", async (req, res) => {
    const user = await Job.find().populate({
        path: "skill_ids",
        select: "skill_name",
      })
      .populate({
        
        path:"city_ids",
        select:"city_name",
      })
    
    return res.status(201).send(user);
  });

  router.get("/:wfh", async (req, res) => {
    const user = await Job.find();
    console.log(user);
    
    return res.status(201).send(user);
  });

  module.exports = router;

  