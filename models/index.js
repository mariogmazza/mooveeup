// require('dotenv').config();
const mongoose = require('mongoose');


mongoose.set('debug', true);
mongoose.Promise = global.Promise;
// mongoose.connect(process.env.DATABASE,{useNewUrlParser: true})
// mongoose.connect('mongodb://localhost/xmovie')



// Connect to the Mongo DB
mongoose.Promise = Promise;
if (process.env.MONGODB_URI){
  mongoose.connect(process.env.MONGODB_URI)
}else{
//   mongoose.connect("mongodb://localhost/scrapeNews", { useMongoClient: true })
mongoose.connect(process.env.DATABASE,{useNewUrlParser: true})

}


module.exports.User = require('./user');
module.exports.Movie = require('./movie');
