const express = require("express");
const Training = require("../models/Training");
const auth = require("../middleware/auth");

const router = express.Router();

router.post("/", auth, async (req, res) => {
  try {
    const training = new Training({
      ...req.body,
      userId: req.user._id,
    });
    await training.save();
    res.status(201).send(training);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/", auth, async (req, res) => {
  try {
    const trainings = await Training.find({ userId: req.user._id });
    res.send(trainings);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
