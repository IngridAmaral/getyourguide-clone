const { toursBarcelona, toursParis, toursNewYork } = require('./tours');

const topDestinations = [
  {
    destination: 'Paris',
    img: 'https://cdn.getyourguide.com/tf/assets/static/deals/city-getaway-paris.jpg',
    descripton: 'Make eyes at the Mona Lisa and write the story of "that time you went to the City of Love."',
    bgColor: '#FFD938',
    btnTxt: 'Explore things to do',
    activities: [toursParis.slice(0, 4)],
    url: '/dicovery/paris',

  },
  {
    destination: 'Barcelona',
    img: 'https://cdn.getyourguide.com/tf/assets/static/deals/city-getaway-barcelona.jpg',
    descripton: 'Admire Gaudi’s quirky architecture and find the paella recipe you’ll serve to dinner party guests back home.',
    bgColor: '#CCECFF',
    btnTxt: 'Explore things to do',
    activities: [toursBarcelona.slice(0, 4)],
    url: '/dicovery/barcelona',

  },
  {
    destination: 'New York City',
    img: 'https://cdn.getyourguide.com/tf/assets/static/deals/city-getaway-newYorkCity.jpg',
    descripton: 'Take in the iconic skyline and visit the neighborhood hangouts that you’ve only ever seen on TV.',
    bgColor: '#FFE5EE',
    btnTxt: 'Explore things to do',
    activities: [toursNewYork.slice(0, 4)],
    url: '/dicovery/new-york-city',
  },
];

module.exports = { topDestinations };
