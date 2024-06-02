const express = require('express');
const app = express();

// Import Routes
// const userRoutes = require('./routes/userRoutes');

const devName1 = process.env.DEV_NAME_1
const devName2 = process.env.DEV_NAME_2

// Middleware
app.use(express.json());

app.get('/', (req, res) => {
    res.send(`Hello World!, this app is developed by: ${devName1} and ${devName2}`);
});

// Routes Middleware
// app.use('/api/users', userRoutes);

module.exports = app;