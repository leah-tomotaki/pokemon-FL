const PFLModel = require('../model/pfl-model');

class PFLService {
    
    constructor() {
        this.pflModel = new PFLModel();
    }

    async getPlayerById(playerId) {
        let result = await this.pflModel.getPlayerById(playerId);   
        return result.rows;
    }

    async getTeamById(teamId) {
        let pokemonResult = await this.pflModel.getPokemonByTeamId(teamId);
        let teamResult = await this.pflModel.getTeamById(teamId);
        pokemonResult = pokemonResult.rows;
        teamResult = teamResult.rows[0];
        const result = {
            team_id: teamResult.team_id,
            team_name: teamResult.name,
            player_id: teamResult.player_id,
            league_id: teamResult.league_id,
            pokemon: pokemonResult
        }
        return result;
    }
}

module.exports = PFLService;