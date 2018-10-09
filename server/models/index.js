require('dotenv').config();
const mongoose = require('mongoose');


mongoose.set('debug', true);
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE,{useNewUrlParser: true})
// mongoose.connect('mongodb://localhost/xmovie')


module.exports.User = require('./user');
module.exports.Movie = require('./movie');
