const express = require('express');
const {
  topDestinationParis,
  topDestinationBarcelona,
  topDestinationNewYork,
} = require('./mockData/topDestinations');
const { toursBarcelona, toursNewYork, toursParis } = require('./mockData/tours');
const { topCountries } = require('./mockData/topCountries');
const { popular } = require('./mockData/popular');
const { topAttractions } = require('./mockData/topAttractions');

const DELAY = 500;

const app = express();

// Setup
app.use((req, res, next) => {
  setTimeout(next, DELAY);
});
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
});

// Routes
app.use('/destinations/tours-barcelona', (req, res) => {
  res.send(toursBarcelona);
});

app.use('/destinations/tours-new-york', (req, res) => {
  res.send(toursNewYork);
});

app.use('/destinations/tours-paris', (req, res) => {
  res.send(toursParis);
});

app.use('/top/destinations/paris', (req, res) => {
  res.send(topDestinationParis);
});

app.use('/top/destinations/barcelona', (req, res) => {
  res.send(topDestinationBarcelona);
});

app.use('/top/destinations/new-york-city', (req, res) => {
  res.send(topDestinationNewYork);
});

app.use('/top/countries', (req, res) => {
  res.send(topCountries);
});

app.use('/top/attractions', (req, res) => {
  res.send(topAttractions);
});

app.use('/popular', (req, res) => {
  res.send(popular);
});


app.listen(4000, () => {
  console.log('server is running on port 4000');
});
