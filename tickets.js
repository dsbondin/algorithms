// Given is a number of airplane tickets with arrival and departure cities from a past trip.
// Each city was visited only once. Return full itinerary. For example, the tickets are:
//
// LAX -> MIA
// JFK -> LAX
// MIA -> ORD
//
// Return value: ['JFK', 'LAX', 'MIA', 'ORD']

// SOLUTION:
// Use hashmap data structure as tickets input: tickets = {'LAX': 'MIA', 'JFK': 'LAX', 'MIA': 'ORD'}

function itinerary(tickets) {
  // store all destinations in a hashmap to find the starting city
  let destinations = {};
  Object.keys(tickets).forEach(city => {
    destinations[tickets[city]] = true;
  })

  // find starting city
  let start;
  for (city in tickets) {
    if (!destinations[city]) start = city;
  }

  let itinerary = [];
  let next = start;
  while(next) {
    itinerary.push(next);
    next = tickets[next];
  }

  return itinerary;
}

let tickets = {
  'AUS': 'SEA',
  'LAX': 'MIA',
  'ORD': 'SFO',
  'SEA': 'PDX',
  'JFK': 'LAX',
  'MIA': 'ORD',
  'SFO': 'AUS'
  }

console.log(itinerary(tickets));
// [ 'JFK', 'LAX', 'MIA', 'ORD', 'SFO', 'AUS', 'SEA', 'PDX' ]
