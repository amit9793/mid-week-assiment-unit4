
const express = require("express");

const wfh = require("../models/wfh_model");

const router = express.Router();


  
  router.post("", async (req, res) => {
    const user = await work_from_home.create(req.body);
    return res.status(201).send(user);
  });

  router.get("", async (req, res) => {
    const user = await work_from_home.find();
    return res.status(201).send(user);
  });

  module.exports = router;