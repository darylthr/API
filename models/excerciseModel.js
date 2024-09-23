const db = require("../config/db");

const Excercise = {
  findExcerciseRespiratory: (callback) => {
    const sql = "SELECT * from exercises WHERE type = 'respiratorio'";
    db.query(sql, (err, results) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, results);
      }
    });
  },

  findExcerciseMuscular: (callback) => {
    const sql = "SELECT * from exercises WHERE type = 'muscular'";
    db.query(sql, (err, results) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, results);
      }
    });
  },

  findExcerciseMusical: (callback) => {
    const sql = "SELECT * from exercises WHERE type = 'musical'";
    db.query(sql, (err, results) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, results);
      }
    });
  },

  findQuestion: (callback) => {
    const sql = "SELECT * from questions";
    db.query(sql, (err, results) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, results);
      }
    });
  },

  insertAnswer: (userAnswer) => {
    return new Promise((resolve, reject) => {
        const sql = `INSERT INTO answers (idUser, idQuestion, answerValue) VALUES (?, ?, ?)`;
        const values = [userAnswer.idUser, userAnswer.idQuestion, userAnswer.answerValue];

        db.query(sql, values, (err, result) => {
            if (err) {
                return reject(err);
            }
            resolve(result.insertId);
        });
    });
  }
};

module.exports = Excercise;
