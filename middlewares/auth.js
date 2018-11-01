const jwt = require('jsonwebtoken');

const secret = process.env.SECRET || "thisIs2Ez"


module.exports = (req, res, next) => {

  const bearerHeader = req.headers["authorization"];

    if (typeof bearerHeader !== 'undefined') {

      const bearer = req.headers['authorization'].split(' ');
      const bearerToken = bearer[1];
      jwt.verify(bearerToken, secret, (err, data) => {
        if (err) {
          next(Error('Failed to authenticate token'));
        } else {
          req.token = data;
          next();
        }
      });

     } else {
      next(Error('No token provided'));
    }
  };