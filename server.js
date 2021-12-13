const express = require("express");
const app = express();
const DBconnect = require("./DBconnect");
const cors = require("cors");
DBconnect();
app.use(express.json());
app.use(cors());
app.use("/game", require("./routes/game"));
app.use("/film", require("./routes/film"));

app.listen(5000, (err) =>
  err ? console.log(err) : console.log("serveur is running")
);
