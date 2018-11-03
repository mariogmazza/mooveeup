require('dotenv').config();

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors')

// const db = require('./models')
const handle = require('./handlers');
const routes = require('./routes');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


app.use('/api/auth', routes.auth);
app.use('/api/watched', routes.movieWatched);
app.use('/api/wished', routes.movieWishlist);
app.use('/api/getmovie', routes.getMovieRoute);




// app.use(handle.notFound)
// app.use(handle.errors)


// Enable CORS from client-side
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});





mongoose.set('debug', true);
mongoose.Promise = global.Promise;
// mongoose.connect(process.env.DATABASE,{useNewUrlParser: true})
// mongoose.connect('mongodb://localhost/xmovie')



// Connect to the Mongo DB
mongoose.Promise = Promise;
if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI)
} else {
  //   mongoose.connect("mongodb://localhost/scrapeNews", { useMongoClient: true })
  mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true
  })

}



// if (process.env.NODE_ENV === 'production') {

//   app.use(express.static('client/build'));

//   app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//   });
// }

if (process.env.NODE_ENV === 'production') { 
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));

  // Handle React routing, return all requests to React app
  app.get('*',  (req, res)=> {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));