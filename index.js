const hostname = '127.0.0.1';
const port = process.env.PORT || 8080;
const express = require('express');
const app = express();
const arrayify = require('./arrayify')

app.get('/',(req,res) => {
  res.send('Hello World');
});

app.get('/arrayify', (req,res) => {
  const evalres = arrayify.evalArray(req.query.array)
  if (evalres) {
    res.json(evalres);
  }
  else {
    res.status(400).send('Bad request')
  }
});

app.listen(port, () => console.log(`Server running at http://${hostname}:${port}/`))
