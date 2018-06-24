const {createApp, syncDatabase, startListening} = require('./app');

if (require.main === module) {
  syncDatabase()
  .then(createApp)
  .then(startListening);
}
