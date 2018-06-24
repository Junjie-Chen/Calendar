const router = require('express').Router();

router.use('/events', require('./events'));

router.use((req, res, next) => {
  const error = new Error('The request is invalid!');

  error.status = 404;

  next(error);
});

module.exports = router;
