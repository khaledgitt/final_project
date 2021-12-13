const express = require("express");

const gameRouter = express.Router();
const Game = require("../models/game");
//POst a game

gameRouter.post("/", async (req, res) => {
  try {
    const newGame = new Game(req.body);
    let result = await newGame.save();
    res.send({ game: result, msg: "game created" });
  } catch (error) {
    console.log(error);
  }
});
//get  a game by id
gameRouter.get("/:id", async (req, res) => {
  try {
    const result = await Game.findOne({ _id: req.params.id });
    res.send({ game: result, msg: "game" });
  } catch (error) {
    console.log(error);
  }
});

// get all games
gameRouter.get("/", async (req, res) => {
  try {
    let result = await Game.find();
    res.send({ game: result, msg: "all games" });
  } catch (error) {
    console.log(error);
  }
});

// update game
gameRouter.put("/:id", async (req, res) => {
  try {
    let result = await Game.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      { $set: { ...req.body } }
    );
    res.send({ newGame: result, msg: "game updated" });
  } catch (error) {
    console.log(error);
  }
});

//delete game

gameRouter.delete("/:id", async (req, res) => {
  try {
    let result = await Game.findOneAndRemove({
      _id: req.params.id,
    });
    res.send({ msg: "game deleted" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = gameRouter;
