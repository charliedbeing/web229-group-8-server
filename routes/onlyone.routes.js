const express = require("express");
const app = express();

const onlyOneRouter = express.Router();
let OnlyOne = require("../model/OnlyOne");

// Add Onlyone initialization
onlyOneRouter.route("/onlyone").post((req, res, next) => {
  OnlyOne.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});



// Get  OnlyOne
onlyOneRouter.route("/onlyone/:uuid").get((req, res) => {
  OnlyOne.find({answerUUID:{"$eq":req.params.uuid}}, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Update OnlyOne
onlyOneRouter.route("/onlyone/:id").put((req, res, next) => {
  OnlyOne.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error);
        console.log(error);
      } else {
        res.json(data);
        console.log("OnlyOne updated successfully!");
      }
    }
  );
});


module.exports = onlyOneRouter;
