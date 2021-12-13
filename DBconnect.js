const mongoose = require("mongoose");

const DBconnect = async () => {
  try {
    let result = await mongoose.connect(
      "mongodb+srv://khalid:123456khalid@cluster0.3grmj.mongodb.net/gameshouse?retryWrites=true&w=majority"
    );
    console.log("database is connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = DBconnect;
