
const express = require("express");

const Skill = require("../models/skill_model");

const router = express.Router();

  router.post("", async (req, res) => {
    const user = await Skill.create(req.body);
    return res.status(201).send(user);
  });

  router.get("", async (req, res) => {
    const user = await Skill.find();
    return res.status(201).send(user);
  });

  module.exports = router;