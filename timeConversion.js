function timeConversion(s) {
  let hours = parseInt(s.slice(0, 2));
  const ampm = s.slice(8);

  if (ampm === "PM" && hours !== 12) {hours = (hours + 12)};
  if (hours < 10)  {hours = '0' + hours};
  if (hours === 12 && ampm !== 'PM') {hours = '00'};

  return hours + s.slice(2, 8);
}

console.log(timeConversion('07:05:45PM'));
// 19:05:45
