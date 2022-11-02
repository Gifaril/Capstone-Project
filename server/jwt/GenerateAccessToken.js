const jwt = require('jsonwebtoken');


module.exports = function (id) {
    return jwt.sign(id, 'SECRET123', { expiresIn: '1d' });
  }