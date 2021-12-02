const express = require("express");

const Company = require("../models/company_model");

const router = express.Router();


  router.post("", async (req, res) => {
    const user = await Company.create(req.body);
    return res.status(201).send(user);
  });

  router.get("", async (req, res) => {
    const user = await Company.find();
    return res.status(201).send(user);
  });

  module.exports = router;