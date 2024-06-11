const db = require('../config/dbconnection');

async function getAllJamu(){
    const query = 'SELECT id, nama, penyakit FROM jamu';
    const rows = await db.query(query);
    return rows;
}

async function getJamu(id){
    const query = 'SELECT * FROM jamu WHERE id=$1';
    const rows = await db.query(query, [id]);
    return rows;
}

module.exports = {
    getAllJamu,
    getJamu
};