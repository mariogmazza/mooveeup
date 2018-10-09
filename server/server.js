require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const cors = require('cors')

const db = require('./models')
const handle = require('./handlers')
const routes = require('./routes')

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyparser.json())



app.get('/', (req, res) =>
  res.json({
    hello: 'pepe'
  }))

app.use('/api/auth', routes.auth)

app.use(handle.notFound)
app.use(handle.errors)

//if (process.env.NODE_ENV === 'production') {
  // Serve any static files
 // app.use(express.static(path.join(__dirname, 'client/build')));

  // Handle React routing, return all requests to React app
  //   app.get('*', function (req, res) {
  //     res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  //   });
  // }  !!!!!!!!!! IMPORTANT IM COMMENTING THIS TEMP ONLY WHILE WORKING ON THE SERVER SIDE UNCOMMENT AFTER

  app.listen(port, () => console.log(`Listening on port ${port}`));