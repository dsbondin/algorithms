const products = ['Apple, iPhone, $699',
                  'Apple, iMac, $1899',
                  'Apple, airPods, $159',
                  'Apple, iPod, $499',
                  'Microsoft, Surface Pro, $799',
                  'Microsoft, XBox One, $499']

let output = products
  .map(line => line.split(', '))
  .reduce((line, string) => {
    line[string[0]] = line[string[0]] || [];
    line[string[0]].push({product: string[1], price: string[2]})
    return line;
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
