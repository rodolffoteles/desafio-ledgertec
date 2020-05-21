const express = require('express');
require('express-async-errors');
const productRouter = require('./routes');

const PORT = process.env.PORT || 3000;

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/products', productRouter);

// Error handler
app.use(async (err, req, res, next) => {
  if (process.env.NODE_ENV === 'development'){
    return res.status(500).json(err);
  } else {
    return res.status(500).end();
  }
});

app.listen(PORT, () => console.log(`Listening at port ${PORT}`));