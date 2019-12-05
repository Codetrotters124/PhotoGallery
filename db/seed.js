const db = require('./index.js');

const sample = {
  restName: 'absinthe-brasserie-and-bar',
  images: [
    {
      url:'https://hrsf124-fec.s3-us-west-1.amazonaws.com/opentable-mockdata/mockdata_img/23372549.jpg',
      created_date:'Jan 1, 2019 5:31:46 PM GMT-0800'
    },
    {
      url:'https://hrsf124-fec.s3-us-west-1.amazonaws.com/opentable-mockdata/mockdata_img/23372550.jpg',
      created_date:'Feb 1, 2019 5:31:46 PM GMT-0800'
    },
    {
      url:'https://hrsf124-fec.s3-us-west-1.amazonaws.com/opentable-mockdata/mockdata_img/23372551.jpg',
      created_date:'Mar 1, 2019 5:31:46 PM GMT-0800'
    },
    {
      url:'https://hrsf124-fec.s3-us-west-1.amazonaws.com/opentable-mockdata/mockdata_img/23372552.jpg',
      created_date:'Apr 1, 2019 5:31:46 PM GMT-0800'
    },
    {
      url:'https://hrsf124-fec.s3-us-west-1.amazonaws.com/opentable-mockdata/mockdata_img/23372553.jpg',
      created_date:'May 1, 2019 5:31:46 PM GMT-0800'
    },
    {
      url:'https://hrsf124-fec.s3-us-west-1.amazonaws.com/opentable-mockdata/mockdata_img/23372549.jpg',
      created_date:'Jan 1, 2019 5:31:46 PM GMT-0800'
    },
    {
      url:'https://hrsf124-fec.s3-us-west-1.amazonaws.com/opentable-mockdata/mockdata_img/23372550.jpg',
      created_date:'Feb 1, 2019 5:31:46 PM GMT-0800'
    },
    {
      url:'https://hrsf124-fec.s3-us-west-1.amazonaws.com/opentable-mockdata/mockdata_img/23372551.jpg',
      created_date:'Mar 1, 2019 5:31:46 PM GMT-0800'
    },
    {
      url:'https://hrsf124-fec.s3-us-west-1.amazonaws.com/opentable-mockdata/mockdata_img/23372552.jpg',
      created_date:'Apr 1, 2019 5:31:46 PM GMT-0800'
    },
    {
      url:'https://hrsf124-fec.s3-us-west-1.amazonaws.com/opentable-mockdata/mockdata_img/23372553.jpg',
      created_date:'May 1, 2019 5:31:46 PM GMT-0800'
    }
  ]
};

const insertSampleGallery =  ()  => {
  let arr = [sample];
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

