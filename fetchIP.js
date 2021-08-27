// import the request module
const request = require('request'); 0;


/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */

const fetchMyIP = function(callback) {
  request(`https://api.ipify.org?format=json`, (e, r, body) => {
    if (e) {
      return callback(e, null);
    }
    if (r.statusCode !== 200) {
      const msg = `Status Code ${r.statusCode} when fetching IP. Response: ${body}`;
      return callback(msg, null);
    }
    const ip = JSON.parse(body).ip;
    callback(null, ip);
  });
};

module.exports = {
  fetchMyIP
};