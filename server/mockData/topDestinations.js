const { toursBarcelona, toursParis, toursNewYork } = require('./tours');

const topDestinations = [
  {
    destination: 'Paris',
    img: 'https://cdn.getyourguide.com/img/location/5b1a9b213810d.jpeg/92.jpg',
    description: 'The City of Love, the City of Lights, whatever you call it, falling in love with Paris is easy. Whether you explore the catacombs or lose yourself in the Louvre, make your visit to the French capital unforgettable.',
    btnTxt: 'Explore things to do',
    activities: toursParis.slice(0, 4),
    url: '/dicovery/paris',
  },
  {
    destination: 'Barcelona',
    img: 'https://cdn.getyourguide.com/tf/assets/static/deals/city-getaway-barcelona.jpg',
    description: 'Admire Gaudi’s quirky architecture and find the paella recipe you’ll serve to dinner party guests back home.',
    btnTxt: 'Explore things to do',
    activities: toursBarcelona.slice(0, 4),
    url: '/dicovery/barcelona',

  },
  {
    destination: 'New York City',
    img: 'https://cdn.getyourguide.com/tf/assets/static/deals/city-getaway-newYorkCity.jpg',
    description: 'Take in the iconic skyline and visit the neighborhood hangouts that you’ve only ever seen on TV.',
    btnTxt: 'Explore things to do',
    activities: toursNewYork.slice(0, 4),
    url: '/dicovery/new-york-city',
  },
];

module.exports = { topDestinations };
