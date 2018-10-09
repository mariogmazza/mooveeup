const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

require('dotenv').config()
const handle = require('./handlers')

// API calls
app.get('/api/hello', (req, res) => {
  res.send({
    express: 'Hello From Express'
  });
});

app.get('/', (req, res) =>
  res.json({
    hello: 'pepe'
  }))


app.use(handle.notFound)
app.use(handle.errors)

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));

  // Handle React routing, return all requests to React app
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));