const db = require("../config/db");

const Excercise = {
  findExcercise: (callback) => {
    const sql = "SELECT * from excercise";
    db.query(sql, (err, results) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, results[0]);
      }
    });
  },

  findQuestion: (callback) => {
    const sql = "SELECT * from question";
    db.query(sql, (err, results) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, results[0]);
      }
    });
  },

  insertAnswer: (userAnswer, callback) => {
        const sql = `INSERT INTO question (question, question1, question2, question3, question4, question5, question6, id_user) 
                     VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
        
        const values = [
            userAnswer.question, 
            userAnswer.question1, 
            userAnswer.question2, 
            userAnswer.question3, 
            userAnswer.question4, 
            userAnswer.question5,
            userAnswer.question6,
            userAnswer.id_user,
        ];
    
        db.query(sql, values, (err, result) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, result.insertId);
            }
        });
    }
};

module.exports = Excercise;
