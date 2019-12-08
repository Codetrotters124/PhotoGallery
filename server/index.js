const express = require('express');
const db = require('../db/index.js');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const port = 3003;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', express.static(path.join(__dirname,'../client/dist')))
app.listen(port, () => console.log(`app listening on port ${port}!`));

app.get('/:restName/images', (req, res) => {
  db.gallery.get(req.params, (err, data) => {
    if(err){
      res.status(400).send();
    } else{
      res.status(200).send(data);
    }
  });
});

app.get('/:restName/images/_id/:_id', (req, res) => {
  console.log(req.params);
})

app.delete('/:restName/delete', (req, res) => {
  db.gallery.drop(req.params, (err) => {
    if(err) {
      res.status(400).send();
    } else {
      res.status(200).send();
    }
    });
})