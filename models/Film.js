const mongoose = require("mongoose");
const schema = mongoose.Schema;
const filmSchema = new schema({
  name: String,
  image: String,
  description: String,
  rate: { type: String, default: "0" },
  release: String,
});
const Film = mongoose.model("film", filmSchema);

module.exports = Film;
