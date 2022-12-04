import * as React from 'react'
import './app.scss'

const App = () => {
  return (
    <div className="App">
      <ul>
        <li style={{ float: "left" }}><a href='#home'>主页</a></li>
        <li><a href='#register'>注册</a></li>
        <li><a href='#login'>登录</a></li>
      </ul>
    </div >
  )
}

export default App
