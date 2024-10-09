const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "Backend/Config/config.env" });

const connectToMongo = async () => {
  console.log(process.env.NEW_MONGO_URI);
  await mongoose.connect(process.env.NEW_MONGO_URI);
  console.log("Connected to the database");
};

module.exports = connectToMongo;
