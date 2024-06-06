const db = require('./config/dbconnection');

async function migrate() {
    try{
        await db.runMigration();
        await db.runSeeding();
        console.log("succesful migrations and seeding");
    }
    catch(error){
        console.log("fail to migrate");
        console.log(error);
        process.exit(1);
    }
    finally{
        await db.end();
        process.exit(0);
    }
}

migrate();

module.exports = migrate;