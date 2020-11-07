import { createRequire } from 'module';
const require = createRequire(import.meta.url);

var API_KEY = 'f3be2af94df1f59e0ca6f438564466af-ea44b6dc-4115538e';
var DOMAIN = 'sandbox399bda58188e4154a03a8ae7b3cf3a15.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: API_KEY, domain: DOMAIN});

// Route Get
export const getTest = (req, res)=>{
    res.send({name : 'Redouane'})
}

// Route Post recuperer data du form contact côté front
export const getPost = async(req, res)=>{
    
    const data = {
        from: `Excited User <${req.body.email}>`,
        to: 'agsdcombat@gmail.com',
        subject: 'Hello mec',
        text: `${req.body.message}`
    };
    console.log("data.from", data.from);
    console.log("data.to", data.to);
    console.log("data.subject", data.subject);
    console.log("data.text", data.text);

   await res.send(req.body)
   mailgun.messages().send(data, (error, body) => {
    console.log(body);
  });
}