const db = require('../config/dbconnection');

async function getAllJamu(){
    const query = 'SELECT * FROM jamu';
    const rows = await db.query(query);
    return rows;
}

module.exports = {
    getAllJamu,
};