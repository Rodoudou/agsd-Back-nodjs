// // import mailgun from 'mailgun-js';
// import { createRequire } from 'module';
// const require = createRequire(import.meta.url);

// var API_KEY = 'f3be2af94df1f59e0ca6f438564466af-ea44b6dc-4115538e';
// var DOMAIN = 'sandbox399bda58188e4154a03a8ae7b3cf3a15.mailgun.org';
// var mailgun = require('mailgun-js')({apiKey: API_KEY, domain: DOMAIN});

// const data = {
//   from: 'Excited User <redouane_amrani@hotmail.com>',
//   to: 'amrani.redouane@gmail.com',
//   subject: 'Hello mec',
//   text: 'Testing some Mailgun awesomeness!'
// };

// mailgun.messages().send(data, (error, body) => {
//   console.log(body);
// });