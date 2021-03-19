import React from 'react';
import '../Styles/Login.css';
import LogoutHooks from './LogoutHooks';
// import LogoutHooks from './LogoutHooks';

function Logout() {
  return (
    <div className="Login-card">
      {/* <LoginHooks /> */}
      <LogoutHooks />
    </div>
  );
}

export default Logout;