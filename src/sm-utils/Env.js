import config from './Config'


const api = { mainApi: '' }
if (config.env === 0) {// 生产环境
  api.mainApi = ''
} else if (config.env === 1) {// 测试环境
  api.mainApi = ''
} else if (config.env === 2) {// 开发环境
  api.mainApi = 'http://127.0.0.1:8001'
} else {
  api.mainApi = 'http://127.0.0.1:8001'
}
module.exports = api
