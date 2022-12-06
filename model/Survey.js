const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Survey = new Schema(
  {
    userId: {type: String,},
    title: {type: String,},
    starter: {type: String,},
    ending: {type: String,},
    state:{type:String},
    questionList:{type:Array},
    createDate:{type:Date},
  
  },
  {
    collection: "surveys",
  }
);

module.exports = mongoose.model("Survey", Survey);
