const Excercise = require("../models/excerciseModel");

exports.respiratory = (req, res) => {
  Excercise.findExcerciseRespiratory((err, question) => {
    if (err) {
      return res.status(500).json({ error: "Error Fetching Excercises" });
    }
    return res.json(question);
  });
};

exports.muscular = (req, res) => {
  Excercise.findExcerciseMuscular((err, question) => {
    if (err) {
      return res.status(500).json({ error: "Error Fetching Excercises" });
    }
    return res.json(question);
  });
};

exports.musical = (req, res) => {
  Excercise.findExcerciseMusical((err, question) => {
    if (err) {
      return res.status(500).json({ error: "Error Fetching Excercises" });
    }
    return res.json(question);
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

exports.insertAnswer = async (req, res) => {
  const answers = req.body;
  const results = [];

  try {
      await Promise.all(answers.map(async (answer) => {
          const { idQuestion, answerValue } = answer;
          const idUser = req.user.userId;

          const answerID = await Excercise.insertAnswer({ idUser, idQuestion, answerValue });
          results.push(answerID);
      }));

      res.status(200).json({ message: 'Answers inserted successfully', results });
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error inserting answers' });
  }
};
