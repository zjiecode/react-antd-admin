import config from './config';


const api = { mainApi: '' }
// 这个写法总觉得有点奇怪...不知道webpack会不会优化掉
if (config.env === 0) {//生产环境
  api.mainApi = '';
} else if (config.env === 1) {//测试环境
  api.mainApi = '';
} else if (config.env === 2) {//开发环境
  api.mainApi = 'http://127.0.0.1:8001';
} else {
  api.mainApi = 'http://127.0.0.1:8001';
}
module.exports = api;
