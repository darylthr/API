const db = require('../config/db');

const User = {
    findByEmail: (email, callback) => {
        const sql = 'SELECT * FROM user WHERE email = ?';
        db.query(sql, [email], (err, result) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, result[0]);
            }
        });
    },
    create: (userData, callback) => {
        const sql = `INSERT INTO user (first_name, last_name, email, password, age, gender) 
                     VALUES (?, ?, ?, ?, ?, ?)`;
        
        const values = [
            userData.first_name, 
            userData.last_name, 
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
