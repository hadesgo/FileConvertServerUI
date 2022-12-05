import React from 'react';
import './index.scss';

// 参考 https://codesandbox.io/s/react-demo-11-13-ptfex?file=/src/login.js:1189-1358

function Login() {
  return (
    <div className="login">
      <h2>欢迎光临</h2>
      <form className="form">
        <div className="formItem">
          <label htmlFor="username">
            用户名：
          </label>
          <input type="text" id="username" />
        </div>
        <div className="formItem">
          <label htmlFor="password">
            密码：
          </label>
          <input
            type="password"
            id="password"
            onChange={(e) => { }}
          />
        </div>
        <div
          role="presentation"
          className="loginBtn"
          onClick={() => {

          }}
        >
          登录
        </div>
      </form>
    </div>
  );
}

export default Login;
