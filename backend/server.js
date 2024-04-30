require("dotenv").config();

const path = require("path");

const express = require("express");

const cors = require("cors");

const conectDB = require("./config/database");

const mongoose = require("mongoose");

conectDB();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/", express.static(path.join(__dirname, "public")));

app.use("/", require("./routes/root"));
app.use("/short", require("./routes/short"));
app.use("/", require("./routes/urlid"));

app.all("*", (req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    return res.sendFile(path.join(__dirname, "views", "404.html"));
  } else if (req.accepts("json")) {
    return res.send({ " message": "404 not Found" });
  } else {
    return res.type(txt).send("404 not found");
  }
});

mongoose.connection.once("open", () => {
  console.log("connected to db");

  app.listen(PORT, () => {
    console.log(`server connected to ${PORT}`);
  });
});

mongoose.connection.on("error", (err) => {
  console.log(err);
  //   logEvent(
  //     `${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`,
  //     "mongoLog.log"
  //   );
});
