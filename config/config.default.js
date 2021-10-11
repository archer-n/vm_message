/* eslint valid-jsdoc: "off" */

'use strict';


function isInnerIp(ctx, ip) {
  const _isInnerIp = true;
  if (!_isInnerIp) {
    ctx.logger.info('isInnerIp: %j', ip);
  }
  return _isInnerIp;
}

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
  config.keys = appInfo.name + '_1633930336755_6281';

  // add your middleware config here
  config.middleware = [];


  config.security = {
    csrf: {
    // 判断是否需要 ignore 的方法，请求上下文 context 作为第一个参数
      ignore: ctx => isInnerIp(ctx, ctx.ip),
    },
  };


  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.swagger = {
    swaggerDefinition: {
      info: {
        // API informations (required)
        title: '监听虚拟机发送的指令-node实现', // Title (required)
        version: '1.0.0', // Version (required)
        description: '监听虚拟机发送的指令', // Description (optional)
        contact: {
          name: 'archer',
          url: '',
          email: 'lazyarcher.wang@gmail.com',
        },
      },
    },
    apis: [
      './app/controller/**.js',
      './app/swagger/schemas/**.yaml',
      './app/swagger/parameters/**.yaml',
    ],
  };

  return {
    ...config,
    ...userConfig,
  };
};
