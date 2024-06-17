const express = require('express');
const app = express();
const router = require("./routes");
const cookieParser = require('cookie-parser');
const verifyAndRefreshToken = require('./middleware/index');
require("dotenv").config();
const protectedRoutes = require('./routes/index');

// Import Routes
const jamuRoutes = require('./routes/jamuRoutes');
const rempahRoutes = require('./routes/rempahRoutes');
const penggunaRempahRoutes = require('./routes/penggunaRempahRoutes');

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(verifyAndRefreshToken.verifyAndRefreshToken);

// Routes 
app.use(router);
app.use('/api/jamu', jamuRoutes);
app.use('/api/rempah', rempahRoutes);
app.use('/api/prediction', penggunaRempahRoutes);
app.use('/api', protectedRoutes);

module.exports = app;