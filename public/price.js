// If using Node.js, install node-fetch:
// npm install node-fetch
// Uncomment the following line if using Node
// const fetch = require('node-fetch');

const apiKey = 'YOUR_API_KEY_HERE';
const url = `https://metals-api.com/api/latest?access_key=${apiKey}&base=USD&symbols=XAU`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    const goldPrice = data.rates.XAU; // XAU = Gold
    console.log(`Current gold price in USD: ${goldPrice}`);
  })
  .catch(error => {
    console.error('Error fetching gold price:', error);
  });
