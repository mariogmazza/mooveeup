const jwt = require('jsonwebtoken');

module.exports = (req, res, next)=>{
    if(req.header.authorization){
        const token = req.header.authorization.split(' ')[1];
        jwt.verify(token, process.env.SECRET, (err, decoded)=>{
            if(err){
                next(Error('Fail to authenticate token'));
            } else {
                req.decoded = decoded;
                next();
            }
        })
    } else {
        next(Error('No token provided'))
    }
}