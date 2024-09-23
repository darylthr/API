const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const excerciseRoutes = require('./routes/excerciseRoutes');
const requestRoutes = require('./routes/requestRoutes');
const cors = require('cors');
const jwt = require('jsonwebtoken');

// Load environment variables
dotenv.config();

const app = express();

app.use(cors());

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const authenticateJWT = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]; // Assumes token is sent as "Bearer token"

    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err) return res.sendStatus(403); // Forbidden
            req.user = user; // Attach user info to request
            next();
        });
    } else {
        res.sendStatus(401); // Unauthorized
    }
};

// Routes
app.use('/api/auth', authRoutes);
app.use('/excercise', excerciseRoutes);
app.use('/request', requestRoutes);

module.exports = app;
