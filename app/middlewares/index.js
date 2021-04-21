// 公共middlewares 处理

const router = require('../router');
const koaBody = require('koa-bodyparser');
const cors = require('@koa/cors');

const response = require('./response');
const error = require('./error');
const log = require('./log');

/**
 * 参数解析
 */
const MDKoaBody = koaBody({
  enableTypes: ['json', 'form', 'text', 'xml'],
  formLimit: '56kb',
  jsonLimit: '1mb',
  textLimit: '1mb',
  xmlLimit: '1mb',
  strict: true
});
/**
 * 路由处理
 */
const MDRoute = router.routes();
const MDROuterAllowed = router.allowedMethods();

//  统一处理
const MDHandleRes = response();
const MDHandleErr = error();
/**
 * 跨域设置
 */
const MDCors = cors({
  origin: '*',
  credentials: true,
  allowMethods: [ 'GET', 'HEAD', 'PUT', 'POST', 'DELETE', 'PATCH' ]
});
/**
 * 日志
 */

const MDLogger = log();
module.exports = [
  MDKoaBody,
  MDCors,
  MDLogger,
  MDHandleRes,
  MDHandleErr,
  MDRoute,
  MDROuterAllowed,

];