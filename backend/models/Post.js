const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    username: {
      type: mongoose.Schema.Types.String,
      ref: "User",
    },
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: false,
    },
    categories: {
      type: Array,
      required: false,
      default: "Lifestyle",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
