

const list = async ctx => {
  // const b = a;
  ctx.body = '返回结果'
}
const postBody = async ctx => {
  console.log(ctx.request.body)
  ctx.body = ctx.request.body;
}

module.exports = {
  list,
  postBody
}