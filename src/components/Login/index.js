import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import config from '../../sm-utils/Config'
import ajax from '../../utils/ajax'
import Logger from '../../utils/Logger'
import LocalStorage from '../../sm-utils/LocalStorage.js'
import { message } from 'antd'
import './index.less'
import { loginSuccessActionCreator } from '../../redux/Login.js'

const logger = Logger.getLogger('Login')

/**
 * 定义Login组件
 */
class Login extends React.PureComponent {
  
  // 这个login样式是直接从网上找的: https://colorlib.com/wp/html5-and-css3-login-forms/
  // 一般而言公司内部都会提供基于LDAP的统一登录, 用到这个登录组件的场景应该挺少的
  state = {
    userName: '',  // 当前输入的用户名
    password: '',  // 当前输入的密码
    requesting: false // 当前是否正在请求服务端接口
  }
  
  // controlled components
  handleUsernameInput = (e) => {
    this.setState({ userName: e.target.value })
  }
  
  handlePasswordInput = (e) => {
    this.setState({ password: e.target.value })
  }
  
  /**
   * 处理表单的submit事件
   * @param e
   */
  handleSubmit = async (e) => {  // async可以配合箭头函数
    e.preventDefault()  // 这个很重要, 防止跳转
    this.setState({ requesting: true })
    const hide = message.loading('正在登录...', 0)
    const username = this.state.userName
    const password = this.state.password
    logger.debug('username = %s, password = %s', username, password)
    try {
      // 服务端验证
      const res = await ajax.login(username, password)
      hide()
      logger.debug('login validate return: result %o', res)
      if (res.code === 200) {
        message.success('登录成功')
        LocalStorage.set('user', res.data)
        this.props.handleLoginSuccess(res.data)
      } else {
        message.error(`${res.msg}`)
        this.setState({ requesting: false })
      }
    } catch (exception) {
      hide()
      message.error(`网络请求出错: ${exception.message}`)
      logger.error('login error, %s', exception)
      this.setState({ requesting: false })
    }
  }
  
  render() {
    return (
      <div id="loginDIV" >
        <div className="login" >
          <h1 >{config.sysName}</h1 >
          <form onSubmit={this.handleSubmit} >
            <input className="login-input" type="text"
                   value={this.state.userName}
                   onChange={this.handleUsernameInput}
                   placeholder="用户名" required="required" />
            <input className="login-input" type="password"
                   value={this.state.password}
                   onChange={this.handlePasswordInput} placeholder="密码" required="required" />
            <button className="btn btn-primary btn-block btn-large" type="submit"
                    disabled={this.state.requesting} >
              登录
            </button >
          </form >
        </div >
      </div >
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleLoginSuccess: bindActionCreators(loginSuccessActionCreator, dispatch)
  }
}

const mapStateToProps = (state) => {
  logger.debug('state = %s', JSON.stringify(state))
  return ({
    userName: state.userName,
    password: state.password
  })
}

// 不需要从state中获取什么, 所以传一个null
export default connect(mapStateToProps, mapDispatchToProps)(Login)
