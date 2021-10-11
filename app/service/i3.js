'use strict';

const Service = require('egg').Service;

const util = require('util');
const child_process = require('child_process');
const exec = util.promisify(child_process.exec);


class I3Service extends Service {

  /**
   * i3-msg - send messages to i3 window manager
   * @param {string} message Send ipc message, see `man i3-msg`
   * @returns Promise<any> result
   */
  async i3msg(message) {
    const command = 'i3-msg ' + message;
    this.ctx.logger.info('command: %s', command);
    return exec(command);
  }

  /**
   * i3-msg workspace $id
   * @param {string} id id
   * returns {void}
   */
  async workspace(id) {
    await this.i3msg(`workspace ${id}`);
  }
}

module.exports = I3Service;

