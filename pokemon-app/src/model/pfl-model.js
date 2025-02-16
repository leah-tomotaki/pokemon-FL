const pg = require('pg');
class PFLModel {
    constructor() {
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
            return this.client.query(`SELECT * FROM "Pokemon-Fantasy"."Player" WHERE "player_id" = ${parsedPlayerId}`);
        }
        else {
            console.log("Parsing Player Id failed: " + playerId);
            return null;
        }
    }

    getPokemonByTeamId(teamId) {
        const parsedTeamId = parseInt(teamId);
        if(!isNaN(parsedTeamId)) {
            return this.client.query(`SELECT * FROM "Pokemon-Fantasy"."Pokemon" WHERE team_id = ${parsedTeamId}`);
        }
        else {
            console.log("Parsing Team Id failed: " + teamId);
            return null;
        }
    }

    getTeamById(teamId) {
        const parsedTeamId = parseInt(teamId);
        if(!isNaN(parsedTeamId)) {
            return this.client.query(`SELECT * FROM "Pokemon-Fantasy"."Team"  WHERE team_id = ${parsedTeamId}`);
        }
        else {
            console.log("Parsing Team Id failed: " + teamId);
            return null;
        }
    }
}

module.exports = PFLModel;