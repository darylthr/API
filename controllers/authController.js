const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

exports.register = (req, res) => {
    const { email, password, first_name, last_name, age, gender } = req.body;

    // Hash the password
    bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) return res.status(500).json({ error: 'Error hashing password' });

        // Create a new user
        const newUser = { email, password:hashedPassword, first_name, last_name, age, gender };
        console.log(newUser)
        User.create(newUser, (err, userId) => {
            if (err) return res.status(500).json({ error: 'Error registering user' });

            res.status(201).json({ message: 'User registered', userId });
        });
    });
};

exports.login = (req, res) => {
    const { email, password } = req.body;

    // Find user by email
    User.findByEmail(email, (err, user) => {
        if (err) return res.status(500).json({ error: 'Error finding user' });
        if (!user) return res.status(401).json({ error: 'Invalid email or password' });

        // Compare password
        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) return res.status(500).json({ error: 'Error comparing passwords' });
            if (!isMatch) return res.status(401).json({ error: 'Invalid email or password' });

            // Generate a token
            const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '2h' });

            res.status(200).json({ message: 'Logged in successfully', token });
        });
    });
};
