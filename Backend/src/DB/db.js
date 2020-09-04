const mongoose = require("mongoose");

const URI = "mongo db URI";

const connectDB = async function run() {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected correctly to server");
  } catch (err) {
    console.log(err.stack);
  }
};

module.exports = connectDB;
