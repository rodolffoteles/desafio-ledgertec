const express = require('express');
const cors = require('cors');
require('express-async-errors');
const router = require('./routes');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use(router);

// Error handler
app.use(async (err, req, res, next) => {
  if (process.env.NODE_ENV === 'development'){
    return res.status(500).json(err);
  } else {
    return res.status(500).end();
  }
});

module.exports = app;