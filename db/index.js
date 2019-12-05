const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/galleries', {useNewUrlParser: true});
var Schema = mongoose.Schema;

var restGallerySchema = new Schema({
  restName: String,
  images: [{url: String, created_date: String}]
});

var restGallery = mongoose.model('restGallery', restGallerySchema);

var gallery = {
  get: (params ,cb) => {
    restGallery.findOne(params, 'images', {'limit': 10}, (err, data) => {
      if(err){
        cb(err);
      } else{
        cb(null, data);
      }
    })
  }, 
  insert: (arr, cb) => {
    restGallery.create(arr,(err) => {
      if(err){
        cb(err);
      } else{
        cb(null);
      }
    });
  },
  drop: (param ,cb) => {
    restGallery.deleteOne(param, (err) => {
      if(err){
        cb(err);
      } else {
        cb(null);
      }
    });
  },
  disconnect: () => {
    mongoose.disconnect();
  }
};

module.exports.gallery = gallery;