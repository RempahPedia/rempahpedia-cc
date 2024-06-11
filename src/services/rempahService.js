const db = require('../config/dbconnection');

async function getAllRempah(){
    const query = 'SELECT id,nama,deskripsi FROM rempah';
    const rows = await db.query(query);
    return rows;
}

module.exports = {
    getAllRempah,
};