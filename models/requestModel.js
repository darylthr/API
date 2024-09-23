const db = require("../config/db");

const Request = {
    isAnswered: (userInfo) => {
        return new Promise((resolve, reject) => {
            const sql = `SELECT * FROM answers WHERE idUser = ?`;
            const values = [userInfo.idUser];
    
            db.query(sql, values, (err, result) => {
                if (err) {
                    return reject(err);
                }
                resolve(result);
            });
        });
    },
    markAsCompleted: (req) => {
        return new Promise((resolve, reject) => {
            const { idUser, idExercise } = req.body;

            const checkSql = `SELECT * FROM completed_exercises WHERE idUser = ? AND idExercise = ?`;
            const checkValues = [idUser, idExercise];

            db.query(checkSql, checkValues, (err, result) => {
                if (err) {
                    return reject(err);
                }

                if (result.length > 0) {
                    return resolve({ message: "Exercise already completed" });
                }

                const insertSql = `INSERT INTO completed_exercises (idUser, idExercise) VALUES (?, ?)`;
                const insertValues = [idUser, idExercise];

                db.query(insertSql, insertValues, (err, result) => {
                    if (err) {
                        return reject(err);
                    }
                    resolve({ message: "Exercise marked as completed" });
                });
            });
        });
    }
};

module.exports = Request;