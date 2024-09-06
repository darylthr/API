const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const excerciseRoutes = require('./routes/excerciseRoutes');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', authRoutes);
app.use('/excercise', excerciseRoutes )

module.exports = app;
