

const list = async ctx => {
  // const b = a;
  ctx.body = 'θΏεη»ζ'
}
const postBody = async ctx => {
  console.log(ctx.request.body)
  ctx.body = ctx.request.body;
}

module.exports = {
  list,
  postBody
}