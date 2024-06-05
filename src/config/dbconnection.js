const pg = require('pg');
const fs = require('fs');
const path = require('path');
const { Connector } = require('@google-cloud/cloud-sql-connector');

class DatabasePool {
  constructor() {
    this.pool = null;
    this.init();
  }

  async init() {
    const connector = new Connector();
    const clientOpts = await connector.getOptions({
      instanceConnectionName: "rempahpedia-be:asia-southeast2:rempahpedia-db",
      ipType: 'PUBLIC',
    });

    this.pool = new pg.Pool({
      ...clientOpts,
      user: 'postgres',
      password: "Go.=%M=LYR:)gF8}",
      database: "rempahpedia",
      max: 5,
    });
  }

  async query(text, values = []) {
    if (!this.pool) {
      await this.init();
    }
    const { rows } = await this.pool.query(text, values);
    return rows;
  }

  async runMigration() {
    if (!this.pool) {
      await this.init();
    }
    const sql = fs.readFileSync(path.join(__dirname, '..', 'migrations', '001_create_tables.sql')).toString();
    await this.pool.query(sql);
    console.log('Migration applied successfully');
  }

  async runSeeding() {
    if (!this.pool) {
      await this.init();
    }
    const sql = fs.readFileSync(path.join(__dirname, '..', 'migrations', '002_insert_data.sql')).toString();
    await this.pool.query(sql);
    console.log('Migration applied successfully');
  }

  async end() {
    if (this.pool) {
      await this.pool.end();
    }
  }
}

module.exports = new DatabasePool();