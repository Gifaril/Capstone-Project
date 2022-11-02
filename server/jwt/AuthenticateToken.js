const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
  
    if (token == null) return res.sendStatus(401)
  
    jwt.verify(token, 'SECRET123', (err, data) => {  
      if (err) return res.sendStatus(403)
  
      req.id = data.id
  
      next()
    })
  }