const db = require('../config/db');

const User = {
    findByEmail: (email, callback) => {
        const sql = 'SELECT * FROM users WHERE email = ?';
        db.query(sql, [email], (err, result) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, result[0]);
            }
        });
    },
    create: (userData, callback) => {
        const sql = `INSERT INTO users (firstName, lastName, email, password, age, gender) 
                     VALUES (?, ?, ?, ?, ?, ?)`;
        
        const values = [
            userData.firstName, 
            userData.lastName, 
            userData.email, 
            userData.password, 
            userData.age, 
            userData.gender
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

module.exports = User;
