const express = require('express');
const app = express();

// Import Routes
// const userRoutes = require('./routes/userRoutes');

// Middleware
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Routes Middleware
// app.use('/api/users', userRoutes);

module.exports = app;