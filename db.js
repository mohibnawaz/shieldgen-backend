const mongoose = require("mongoose");

async function connectToDatabase() {
  await mongoose.connect("mongodb+srv://iqlipse22:Uprvmz9ikr@cluster0.xkqjppx.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Database connected");
}

module.exports = connectToDatabase;
