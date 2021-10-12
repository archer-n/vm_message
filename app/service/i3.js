'use strict';

const Service = require('egg').Service;

const util = require('util');
const child_process = require('child_process');
const exec = util.promisify(child_process.exec);
const fs = require('fs');


const I3SOCK = Symbol.for('I3Service#I3SOCK');

class I3Service extends Service {

  // systemd 开机自启动拿不到I3SOCK变量，这里自己去拿一次
  get I3SOCK() {
    if (!this.app[I3SOCK]) {
      try {
        // directory path
        const dir = '/run/user/1000/i3/';
        const files = fs.readdirSync(dir);
        this.ctx.logger.info('files: %j', files);
        // files object contains all files names
        // log them on console
        for (const file of files) {
          if (file.startsWith('ipc-socket')) {
            this.app[I3SOCK] = dir + file;
            break;
          }
        }
      } catch (err) {
        this.ctx.logger.error(err);
      }
    }
    return this.app[I3SOCK];
  }

  /**
   * i3-msg - send messages to i3 window manager
   * @param {string} message Send ipc message, see `man i3-msg`
   * @returns Promise<any> result
   */
  async i3msg(message) {
    const command = `i3-msg -s ${this.I3SOCK} ${message}`;
    this.ctx.logger.info('command: %s', command);
    return await exec(command);
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

