const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const compression = require('compression');
const path = require('path');
const database = require('./database');
const port = process.env.PORT || 8080;

const createApp = () => {
  app.use(morgan('dev'));

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));

  app.use(compression());

  app.use('/api', require('./api'));

  app.use(express.static(path.resolve(__dirname, '..', 'node_modules')));
  app.use(express.static(path.resolve(__dirname, '..', 'public')));

  app.use((req, res, next) => {
    if (path.extname(req.path).length) {
      const err = new Error('The request is invalid!');

      err.status = 404;

      next(err);
    } else {
      next();
    }
  });

  app.use('*', (req, res) => res.sendFile(path.resolve(__dirname, '..', 'public/index.html')));

  app.use((err, req, res, next) => {
    console.error(err.stack);

    res.status(err.status || 500).send(err.message || 'Internal server error.');
  });
};

const syncDatabase = () => database.sync();

const startListening = () => {
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}!`);
  });
};

module.exports = {
  createApp,
  syncDatabase,
  startListening
};
