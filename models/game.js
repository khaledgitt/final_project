const mongoose = require("mongoose");
const schema = mongoose.Schema;
const gameSchema = new schema({
  name: String,
  image: String,
  description: String,
  rate: { type: String, default: "0" },
  release: String,
});
const Game = mongoose.model("game", gameSchema);

module.exports = Game;
