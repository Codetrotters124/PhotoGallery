const express = require('express');
const cors = require('cors');
const path = require('path')
const db = require('../db/index.js')
const app = express();
const port = 3002;

app.use(cors());
app.use('/', express.static(path.join(__dirname, '../client/dist')));



app.get('/:restName/images/:limit', (req, res) => {
  db.gallery.getLimit(req.params, (err, data) => {
    if(err){
      res.status(400).send();
    } else{
      res.status(200).send(data);
    }
  });
});

app.get('/:restName/images', (req, res) => {
  db.gallery.get(req.params, (err, data) => {
    if(err){
      res.status(400).send();
    } else {
      res.status(200).send(data);
    }
  });
})

app.get('/:restName', (req, res) => {
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

app.listen(port, () => console.log(`${port}`));
