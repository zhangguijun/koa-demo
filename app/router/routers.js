const { test } = require('../controllers');


const routers = [
  {
    method: 'get',
    path: '/a',
    controller: test.list
  }, 
  {
    method: 'post',
    path: '/b',
    controller: test.postBody
  }
] 

module.exports = routers