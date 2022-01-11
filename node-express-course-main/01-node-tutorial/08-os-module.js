const os = require('os');

// info about current user
const user = os.userInfo();
console.log(user);

// method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOS);
// Printing os.uptime() value
// var ut_sec = os.uptime();
// var ut_min = ut_sec / 60;
// var ut_hour = ut_min / 60;
// console.log(ut_sec, ut_min, ut_hour);
// ut_sec = Math.floor(ut_sec);
// ut_min = Math.floor(ut_min);
// ut_hour = Math.floor(ut_hour);
// console.log(ut_sec, ut_min, ut_hour);
// ut_min = ut_min % 60;
// ut_sec = ut_sec % 60;
// console.log(ut_sec, ut_min, ut_hour);
// console.log(
//   'Up time: ' +
//     ut_hour +
//     ' Hour(s) ' +
//     ut_min +
//     ' minute(s) and ' +
//     ut_sec +
//     ' second(s)'
// );
