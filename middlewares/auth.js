const jwt = require('jsonwebtoken');


// module.exports = (req, res, next)=>{

//     if(req.headers['authorization']){

//         const token = req.headers['authorization'].split(' ')[1];

//         jwt.verify(token, process.env.SECRET, (err, decoded)=>{

//             if(err) {
//                 next(Error('Fail to authenticate token'));
//             } else {
//                 req.decoded = decoded;
//                 next();
//             }
//         })
//     } else {
//         next(Error('No token provided'))
//     }
// }

module.exports = (req, res, next) => {

  const bearerHeader = req.headers["authorization"];

    if (typeof bearerHeader !== 'undefined') {

      const bearer = req.headers['authorization'].split(' ');
      const bearerToken = bearer[1];
      jwt.verify(bearerToken, process.env.SECRET, (err, data) => {
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