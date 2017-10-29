var express = require('express');
var router = express.Router();


// Twilio Credentials (Save to env file when deploying)
var accountSid = process.env.TWILIO_ACCOUNT_SID;
var authToken = process.env.TWILIO_AUTH_TOKEN;
var twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;

// console.log(accountSid);
// console.log(authToken);
// console.log(twilioPhoneNumber);

// require the Twilio module and create a REST client
var client = require('twilio')(accountSid, authToken);


/* POST api for sending Text to user.
*  Expects a phone number and an SMS template
*
* */
router.post('/sendText', function(req, res, next) {

    console.log(req.body);
    var phoneNumber = req.body.phoneNumber;
    var textBody= req.body.textBody;

    client.messages
        .create({
            to: '+1' + phoneNumber,
            from: '+1' + twilioPhoneNumber,
            body: textBody,
        })
        .then(function (message) {
            return console.log(message.sid);
        });

    res.render('smsTestView', { phoneNumber: phoneNumber, textBody: textBody });
});

module.exports = router;


