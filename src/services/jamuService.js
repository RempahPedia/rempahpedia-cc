const db = require('../config/dbconnection');

async function getAllJamu(){
    const query = 'SELECT id, nama, array_to_json(penyakit) as penyakit FROM jamu';
    const rows = await db.query(query);
    return rows;
}

async function getJamu(id){
    const query = `WITH manfaat_agg AS (
                        SELECT jm.jamu_id, ARRAY_AGG(DISTINCT m.nama) AS manfaat
                        FROM jamu_manfaat AS jm
                        JOIN manfaat AS m ON m.id = jm.manfaat_id
                        GROUP BY jm.jamu_id
                    ),
                    rempah_agg AS (
                        SELECT jr.jamu_id, ARRAY_AGG(DISTINCT r.nama) AS rempah
                        FROM jamu_rempah AS jr
                        JOIN rempah AS r ON r.id = jr.rempah_id
                        GROUP BY jr.jamu_id
                    )
                    SELECT j.id, j.nama, ma.manfaat, ra.rempah, array_to_json(j.penyakit) as penyakit
                    FROM jamu AS j
                    LEFT JOIN manfaat_agg AS ma ON j.id = ma.jamu_id
                    LEFT JOIN rempah_agg AS ra ON j.id = ra.jamu_id
                    WHERE j.id = $1`;
    const rows = await db.query(query, [id]);
    return rows[0];
}

async function searchJamu(keyword, filters) {
    let query = `SELECT id, nama, array_to_json(penyakit) as penyakit FROM jamu WHERE nama ILIKE $1`;
    let params = [`%${keyword}%`];

    if (filters && filters.length > 0) {
        query += ` AND penyakit && $2::penyakit[]`;
        params.push(filters);
    }

    const rows  = await db.query(query, params);
    return rows;
}

module.exports = {
    getAllJamu,
    getJamu,
    searchJamu
};