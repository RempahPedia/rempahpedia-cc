const express = require('express');
const app = express();
const db = require('./config/dbconnection');

// Import Routes
const jamuRoutes = require('./routes/jamuRoutes');
const rempahRoutes = require('./routes/rempahRoutes');

// Middleware
app.use(express.json());

// Routes Middleware
app.use('/api/jamu', jamuRoutes);
app.use('/api/rempah', rempahRoutes);

module.exports = app;