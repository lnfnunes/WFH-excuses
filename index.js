const express = require('express');
const app = express();
const db = require('./database.json')
const pickExcuse = require('./functions/wfh-excuses')
const wfh = pickExcuse(db)

app.get('/wfh', function(req, res){
  res.send(wfh.pick(req.query.lang));
});

const port = process.env.PORT || 8000
app.listen(port);
console.log(`Listening on port ${[port]}`);
