const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Survey = new Schema(
  {
    userId: {type: String,},
    title: {type: String,},
    starter: {type: String,},
    ender: {type: String,},
    state:{type:String},
    questionList:{type:Array},
    createDate:{type:String}
  },
  {
    collection: "surveys",
  }
);

module.exports = mongoose.model("Survey", Survey);
