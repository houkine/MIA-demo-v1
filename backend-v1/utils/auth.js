const {status200,status400,status401,status404,status500} = require('./responseHandler')
const JWTService = require('../service/authService');

const jwt = require('express-jwt');
const jwtAuthz = require('express-jwt-authz');
const jwksRsa = require('jwks-rsa');


// local JWT check
// usually: "Authorization: Bearer [token]" or "token: [token]"
const JWTcheck = async (token) => JWTService().verify(token, (err, thisToken) => {
  if (err) return false
  return true
});

// auth0 check
const auth0check = (req, res, next) => {
  jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: 'https://dev-zpga14zt.us.auth0.com/.well-known/jwks.json'
    }),
    audience: 'http://www.bloom.com/public/user/login',
    issuer: 'https://dev-zpga14zt.us.auth0.com/',
    algorithms: ['RS256']
  })
}

module.exports = JWTcheck
