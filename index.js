// import  {account_sid, auth_token} from 'credentials.js';
account_sid = "ACd0272292df5f4031e3401b2dbee97b7b"
auth_token = "9bf308c9de0d8713b906e3b9d75cf9da"
const client = require('twilio')(account_sid,auth_token);
client.messages.create({
  from: 'whatsapp:+14155238886',
  body: 'chutiyapa',
  to: 'whatsapp:+917008717573'
}).then(message => console.log(message.sid));
