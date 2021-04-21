// 公共middlewares 处理

const router = require('../router');
const koaBody = require('koa-bodyparser');

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


module.exports = [
  MDKoaBody,
  MDRoute,
  MDROuterAllowed,

];