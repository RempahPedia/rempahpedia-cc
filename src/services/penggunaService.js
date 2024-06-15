const db = require('../config/dbconnection');

async function saveUser(userEmail){
    const query = 'INSERT INTO pengguna (email) VALUES ($1)';
    const rows = await db.query(query, [userEmail]);
    return rows;
}

async function savePrediciton(userEmail, rempah){
    const rempahIdQuery = 'SELECT id FROM REMPAH WHERE nama=$1';
    const rempahIdResult = await db.query(rempahIdQuery, [rempah]);
    const rempahId = rempahIdResult[0].id;

    const query = 'INSERT INTO Pengguna_Rempah(email, rempah_id) VALUES ($1, $2) ON CONFLICT (email, rempah_id) DO NOTHING';
    const rows = await db.query(query, [userEmail, rempahId]);
    return rows;
}

module.exports = {
    savePrediciton,
    saveUser
};