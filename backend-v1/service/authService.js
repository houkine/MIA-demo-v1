const jwt = require('jsonwebtoken');

const secret = 'secret'
// const secret = process.env.NODE_ENV === 'production' ? process.env.JWT_SECRET : 'secret';

const authService = () => {
  const issue = (payload) => jwt.sign(payload, secret, { expiresIn: 10000800 });
  const verify = token => token && jwt.verify(token, secret);

  return {
    issue,
    verify,
  };
};

module.exports = authService;
