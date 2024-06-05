const express = require('express');
const app = express();
const db = require('./config/dbconnection');

// Import Routes
// const userRoutes = require('./routes/userRoutes');

const devName1 = process.env.DEV_NAME_1
const devName2 = process.env.DEV_NAME_2

// Middleware
app.use(express.json());


app.get('/', (req, res) => {
    // const result = pool.query("SELECT * FROM Rempah;");
    const result = "placeholder"
    res.send(`Hello World!, this app is developed by: ${devName1} and ${devName2} \n the result is ${result}`);
});

// query select example
app.get('/dbtest', async (req, res) => {
    try {
      const now = await db.query('SELECT * FROM rempah');
      res.send(`Current time: ${now[0].nama} and ${now[0].deskripsi}`);
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