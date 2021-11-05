const express = require('express');
const stripe = require('stripe');

const app = express();
const port = 3000;
const users = [
  {
    id: 1,
    name: 'Manjunath Kalburgi',
    username: 'manju',
    email: 'manjunathkalburgi@gmail.com',
    address: {
      street: 'ravi nagar',
      suite: 'Apt. 556',
      city: 'Hubli',
      zipcode: '580030',
      geo: {
        lat: '-37.3159',
        lng: '81.1496',
      },
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets',
    },
  },
];
app.set('json spaces', 40);

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(users));
});
app.get('/api/users', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(users));
});
app.get('/post', (req, res) => {
  res.send('Got post request');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
