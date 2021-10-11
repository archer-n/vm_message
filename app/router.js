'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  // i3 
  router.post('/i3/workspace/:id', controller.i3.workspace);  // workspace
};
