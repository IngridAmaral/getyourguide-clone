const { toursBarcelona, toursParis, toursNewYork } = require('./tours');

const topDestinationParis = {
  destination: 'paris',
  img: 'https://cdn.getyourguide.com/img/location/5b1a9b213810d.jpeg/92.jpg',
  description: 'The City of Love, the City of Lights, whatever you call it, falling in love with Paris is easy. Whether you explore the catacombs or lose yourself in the Louvre, make your visit to the French capital unforgettable.',
  activities: toursParis.slice(0, 4),
  todo: toursParis.slice(4, 8),
  url: '/dicovery/paris',
};

const topDestinationBarcelona = {
  destination: 'barcelona',
  img: 'https://cdn.getyourguide.com/img/location/5b21376f5f336.jpeg/92.jpg',
  description: "Whether you're staring up in awe at Gaudi's Sagrada Familia or staring down in delight at a plate of tasty tapas, Barcelona will leave you smiling. Discover the best of the Catalan capital on your trip.",
  activities: toursBarcelona.slice(0, 4),
  todo: toursBarcelona.slice(4, 8),
  url: '/dicovery/barcelona',
};

const topDestinationNewYork = {
  destination: 'new-york-city',
  img: 'https://cdn.getyourguide.com/img/location/5c04f6f20650d.jpeg/92.jpg',
  description: 'Ready to take a bite out of the Big Apple? From American landmarks like the Empire State Building to gospel concerts in Harlem, discover the best New York City has to offer.',
  activities: toursNewYork.slice(0, 4),
  todo: toursNewYork.slice(4, 8),
  url: '/dicovery/new-york-city',
};

module.exports = {
  topDestinationParis,
  topDestinationBarcelona,
  topDestinationNewYork,
};
