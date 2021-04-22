
const KoaRouter = require('koa-router');

const router = new KoaRouter();
// 弊端： 当接口越来越多的时候， 业务处理逻辑越来越复杂 router 文件就会越来越大
//  目标： router 只处理 路由相关逻辑， 具体业务逻辑处理并不关心
// router.get('/a', ctx => {
//   ctx.body = 'a'
// })

// router.get('/b', ctx => {
//   ctx.body = 'b'
// })
// router.get('/c', ctx => {
//   ctx.body = 'c'
// })

// 新逻辑修改

const routerList = require('./routers');

const paramValidator = require('../middlewares/paramValidator');

routerList.forEach(item => {
  const { method, path, controller, valid } = item;
  router[method](path, paramValidator(valid) ,controller);
})

module.exports = router