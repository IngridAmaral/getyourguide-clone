import { toursBarcelona, toursParis, toursNewYork } from './tours';

export const topDestinationParis = {
  destination: 'paris',
  img: 'https://cdn.getyourguide.com/img/location/5b1a9b213810d.jpeg/92.jpg',
  description: 'The City of Love, the City of Lights, whatever you call it, falling in love with Paris is easy. Whether you explore the catacombs or lose yourself in the Louvre, make your visit to the French capital unforgettable.',
  activities: toursParis.slice(0, 4),
  todo: toursParis.slice(4, 8),
  url: '/dicovery/paris',
  iconic: [
    {
      location: 'Seine River',
      count: 99,
      img: 'https://cdn.getyourguide.com/img/location/54ec976ccbc7b.jpeg/86.jpg',
    },
    {
      location: 'Palace of Versailles',
      count: 74,
      img: 'https://cdn.getyourguide.com/img/location/5b213df2e05fb.jpeg/86.jpg',
    },
    {
      location: 'Moulin Rouge',
      count: 11,
      img: 'https://cdn.getyourguide.com/img/location/52b300cf8375d.jpeg/86.jpg',
    },
  ],
};

export const topDestinationBarcelona = {
  destination: 'barcelona',
  img: 'https://cdn.getyourguide.com/img/location/5b21376f5f336.jpeg/92.jpg',
  description: "Whether you're staring up in awe at Gaudi's Sagrada Familia or staring down in delight at a plate of tasty tapas, Barcelona will leave you smiling. Discover the best of the Catalan capital on your trip.",
  activities: toursBarcelona.slice(0, 4),
  todo: toursBarcelona.slice(4, 8),
  url: '/dicovery/barcelona',
  iconic: [
    {
      location: 'Sagrada Familia',
      count: 81,
      img: 'https://cdn.getyourguide.com/img/location/5b211b507bfbc.jpeg/86.jpg',
    },
    {
      location: 'Barcelona El Prat Airport',
      count: 18,
      img: 'https://cdn.getyourguide.com/img/location/596315e040177.jpeg/86.jpg',
    },
    {
      location: 'Montserrat Monastery',
      count: 53,
      img: 'https://cdn.getyourguide.com/img/location/5729a9bdd4a2c.jpeg/86.jpg',
    },
  ],
};

export const topDestinationNewYork = {
  destination: 'new-york-city',
  img: 'https://cdn.getyourguide.com/img/location/5c04f6f20650d.jpeg/92.jpg',
  description: 'Ready to take a bite out of the Big Apple? From American landmarks like the Empire State Building to gospel concerts in Harlem, discover the best New York City has to offer.',
  activities: toursNewYork.slice(0, 4),
  todo: toursNewYork.slice(4, 8),
  url: '/dicovery/new-york-city',
  iconic: [
    {
      location: 'Manhattan',
      count: 454,
      img: 'https://cdn.getyourguide.com/img/location/544642123e7af.jpeg/86.jpg',
    },
    {
      location: 'New York Harbor',
      count: 61,
      img: 'https://cdn.getyourguide.com/img/location/53bffbc962a8c-m1402926869.jpg/86.jpg',
    },
    {
      location: 'Brooklyn',
      count: 93,
      img: 'https://cdn.getyourguide.com/img/location/540dc81234655-m1409275842.jpg/86.jpg',
    },
  ],
};
