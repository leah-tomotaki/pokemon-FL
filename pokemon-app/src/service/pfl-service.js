const pg = require('pg');

class PFLService {
    constructor() {
        this.client = new pg.Client({ user: 'postgres', host: 'pokemon-1.cf4misqmkxx7.us-east-1.rds.amazonaws.com', database: 'pokemon_fantasy', password: '3uDSE979KWsjDrGiThsI', port: '5432' });
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
            this.client.query(`SELECT * FROM "Player" WHERE "PLAYER_ID" = ${parsedPlayerId}`).then((value) => {
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