require('dotenv').config();

module.exports = app => {
  const env = app.config.env;
  if (env === 'local') {
    app.beforeStart(async () => {
      await app.model.sync();
    });
  }
};
