import React from 'react';
import { usersLoading } from '../features/usersSlice';
import { useAppDispatch, useAppSelector } from '../hooks';
import './index.scss';

function App() {
  const dispatch = useAppDispatch();

  const updateUserInfo = () => {
    dispatch(
      usersLoading({
        isLogin: true,
        userEmail: '871886736@qq.com',
        userName: 'hadesgo',
        token: 'xxxxxxx',
      }),
    );
  };

  return (
    <div className="App">
      <div style={{ display: 'flex' }}>
        <ul>
          <li style={{ float: 'left' }}><a href="#home">主页</a></li>
          <li><a href="#register">注册</a></li>
          <li><a href="#login">登录</a></li>
        </ul>
      </div>
      <div style={{ display: 'flex' }}>
        <button type="button" onClick={updateUserInfo}>更新用户信息</button>
        <p style={{ color: 'white' }}>{useAppSelector((state) => state.users.userName)}</p>
      </div>
    </div>
  );
}

export default App;
