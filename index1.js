const express = require('express');
const stripe = require('stripe');

const bodyparser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;
const stripe = require('stripe')('sk_test_YOUR-KEY');

const customers = {
  // stripeCustomerId : data
  stripeCustomerId: {
    apiKey: '123xyz',
    active: false,
    itemId: 'stripeSubscriptionItemId',
  },
};
const apiKeys = {
  // apiKey : customerdata
  '123xyz': 'stripeCustomerId',
};

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
    phone: '9986407307',
    website: 'manjunathkalburgi.github.com',
    company: {
      name: 'Personal',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets',
    },
  },
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
    phone: '9986407307',
    website: 'manjunathkalburgi.github.com',
    company: {
      name: 'Personal',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets',
    },
  },
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
    phone: '9986407307',
    website: 'manjunathkalburgi.github.com',
    company: {
      name: 'Personal',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets',
    },
  },
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
    phone: '9986407307',
    website: 'manjunathkalburgi.github.com',
    company: {
      name: 'Personal',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets',
    },
  },
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
    phone: '9986407307',
    website: 'manjunathkalburgi.github.com',
    company: {
      name: 'Personal',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets',
    },
  },
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
    phone: '9986407307',
    website: 'manjunathkalburgi.github.com',
    company: {
      name: 'Personal',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets',
    },
  },
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
    phone: '9986407307',
    website: 'manjunathkalburgi.github.com',
    company: {
      name: 'Personal',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets',
    },
  },
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
    phone: '9986407307',
    website: 'manjunathkalburgi.github.com',
    company: {
      name: 'Personal',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets',
    },
  },
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
    phone: '9986407307',
    website: 'manjunathkalburgi.github.com',
    company: {
      name: 'Personal',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets',
    },
  },
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
    phone: '9986407307',
    website: 'manjunathkalburgi.github.com',
    company: {
      name: 'Personal',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets',
    },
  },
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
    phone: '9986407307',
    website: 'manjunathkalburgi.github.com',
    company: {
      name: 'Personal',
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
app.get('/api/users:users', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(users));
});
app.get('/post', (req, res) => {
  res.send('Got post request');
});
// app.get('/checkout', (req, res) => {
//   // res.send('Stripe Checkout Started');
//   // console.log('Stripe Checkout Started');

//   var Publishable_Key =
//     'pk_test_51JsN81SEVNehWJ1uKQAqJx4eUsF4Ql8WbaJrLsIpaFrwEBfJwhl33n4sFPL3pLtJOPEwAdrCksuJRmrXJ8URGf3u00UY2xtLMy';
//   var Secret_Key =
//     'sk_test_51JsN81SEVNehWJ1uuZdr3f7ErnIygMZD5DQnE6gEDCaxisGiXvzLPdMZjSVKEkJBhGBwvuKPKEEWPHnV30WAFygI00T0duJd5v';

//   const stripe = require('stripe')(Secret_Key);
//   // res.render('Home', {
//   //   key: Publishable_Key,
//   // });
//   stripe.customers
//     .create({
//       email: 'manjunathkalburgi85@gmail.com',
//       source: req.body.stripeToken,
//       name: 'Manjunath Kalburgi',
//       address: {
//         line1: 'Ravi nagar hubli',
//         postal_code: '580030',
//         city: 'Hubli',
//         state: 'Karnataka',
//         country: 'India',
//       },
//     })
//     .then((customer) => {
//       console.log('payment mode');
//       return stripe.charges.create({
//         amount: 1, // Charing Rs 25
//         description: 'Web Development Product',
//         currency: 'INR',
//         customer: customer.id,
//       });
//     })
//     .then((charge) => {
//       res.send('Success'); // If no error occurs
//     })
//     .catch((err) => {
//       res.send(err); // If some error occurs
//     });
// });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
