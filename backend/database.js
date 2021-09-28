//needed for connecting mongoDB
const mongoose = require("mongoose");

const mongoURI = process.env.MONGO_URL;

const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("connected to mongo");
  });
};

module.exports = connectToMongo;
