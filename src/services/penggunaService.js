const db = require('../config/dbconnection');

async function savePrediciton(userEmail, rempah){
    const rempahIdQuery = 'SELECT id FROM REMPAH WHERE nama=$1';
    const rempahIdResult = await db.query(rempahIdQuery, [rempah]);
    const rempahId = rempahIdResult[0].id;

    const query = 'INSERT INTO Pengguna_Rempah(email, rempah_id) VALUES ($1, $2) ON CONFLICT (email, rempah_id) DO NOTHING';
    const rows = await db.query(query, [userEmail, rempahId]);

    checkRempahUnlockedNumber(userEmail);

    return rows;
}

async function checkRempahUnlockedNumber(userEmail){
    const rempahUnlockedNumberQuery = 'SELECT COUNT(*) as jumlah FROM Pengguna_Rempah WHERE email=$1';
    const rempahUnlockedNumberResult = await db.query(rempahUnlockedNumberQuery , [userEmail]);
    const rempahUnlockedNumber = rempahUnlockedNumberResult[0].jumlah;

    if(rempahUnlockedNumber == 30){
        const unlockedAllQuery = 'UPDATE Pengguna SET is_unlocked = true WHERE email=$1';
        const unlockedAllResult = await db.query(unlockedAllQuery , [userEmail]);
        return unlockedAllResult;
    }
    return rempahUnlockedNumber;
}

async function getNumberOfRempahUnlocked(userEmail){
    const rempahUnlockedNumberQuery = 'SELECT COUNT(*) as jumlah FROM Pengguna_Rempah WHERE email=$1';
    const rempahUnlockedNumberResult = await db.query(rempahUnlockedNumberQuery , [userEmail]);

    return rempahUnlockedNumberResult[0];
}

async function getCurrentUser(userEmail){
    const penggunaQuery = 'SELECT * FROM Pengguna WHERE email=$1';
    const penggunaResult = await db.query(penggunaQuery , [userEmail]);

    return penggunaResult[0];
}


module.exports = {
    savePrediciton,
    getNumberOfRempahUnlocked,
    getCurrentUser
};