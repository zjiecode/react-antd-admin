import fly from 'flyio'
import env from './Env'
import ls from './LocalStorage'


fly.interceptors.request.use((request) => {
  //给所有请求添加自定义header
  let user = ls.get('user')
  if (user) {
    request.headers['token'] = ls.get('user').token
  }
  return request
})

/**
 * 网络请求封装
 */
module.exports = {
  get(path, params) {
    return new Promise((resolve, reject) => {
      fly.get(`${env.mainApi}${path}`, params).then(value => {
        if (value.data.code === 200) {
          resolve(value.data.data)
        } else {
          reject(value.data)
        }
      }).catch(() => {
        reject({ code: 400, msg: '网络错误' })
      })
    })
  },
  post(path, params) {
    return new Promise((resolve, reject) => {
      fly.post(`${env.mainApi}${path}`, params).then(value => {
        if (value.data.code === 200) {
          resolve(value.data.data)
        } else {
          reject(value.data)
        }
      }).catch(() => {
        reject({ code: 400, msg: '网络错误' })
      })
    })
  },
  put(path, params) {
    return new Promise((resolve, reject) => {
      fly.put(`${env.mainApi}${path}`, params).then(value => {
        if (value.data.code === 200) {
          resolve(value.data.data)
        } else {
          reject(value.data)
        }
      }).catch(() => {
        reject({ code: 400, msg: '网络错误' })
      })
    })
  },
  delete(path, params) {
    return new Promise((resolve, reject) => {
      fly.delete(`${env.mainApi}${path}`, params).then(value => {
        if (value.data.code === 200) {
          resolve(value.data.data)
        } else {
          reject(value.data)
        }
      }).catch(() => {
        reject({ code: 400, msg: '网络错误' })
      })
    })
  }
}
