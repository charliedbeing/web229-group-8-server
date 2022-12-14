const express = require("express");
const app = express();

const questionnaireRoute = express.Router();
const authorize = require('../middlewares/auth')
let Questionnaire = require("../model/Questionnaire");

// Add Questionnaire
questionnaireRoute.route("/add-questionnaire").post(authorize,(req, res, next) => {
  Questionnaire.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Get all Questionnaire
questionnaireRoute.route("/questionnaires").get((req, res) => {
  Questionnaire.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

//questionnairesPublic
questionnaireRoute.route("/questionnairesPublic").get((req, res) => {
  Questionnaire.find({state:{"$lt": 3}},(error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Get all Questionnaire by userId 
questionnaireRoute.route("/questionnaires/:userId").get((req, res) => {
  Questionnaire.find({userId:{"$eq":req.params.userId}},(error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});


questionnaireRoute.route("/questionnaire/:id").get((req, res) => {
  Questionnaire.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// update questionnaire 
questionnaireRoute.route("/questionnaire/:id").put((req, res,next) => {
 
  Questionnaire.findByIdAndUpdate(req.params.id,
    {
      $set:req.body,
  }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// update questionnaire 
questionnaireRoute.route("/questionnaire/:id").delete(authorize,(req, res,next) => {
 
  Questionnaire.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });

});

// read survey 
questionnaireRoute.route("/read-survey/:id").get((req, res) => {
  Survey.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Update Survey
questionnaireRoute.route("/update-survey/:id").put(authorize,(req, res, next) => {
  Survey.findByIdAndUpdate(
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
        console.log("Survey updated successfully!");
      }
    }
  );
});

// Delete survey  
questionnaireRoute.route("/delete-survey/:id").delete(authorize,(req, res, next) => {
  Survey.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

module.exports = questionnaireRoute;
