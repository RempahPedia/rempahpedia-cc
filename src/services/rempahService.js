const db = require('../config/dbconnection');

async function getAllRempah(){
    const query = 'SELECT id, nama, deskripsi, image_url FROM rempah';
    const rows = await db.query(query);
    return rows;
}

async function getRempah(id){
    const query = 'SELECT * FROM rempah WHERE id=$1';
    const rows = await db.query(query, [id]);
    return rows[0];
}

module.exports = {
    getAllRempah,
    getRempah
};