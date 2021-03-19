import React from 'react';
import '../Styles/Login.css';
import LoginHooks from './LoginHooks';
// import LogoutHooks from './LogoutHooks';

function Login() {
  return (
    <div className="Login-card">
      <LoginHooks />
      {/* <LogoutHooks /> */}
    </div>
  );
}

export default Login;