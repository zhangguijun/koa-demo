

const list = async ctx => {
  ctx.body = '路由改造后结果'
}
const postBody = async ctx => {
  console.log(ctx.request.body)
  ctx.body = ctx.request.body;
}

module.exports = {
  list,
  postBody
}