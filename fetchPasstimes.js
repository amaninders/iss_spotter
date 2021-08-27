// import the request module
const request = require('request');

/**
 * Makes a single API request to retrieve upcoming ISS fly over times the for the given lat/lng coordinates.
 * Input:
 *   - An object with keys `latitude` and `longitude`
 *   - A callback (to pass back an error or the array of resulting data)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The fly over times as an array of objects (null if error). Example:
 *     [ { risetime: 134564234, duration: 600 }, ... ]
 */

const fetchISSFlyOverTimes = function(coords, callback) {
  request(`http://api.open-notify.org/iss-pass.json?lat=${coords.latitude}&lon=${coords.longitude}`, (e, r, body) => {
    if (e) return callback(e, null);
    if (r.statusCode !== 200) {
      const msg = `Status Code ${r.statusCode} when fetching flyover times for given coords. Response: ${body}`;
      return callback(msg, null);
    }
    const data = JSON.parse(body).response;
    callback(null, data);
  });
};

module.exports = {
  fetchISSFlyOverTimes
};