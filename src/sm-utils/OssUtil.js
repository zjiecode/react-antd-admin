const OSS = require('ali-oss')
const client = new OSS({
  region: 'oss-cn-qingdao',
  accessKeyId: 'LTAIRH4fSzNRUWng',
  accessKeySecret: 'u050nmlOw9IwwS8dY82gipHKIuQbQg',
  endpoint: 'oss-cn-qingdao.aliyuncs.com',
  bucket: 'zjiecode-test'
})

module.exports = client
