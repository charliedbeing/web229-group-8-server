const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Book = new Schema(
  {
    name: {
      type: String,
    },
    price: {},
    description: {
      type: String,
    },
  },
  {
    collection: "books",
  }
);

module.exports = mongoose.model("Book", Book);
