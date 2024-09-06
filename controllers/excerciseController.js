const Excercise = require("../models/excerciseModel");

exports.getExcercises = (req, res) => {
  Excercise.findExcercise((err, excercises) => {
    if (err) {
      return res.status(500).json({ error: "Error Fetching Excercises" });
    }
    return res.json(excercises);
  });
};

exports.getQuestions = (req, res) => {
  Excercise.findQuestion((err, question) => {
    if (err) {
      return res.status(500).json({ error: "Error Fetching Excercises" });
    }
    return res.json(question);
  });
};

exports.insertAnswer = (req, res) => {
  const {
    question,
    question1,
    question2,
    question3,
    question4,
    question5,
    question6,
    id_user,
  } = req.body;

  const answer = {
    question,
    question1,
    question2,
    question3,
    question4,
    question5,
    question6,
    id_user,
  };
  Excercise.insertAnswer(answer, (err, answerID) => {
    if (err) return res.status(500).json({ error: "Error" });

    res.status(201).json({ message: "Answer Registered", answerID });
  });
};
