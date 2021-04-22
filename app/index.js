const Koa = require('koa');
//  引入路由处理
// const router = require('./router/index');
const utils = require('./common/utils');
const MD = require('./middlewares');
const compose = require('koa-compose')
const app = new Koa();

const PORT = '1998';
const HOST = '0.0.0.0';
//  最开始处理
// app.use(async ctx => {
//   ctx.body = 'hello world'
// })

//  新增路由处理 弊端： 路由和路由处理函数写在一起
//  后期难以维护
//  因此 使用koa-router 路由 并新建路由文件夹去处理路由文件
//  
// app.use(async ctx => {
//   const { path } = ctx;
//   if (path === '/a') {
//     ctx.body = 'a'
//   } else if (path === '/b') {
//     ctx.body = 'b'  
//   } else {
//     ctx.body = 'other'
//   }
// })

// //  使用路由
// app.use(router.routes());

// /**
//  *  原先当路由存在 请求方式不匹配的时候 会报404
//  *  加了中间件后 会报请求方式不允许
//  */

// app.use(router.allowedMethods());
app.context.utils = utils;
app.use(compose(MD))
app.on('error', (err, ctx) => {
  if (ctx) {
    ctx.body = {
      code: 9999,
      message: `程序运行时报错：${err.message}`
    };
  }
});
app.listen(PORT, HOST, () => {
  console.log(` serer listening on ${HOST}:${PORT}`)
})