const db = require('../config/dbconnection');

async function getAllRempah(){
    const query = 'SELECT id, nama, deskripsi, image_url FROM rempah';
    const rows = await db.query(query);
    return rows;
}

async function getRempah(id){
    const query = `SELECT r.id, r.nama, r.deskripsi, ARRAY_AGG(m.nama) AS manfaat, r.image_url 
                    FROM rempah AS r
                    JOIN rempah_manfaat AS rm ON r.id = rm.rempah_id
                    JOIN manfaat AS m ON m.id = rm.manfaat_id
                    WHERE r.id = $1
                    GROUP BY r.id, r.nama, r.deskripsi, r.image_url`;
    const rows = await db.query(query, [id]);
    return rows[0];
}

module.exports = {
    getAllRempah,
    getRempah
};