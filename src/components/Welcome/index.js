import React from 'react'
import './index.less'

/**
 * 展示欢迎界面
 */
class Welcome extends React.PureComponent {
  
  render() {
    return (
      <div >
        <h1 className="welcome-text" >
          盘古系统
        </h1 >
        <p >
          一站式应用管理。
        </p >
      </div >
    )
  }
  
}

export default Welcome
