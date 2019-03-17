const express = require('express');
const request = require('request');
const rp = require('request-promise-native');

const router = express.Router();
module.exports = router;

router.get('/bundle/:coord', function (req, res) {
  let coords = req.params['coord']; // should really sanitize this
  let optionsAttractions = {
    method: 'GET',
    uri: 'http://api.tripadvisor.com/api/partner/2.0/map/' + coords + '/attractions',
    qs: {
      key: process.env.TA_KEY,
    },
    json: true,
  };

  let optionsHotels = {
    method: 'GET',
    uri: 'http://api.tripadvisor.com/api/partner/2.0/map/' + coords + '/hotels',
    qs: {
      key: process.env.TA_KEY,
    },
    json: true,
  };

  let optionsRestaurants = {
    method: 'GET',
    uri: 'http://api.tripadvisor.com/api/partner/2.0/map/' + coords + '/restaurants',
    qs: {
      key: process.env.TA_KEY,
    },
    json: true,
  };

  Promise.all([rp(optionsAttractions), rp(optionsHotels), rp(optionsRestaurants)])
    .then(function (results) {
      res.json({
        'attractions': results[0].data,
        'hotels': results[1].data,
        'restaurants': results[2].data,
      });
    })
    .catch(function (err) {
      console.log('uh oh in the trip advisor call');
      console.log(err);
    });
});
