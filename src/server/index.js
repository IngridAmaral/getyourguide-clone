import { Server } from 'miragejs';
import { popular } from './data/popular';
import { topAttractions } from './data/topAttractions';
import { topCountries } from './data/topCountries';
import {
  toursBarcelona,
  toursNewYork,
  toursParis,
} from './data/tours';
import { topDestinationBarcelona, topDestinationNewYork, topDestinationParis } from './data/topDestinations';
import { filterTours } from './filterTours';

export const createServer = () => {
// eslint-disable-next-line no-new
  new Server({
    routes() {
      this.namespace = '/';

      this.get('destinations/:city', (schema, req) => {
        switch (req.params.city) {
          case 'tours-barcelona':
            return filterTours(req, toursBarcelona);
          case 'tours-new-york':
            return filterTours(req, toursNewYork);
          case 'tours-paris':
            return filterTours(req, toursParis);
          default:
            return null;
        }
      });

      this.get('top/destinations/:city', (schema, req) => {
        switch (req.params.city) {
          case 'barcelona':
            return topDestinationBarcelona;
          case 'new-york':
            return topDestinationNewYork;
          case 'paris':
            return topDestinationParis;
          default:
            return null;
        }
      });

      this.get('top/countries', () => topCountries);
      this.get('top/attractions', () => topAttractions);

      this.get('popular', () => popular);
    },
  });
};
