[1, 2, 3, 4].reduce((prev, next) => {
  console.log(prev, next)
  return prev + next;
}, 0)

// 0 1
// 1 2
// 3 3
// 6 4
// => 10

[1, 2, 3, 4].reduce((prev, next) => {
  console.log(prev, next);
  if (next % 2 === 0) prev.push(next);
  return prev;
}, [])

// [] 1
// [] 2
// [ 2 ] 3
// [ 2 ] 4
// => [ 2, 4 ]

const weather = {
  "New York": 65,
  "Washington, DC": 67,
  "Miami": 78,
  "San Francisco": 62
}

const hottest = Object.keys(weather)
  .reduce((prev, next) => {
    return weather[prev] > weather[next] ? prev : next;
  });

console.log(hottest)

// Miami

const products = ['Apple, iPhone, $699',
                  'Apple, iMac, $1899',
                  'Apple, airPods, $159',
                  'Apple, iPod, $499',
                  'Microsoft, Surface Pro, $799',
                  'Microsoft, XBox One, $499']

let output = products
  .map(line => line.split(', '))
  .reduce((manufacturer, product) => {
    manufacturer[product[0]] = manufacturer[product[0]] || [];
    manufacturer[product[0]].push({productName: product[1], price: product[2]})
    return manufacturer;
  }, {});

console.log(JSON.stringify(output, null, 2));

/*
{
  "Apple": [
    {
      "product": "iPhone",
      "price": "$699"
    },
    {
      "product": "iMac",
      "price": "$1899"
    },
    {
      "product": "airPods",
      "price": "$159"
    },
    {
      "product": "iPod",
      "price": "$499"
    }
  ],
  "Microsoft": [
    {
      "product": "Surface Pro",
      "price": "$799"
    },
    {
      "product": "XBox One",
      "price": "$499"
    }
  ]
}
*/
