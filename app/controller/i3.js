'use strict';

const Controller = require('egg').Controller;

/**
 * @swagger
 * tags:
 *   name: I3Controller
 *   description: 处理虚拟机发送i3的相关指令
 */
class I3MsgController extends Controller {

  get I3Service() {
    return this.ctx.service.i3;
  }

  /**
   * @swagger
   * /i3/workspace/{id}:
   *   post:
   *     summary: i3-msg workspace $id
   *     tags:
   *       - I3Controller
   *     parameters:
   *       - in: path
   *         name: id
   *         type: string
   *         description: workspace id
   *         required: true
   *     response:
   *       200:
   *         description: ok
   */
  async workspace() {
    const id = this.ctx.params.id; // 获取虚拟机id
    this.ctx.body = await this.I3Service.workspace(id);
  }
}

module.exports = I3MsgController;
