const express = require("express");

const City = require("../models/city_model");

const router = express.Router();

router.post("", async (req, res) => {
  const user = await City.create(req.body);
  return res.status(201).send(user);
});

router.get("", async (req, res) => {
  const user = await City.find();
  return res.status(201).send(user);
});

module.exports = router;