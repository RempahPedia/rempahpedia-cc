const express = require('express');
const app = express();
const router = require("./routes");
const cookieParser = require('cookie-parser');
require("dotenv").config();



const devName1 = process.env.DEV_NAME_1
const devName2 = process.env.DEV_NAME_2

// Middleware
app.use(express.json());
app.use(cookieParser())
app.use(router);

app.get('/', (req, res) => {
    res.send(`Hello World!, this app is developed by: ${devName1} and ${devName2}`);
});


module.exports = app;