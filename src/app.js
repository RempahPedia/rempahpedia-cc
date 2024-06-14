const express = require('express');
const app = express();
const router = require("./routes");
const cookieParser = require('cookie-parser');
const verifyToken = require('./middleware/index');
require("dotenv").config();

// Import Routes
const jamuRoutes = require('./routes/jamuRoutes');
const rempahRoutes = require('./routes/rempahRoutes');
const penggunaRempahRoutes = require('./routes/penggunaRempahRoutes');

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(verifyToken);

// Routes 
app.use(router);
app.use('/api/jamu', jamuRoutes);
app.use('/api/rempah', rempahRoutes);
app.use('/api/prediction', penggunaRempahRoutes);

module.exports = app;