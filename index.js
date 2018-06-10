const port = process.env.PORT || 8080;
const express = require('express');
const app = express();
const arrayify = require('./arrayify')

app.get('/',(req,res) => {
  res.send('Hello World');
});

app.get('/arrayify',(req,res) => {
  if (arrayify.evalArray(req.query.array)) {
    var obj = {}
    res.json(req.query.array);
  }
  else {
    res.status(400).send('Bad request ')
  }
});

app.listen(port, () => console.log(`Listening on port ${port}`))
