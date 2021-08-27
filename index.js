// import the module
const { nextISSTimesForMyLocation } = require('./iss');

// fetch pass times
nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});

//print array of pass time object
const printPassTimes = passTimes => {
  for (const item of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(item.risetime);
    const duration = item.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};
