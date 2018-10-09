const mongoose = require('mongoose');

mongoose.set('debug', true);
mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/xmovie',{useNewUrlParser: true})
mongoose.connect('mongodb://localhost/xmovie')


module.exports.User = require('./user');
module.exports.Movie = require('./movie');
