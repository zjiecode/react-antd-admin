/**
 * 本地存储 localStorage工具类
 */
const LS = window.localStorage

module.exports = {
  /**
   * 获取一个值
   * @param key
   * @returns {*}
   */
  get: (key) => {
    if (LS) {
      const value = LS.getItem(key)
      if (value) {
        return JSON.parse(value)
      }
    }
    return null
  },
  
  /**
   * 保存一个值
   * @param key
   * @param value
   */
  set: (key, value) => {
    if (LS) {
      LS.setItem(key, JSON.stringify(value))
    }
  },
  /**
   * 删除一个值
   * @param key
   */
  remove: (key) => {
    if (LS) {
      LS.removeItem(key)
    }
  },
  
  /**
   * 清空本地存储
   */
  clear: () => {
    if (LS) {
      LS.clear()
    }
  }
  
}
