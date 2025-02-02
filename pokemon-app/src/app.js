const express = require('express');
const app = express();
const port = 8080;
const PFLService = require('./service/pfl-service');

 
// let query = client.query('SELECT * FROM "Player"');

const pflService = new PFLService();


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/player/:playerid', (req, res) => {
  const rows = pflService.getPlayerById(req.params.playerid);
  res.send(rows);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
