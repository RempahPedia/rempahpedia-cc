const db = require('../config/dbconnection');

async function saveUser(userEmail){
    // const query = 'INSERT INTO Pengguna(email) VALUES($1)';
    // const rows = await db.query(query, [userEmail]);
    // return rows;

    const client = await pool.connect();
    try {
        const query = 'INSERT INTO Pengguna (email) VALUES ($1) RETURNING *';
        const res = await client.query(query, [email]);
        return res.rows[0];
    } catch (err) {
        console.error('Error inserting data:', err);
        throw err;
    } finally {
        client.release();
    }
}

async function savePrediciton(userEmail, rempah){
    const rempahIdQuery = 'SELECT id FROM REMPAH WHERE nama=$1';
    const rempahIdResult = await db.query(rempahIdQuery, [rempah]);
    const rempahId = rempahIdResult[0].id;

    const query = 'INSERT INTO Pengguna_Rempah(email, rempah_id) VALUES ($1, $2)';
    const rows = await db.query(query, [userEmail, rempahId]);
    return rows;
}

module.exports = {
    savePrediciton,
    saveUser
};