const express = require('express');
const app = express();
const router = require("./routes");
const cookieParser = require('cookie-parser');
require("dotenv").config();

// Import Routes
const jamuRoutes = require('./routes/jamuRoutes');
const rempahRoutes = require('./routes/rempahRoutes');

// Middleware
app.use(express.json());
app.use(cookieParser())
app.use(router);

// Routes Middleware
app.use('/api/jamu', jamuRoutes);
app.use('/api/rempah', rempahRoutes);

module.exports = app;