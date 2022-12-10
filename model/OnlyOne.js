const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let OnlyOne = new Schema(
  {
    answerUUID: {
      type: String,
    },

    questionnaireID: {
      type: String,
    },

    userID: {
      type: String,
    },
       
    isAnswer: {
      type: Boolean,
    },
  },
  {
    collection: "onlyones",
  }
);

module.exports = mongoose.model("OnlyOne", OnlyOne);
