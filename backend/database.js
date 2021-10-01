//needed for connecting mongoDB
const mongoose = require("mongoose");

const mongoURI = process.env.MONGO_URL;

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI, () => {
      console.log("connected to mongo");
    });
  } catch (error) {
    handleError(error);
  }
};

module.exports = connectToMongo;
