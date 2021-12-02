
const express = require("express");

const Rating = require("../models/rating_model");

const router = express.Router();


  router.post("", async (req, res) => {
    const user = await Rating.create(req.body);
    return res.status(201).send(user);
  });

  router.get("", async (req, res) => {
    const user = await Rating.find();
    return res.status(201).send(user);
  });

  
module.exports = router;
