import React, { useState } from 'react';
import axios from 'axios';
import './index.scss';

// 参考 https://codesandbox.io/s/react-demo-11-13-ptfex?file=/src/login.js:1189-1358

function Login() {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const userLogin = async () => {
    const postData = {
      email: userEmail,
      password: userPassword,
    };
    try {
      const res = await axios.post('/api/auth/login', postData);
      console.log(res.data.data.token);
      axios.defaults.headers.common.Authorization = `Bearer ${res.data.data.token}`;
      console.log(await axios.get('/api/auth/info'));
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
      console.log(error.config);
    }
  };

  return (
    <div className="login">
      <h2>欢迎光临</h2>
      <form className="form">
        <div className="formItem">
          <label htmlFor="eamil">
            邮箱：
          </label>
          <input
            type="text"
            id="eamil"
            value={userEmail}
            onChange={(e) => {
              setUserEmail(e.currentTarget.value);
            }}
          />
        </div>
        <div className="formItem">
          <label htmlFor="password">
            密码：
          </label>
          <input
            type="password"
            id="password"
            value={userPassword}
            onChange={(e) => {
              setUserPassword(e.currentTarget.value);
            }}
          />
        </div>
        <div
          role="presentation"
          className="loginBtn"
          onClick={userLogin}
        >
          登录
        </div>
      </form>
    </div>
  );
}

export default Login;
