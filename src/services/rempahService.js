const db = require('../config/dbconnection');

async function getAllRempah(){
    const query = 'SELECT id, nama, deskripsi, image_url, rarity FROM rempah';
    const rows = await db.query(query);
    rows.forEach(item => {
        item.is_unlocked = true;
    });
    return rows;
}

async function getRempah(id){
    const query = `SELECT r.id, r.nama, r.deskripsi, ARRAY_AGG(m.nama) AS manfaat, r.image_url , r.rarity
                    FROM rempah AS r
                    JOIN rempah_manfaat AS rm ON r.id = rm.rempah_id
                    JOIN manfaat AS m ON m.id = rm.manfaat_id
                    WHERE r.id = $1
                    GROUP BY r.id, r.nama, r.deskripsi, r.image_url, r.rarity`;
    const rows = await db.query(query, [id]);
    return rows[0];
}

async function getAllRempahWithUser(emailUser){
    const queryPR = 'SELECT rempah_id FROM Pengguna_Rempah WHERE email=$1';
    const resultQueryPR = await db.query(queryPR, [emailUser]);
    const rempahIds = resultQueryPR.map(item => item.rempah_id);

    const queryRempah = 'SELECT id, nama, deskripsi, image_url, rarity FROM rempah';
    const resultQueryRempah = await db.query(queryRempah);
    resultQueryRempah.forEach(item => {
        if(rempahIds.includes(item.id)){
            item.is_unlocked = true;
        }
        else{
            item.is_unlocked = false;
        }
    });
    return resultQueryRempah;
}

module.exports = {
    getAllRempah,
    getRempah,
    getAllRempahWithUser
};