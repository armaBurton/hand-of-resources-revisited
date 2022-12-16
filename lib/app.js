const express = require('express');

const app = express();

// Built in middleware
app.use(express.json());

// App routes
app.use('/api/v1/tmnt', require('./controllers/tmnts'));
app.use('/', (req, res) => {
  res.send('<h1 style="font-family: sans-serif">Setup Successful</h1>');
});

// Error handling & 404 middleware for when
// a request doesn't match any app routes
app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
