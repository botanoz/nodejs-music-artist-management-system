const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const music = require("./models/musicModel");
const musicRouter = require("./routes/musicRoute");
const artistRouter = require("./routes/artistRoute");
const tokenControl = require("./middlleware/auth");

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB Connected Log"))
.catch((error) => console.log(error));

app.use(cors({
  origin: '*'
}));

app.use("/music", musicRouter);
app.use("/artist", artistRouter);

app.listen(9000, () => {
  console.log("Server is running on port 9000");
});
