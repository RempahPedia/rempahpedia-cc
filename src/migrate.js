const db = require('./config/dbconnection');

async function migrate() {
    try{
        await db.runMigration();
        await db.runSeeding();
        console.log("succesful migrations and seeding")
    }
    catch(error){
        console.log("fail to migrate")
        console.log(error)
    }
    finally{
        await db.end()
    }
}

migrate();

module.exports = migrate;