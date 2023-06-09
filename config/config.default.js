/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1679152248496_5597';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    sequelize: {
      username: 'root',
      password: '',
      database: 'chat',
      host: '127.0.0.1',
      dialect: 'mysql',
      logging: false,
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};
