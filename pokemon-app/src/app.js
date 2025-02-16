const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = 8080;
const PFLService = require('./service/pfl-service');

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));
 
// let query = client.query('SELECT * FROM "Player"');

const pflService = new PFLService();


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/player/:playerid', async (req, res) => {
  const result = await pflService.getPlayerById(req.params.playerid);
  console.log(result);
  return res.json(result);
});

app.get('/team/:teamid', async(req, res) => {
  const result = await pflService.getTeamById(req.params.teamid);
  return res.json(result);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
