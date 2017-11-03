var express = require('express');
var router = express.Router();


var fs = require('fs');
var guid = require('guid');
var mustache = require('mustache');
var Request = require('request');
var querystring = require('querystring');

var csrf_guid = guid.raw();
var account_kit_api_version = process.env.ACCOUNT_KIT_API_VERSION;
var app_id = process.env.APP_ID;
var app_secret = process.env.APP_SECRET;
var me_endpoint_base_url = process.env.ME_ENDPOINT_BASE_URL;
var token_exchange_base_url = process.env.TOKEN_EXCHANGE_BASE_URL;


/* GET email verify page */
router.get('/', function(req, res, next) {
    var viewData = {
        appId: app_id,
        csrf: csrf_guid,
        version: account_kit_api_version,
        appSecret: app_secret
    };

    res.render('emailValidation', { title: 'SaverLife Savings', viewData: JSON.stringify(viewData)});
});

/* POST email verification data */
router.post('/fbEmailSuccess', function(request, response, next) {

    console.log(request.body);

    // CSRF check
    if (request.body.csrf === csrf_guid) {
        var app_access_token = ['AA', app_id, app_secret].join('|');
        var params = {
            grant_type: 'authorization_code',
            code: request.body.code,
            access_token: app_access_token
        };

        // exchange tokens
        var token_exchange_url = token_exchange_base_url + '?' + querystring.stringify(params);
        var viewData;
        Request.get({url: token_exchange_url, json: true}, function(err, resp, respBody) {
            viewData = {
                user_access_token: respBody.access_token,
                expires_at: respBody.expires_at,
                user_id: respBody.id
            };
            // get account details at /me endpoint
            var me_endpoint_url = me_endpoint_base_url + '?access_token=' + respBody.access_token;
            Request.get({url: me_endpoint_url, json:true }, function(err, resp, respBody) {
                // send login_success.html
                if (respBody.phone) {
                    view.phone_num = respBody.phone.number;
                } else if (respBody.email) {
                    view.email_addr = respBody.email.address;
                }

                response.render('verifyEmailSuccess', { title: 'SaverLife Savings | Email Verified', viewData: JSON.stringify(viewData)});

            });
        });
    }
    else {
        // login failed
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end("Something went wrong. :( ");
    }

});

module.exports = router;