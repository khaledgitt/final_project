const express = require("express");

const filmRouter = express.Router();
const Film = require("../models/Film");
//POst a game

filmRouter.post("/", async (req, res) => {
  try {
    const newFilm = new Film(req.body);
    let result = await newFilm.save();
    res.send({ film: result, msg: "film created" });
  } catch (error) {
    console.log(error);
  }
});
//get  a game by id
filmRouter.get("/:id", async (req, res) => {
  try {
    const result = await Film.findOne({ _id: req.params.id });
    res.send({ film: result, msg: "film" });
  } catch (error) {
    console.log(error);
  }
});

// get all films
filmRouter.get("/", async (req, res) => {
  try {
    let result = await Film.find();
    res.send({ film: result, msg: "all Films" });
  } catch (error) {
    console.log(error);
  }
});

// update game
filmRouter.put("/:id", async (req, res) => {
  try {
    let result = await Film.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      { $set: { ...req.body } }
    );
    res.send({ newFilm: result, msg: "film updated" });
  } catch (error) {
    console.log(error);
  }
});

//delete game

filmRouter.delete("/:id", async (req, res) => {
  try {
    let result = await Film.findOneAndRemove({
      _id: req.params.id,
    });
    res.send({ msg: "film deleted" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = filmRouter;
