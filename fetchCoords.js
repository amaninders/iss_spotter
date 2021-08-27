// import the request module
const request = require('request');

/**
 * Makes a single API request to retrieve the lat/lng for a given IPv4 address.
 * Input:
 *   - The ip (ipv4) address (string)
 *   - A callback (to pass back an error or the lat/lng object)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The lat and lng as an object (null if error). Example:
 *     { latitude: '49.27670', longitude: '-123.13000' }
 */

const fetchCoordsByIP = function(ip, callback) {
  request(`https://freegeoip.app/json/${ip}`, (e, r, body) => {
    if (e) return callback(e, null);
    if (r.statusCode !== 200) {
      const msg = `Status Code ${r.statusCode} when fetching coordinates for IP. Response: ${body}`;
      return callback(msg, null);
    }
    const data = {
      latitude: `${JSON.parse(body).latitude}`,
      longitude: `${JSON.parse(body).longitude}`
    };
    callback(null, data);
  });
};

module.exports = {
  fetchCoordsByIP
};