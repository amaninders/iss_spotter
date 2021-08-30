// import the module
const { nextISSTimesForMyLocation } = require('./iss_promised');

//print array of pass time object
const printPassTimes = passTimes => {
  for (const item of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(item.risetime);
    const duration = item.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};


// Call
nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  });

