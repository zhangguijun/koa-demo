const { test } = require('../controllers');
const { schTest } = require('../schema')


const routers = [
  {
    method: 'get',
    path: '/a',
    controller: test.list,
    valid: schTest.list,
  }, 
  {
    method: 'post',
    path: '/b',
    controller: test.postBody
  }
] 

module.exports = routers