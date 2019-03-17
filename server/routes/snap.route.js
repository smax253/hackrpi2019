const express = require('express');
const _crypto = require('crypto');
const _qs = require('qs');
const request = require('request');
const userCtrl = require('../controllers/user.controller');
const asyncHandler = require('express-async-handler');

const router = express.Router();
module.exports = router;

const OAUTH2_STATE_BYTES = 32;
const REGEX_PLUS_SIGN = /\+/g;
const REGEX_FORWARD_SLASH = /\//g;
const REGEX_EQUALS_SIGN = /=/g;

function generateRandomBytes(size) {
  return _crypto.randomBytes(size);
}

function generateBase64UrlEncodedString(bytesToEncode) {
  return bytesToEncode
    .toString('base64')
    .replace(REGEX_PLUS_SIGN, '-')
    .replace(REGEX_FORWARD_SLASH, '_')
    .replace(REGEX_EQUALS_SIGN, '');
}

function generateClientState() {
  return generateBase64UrlEncodedString(generateRandomBytes(OAUTH2_STATE_BYTES));
}

function getAuthCodeRedirectURL(clientId, redirectUri, scopeList, state) {
  let SNAP_ACCOUNTS_LOGIN_URL = 'https://accounts.snapchat.com/accounts/oauth2/auth';
  let scope = scopeList.join(' ');
  let loginQS = {
    client_id: clientId,
    redirect_uri: redirectUri,
    response_type: 'code',
    scope: scope,
    state: state
  };

  let stringifyLoginQS = _qs.stringify(loginQS);
  return SNAP_ACCOUNTS_LOGIN_URL + '?' + stringifyLoginQS;
}

router.get('/auth', function (req, res) {
  let redirectURL = getAuthCodeRedirectURL(
    process.env.SNAP_CLIENT_ID,
    'http://localhost:' + process.env.SERVER_PORT + '/api/snap/redirect',
    ['https://auth.snapchat.com/oauth2/api/user.display_name'],
    generateClientState()
  );

  res.redirect(redirectURL);
});

router.get('/redirect', function (req, res) {
  const SNAPCHAT_AUTH_ENDPOINT = 'https://accounts.snapchat.com/accounts/oauth2/token';
  let auth_code = req.param('code');
  // TODO: should verify state as well, security flaw, hackathon tho

  let authorizationHeader = process.env.SNAP_CLIENT_ID + ':' + process.env.SNAP_PRIVATE_KEY;
  let authorizationHeaderBase64 = Buffer.from(authorizationHeader).toString('base64');
  let headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': 'Basic ' + authorizationHeaderBase64
  };

  let options = {
    url: SNAPCHAT_AUTH_ENDPOINT,
    method: 'POST',
    headers: headers,
    form: {
      grant_type: 'authorization_code',
      code: auth_code,
      redirect_uri: 'http://localhost:4040/api/snap/redirect',
      client_id: process.env.SNAP_CLIENT_ID,
    }
  };

  request(options, function(error, response, body) {
    let access_token = JSON.parse(body).access_token;
    console.log(body);
    console.log(access_token);
    let headers = {
      'Accept': 'application/json, text/plain, */*',
      'Authorization': 'Bearer ' + access_token,
      'Content-Type': 'application/json;charset=UTF-8'
    };

    let options = {
      url: 'https://kit.snapchat.com/v1/me',
      method: 'POST',
      headers: headers,
      body: '{"query":"{me{externalId, displayName}}"}'
    };
    request(options, async function(error, response, body) {
      let parsedBody = JSON.parse(body);
      let externalId = parsedBody.data.me.externalId;
      let displayName = parsedBody.data.me.displayName;
      console.log(externalId, displayName);

      let user = await userCtrl.insert({
        snapId: externalId,
        displayName: displayName,
      });
      res.json(user);
    });
  });
});
