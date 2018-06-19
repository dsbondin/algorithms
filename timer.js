// Write a function which returns true if is called 3 times within 3 seconds.

let tStamps = [];

const three = () => {
  tStamps.push(new Date());
  const index = tStamps.length - 1;
  setTimeout(() => tStamps[index] = null, 3000);
  if (tStamps[index - 2] && tStamps[index] - tStamps[index - 2] < 3000) {
     return true;
   }
}
