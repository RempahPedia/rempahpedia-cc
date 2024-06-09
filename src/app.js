const express = require('express');
const app = express();
const db = require('./config/dbconnection');
const cookieParser = require('cookie-parser');
const router = require("./routes");
require("dotenv").config();

// Import Routes
// const userRoutes = require('./routes/userRoutes');

const devName1 = process.env.DEV_NAME_1
const devName2 = process.env.DEV_NAME_2

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(router);


app.get('/', (req, res) => {
    // const result = pool.query("SELECT * FROM Rempah;");
    const result = "placeholder"
    res.send(`Hello World!, this app is developed by: ${devName1} and ${devName2} \n the result is ${result}`);
});

// query select example
app.get('/dbtest', async (req, res) => {
    try {
      const result = await db.query('SELECT * FROM rempah');
      res.send(`Current time: ${result[2].nama} and ${result[2].deskripsi}`);
    } catch (error) {
        console.log(error)
    }
});

// query insert example
app.get('/dbtestkirim', async (req, res) => {
    try {
      const now = await db.query('INSERT INTO test_table VALUES ($1, $2)', ['test web', 'berhasil cuy']);
      res.send(`SUKSES`);
    } catch (error) {
        console.log(error)
    }
});

// Routes Middleware
// app.use('/api/users', userRoutes);

module.exports = app;