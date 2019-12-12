const express = require('express');
const db = require('../db/index.js');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const port = 3003;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/:restNameID', express.static(path.join(__dirname,'../client/dist')));
app.use('/', express.static(path.join(__dirname,'../client/dist')));
app.listen(port, () => console.log(`app listening on port ${port}!`));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/:restNameID/images/:limit', (req, res) => {
  db.gallery.getLimit(req.params, (err, data) => {
    if(err){
      res.status(400).send();
    } else{
      res.status(200).send(data);
    }
  });
});

app.get('/:restNameID/:_id/images', (req, res) => {
  db.gallery.get(req.params, (err, data) => {
    if(err){
      res.status(400).send();
    } else {
      res.status(200).send(data);
    }
  });
})

app.get('/:restNameID', (req, res) => {
  db.gallery.get(req.params, (err, data) => {
    if(err){
      res.status(400).send();
    } else {
      res.status(200).send(data);
    }
  });
});

app.delete('/:restNameID/delete', (req, res) => {
  db.gallery.drop(req.params, (err) => {
    if(err) {
      res.status(400).send();
    } else {
      res.status(200).send();
    }
    });
})
