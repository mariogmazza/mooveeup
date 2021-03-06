const jwt = require('jsonwebtoken')
const db = require('../models');

const secret = process.env.SECRET || "thisIs2Ez"


exports.register = async (req, res, next) => {
    try {
        const user = await db.User.create(req.body);
        const { id, username } = user;

        const token = jwt.sign({id, username}, secret)

        res.status(201).json({id, username, token});

    } catch (err) {
        if(err.code === 11000){
            err.message = 'Sorry, that username is already taken';
        }
        next(err);
    }
}

exports.login = async (req, res, next) => {
    try {
        const user = await db.User.findOne({
            username: req.body.username
        });
        const { id, username } = user;

        const valid = await user.comparePassword(req.body.password);

        if (valid) {
            const token =jwt.sign({ id, username }, secret)

         return res.status(200).json({ id, username, token});
        } else {
            throw new Error();
        }

    } catch (err) { 
        return next({ status: 400, message: 'Invalid Username/Password' });
      }
}