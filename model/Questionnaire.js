const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Option = new Schema({key:Number,value:String});

const Question =new Schema({
    title:String,
    type:Number,
    options:[Option],
    answer:String|Number
})

const CollectionData= new Schema({
  version:String,
  endDate:Date,
  actived:Boolean,
  data:[Question]  
});

let Qustionnaire = new Schema(
  {
    userId: {type: String,},
    title: {type: String,},
    starter: {type: String,},
    ending: {type: String,},
    state:{type:String},
    questionList:[Question],
    createDate:{type:Date},
    expireDate:{type:Date},
    collectionData:[CollectionData]

  },
  {
    collection: "questionnaires",
  }
);

module.exports = mongoose.model("Qustionnaire", Qustionnaire);
