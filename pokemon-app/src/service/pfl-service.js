const pg = require('pg');
class PFLService {
    constructor() {
        console.log("567890-");
        console.log(process.env.POSTGRESQL_DB);
        this.client = new pg.Client({ 
            ssl: { rejectUnauthorized: false },
            user: process.env.POSTGRESQL_DB_USER, host: process.env.POSTGRESQL_DB_HOST, database: process.env.POSTGRESQL_DB, password: process.env.POSTGRESQL_DB_PASSWORD, port: process.env.POSTGRESQL_PORT });
        this.client.connect(function(err) {
            if (err) {
              console.error('Database connection failed: ' + err.stack);
              return;
            }
            console.log('Connected to database.');
          }
        );
    }

    getPlayerById(playerId) {
        const parsedPlayerId = parseInt(playerId);
        if(!isNaN(parsedPlayerId)) {
            this.client.query(`SELECT * FROM "Pokemon-Fantasy"."Player" WHERE "PLAYER_ID" = ${parsedPlayerId}`).then((value) => {
                console.log(value.rows[0]);
                return value.rows[0];
            });
        }
        else {
            console.log("Parsing Player Id failed: " + playerId);
            return null;
        }
    }

    getPokemonByPlayerId(playerId) {
        this.client.query(`SELECT * FROM "Used_Pokemon" WHERE PLAYER_ID=${playerId}`).then((value) => {
            return value.rows;
        });
    }
}

module.exports = PFLService;