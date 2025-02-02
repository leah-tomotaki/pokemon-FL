const pg = require('pg');

const client = new pg.Client({
   user: process.env.POSTGRESQL_DB_USER, 
   host: process.env.POSTGRESQL_DB_HOST, 
   database: process.env.POSTGRESQL_DB, 
   password: process.env.POSTGRESQL_DB_PASSWORD, 
   port: process.env.POSTGRESQL_PORT });
client.connect(function(err) {
    if (err) {
      console.error('Database connection failed: ' + err.stack);
      return;
    }
    console.log('Connected to database.');
  }
);

module.exports = client;