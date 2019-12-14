const db = require('./index.js');

const s3pictures = () => {
  var mockdata_img = [];
  let range = 10 + Math.floor(Math.random() * Math.floor(30 - 10));

  for(let i = 0; i < range; i++){
    let ranNum = prependZero(Math.floor(Math.random() * Math.floor(36)));
    let url = `https://hrsf124-fec.s3-us-west-1.amazonaws.com/opentable-mockdata/mockdata_img/233725${ranNum}.jpg`;
    let created_date = 'Jan 1, 2019 5:31:46 PM GMT-0800';
    mockdata_img.push({url: url, created_date: created_date});
  }
  
  return mockdata_img;
}

const prependZero = (n) => {
  return n > 9 ? "" + n: "0" + n;
}

const seed = () => {
  var sample = []
  sample.push({restName: 'monsieur-benjamin', images: s3pictures()})
  return sample;
}

const insertSampleGallery =  ()  => {
  let arr = seed();

  db.gallery.insert(arr, (err) => {
    if(err){
      console.log('Error: ', err);
    } else {
      db.gallery.disconnect();
      console.log('Sucess: seeding data into db');
    }
  });
};

insertSampleGallery();