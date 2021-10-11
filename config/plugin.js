'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  static: {
    enable: true,
  },
  swagger: {
    enable: true,
    package: 'egg-swagger-jsdoc',
  },
};
