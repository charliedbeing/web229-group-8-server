const express = require("express");
const app = express();

const questionnaireRoute = express.Router();
let Questionnaire = require("../model/Questionnaire");

// Add Questionnaire
questionnaireRoute.route("/add-questionnaire").post((req, res, next) => {
  Questionnaire.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Get all Book
questionnaireRoute.route("/questionnaires").get((req, res) => {
  Questionnaire.find((error, data) => {
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

// update questionnaire state
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

// update questionnaire state
questionnaireRoute.route("/questionnaire/:id").delete((req, res,next) => {
 
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

// Get Book
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
questionnaireRoute.route("/update-survey/:id").put((req, res, next) => {
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

// Delete Book
questionnaireRoute.route("/delete-survey/:id").delete((req, res, next) => {
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
