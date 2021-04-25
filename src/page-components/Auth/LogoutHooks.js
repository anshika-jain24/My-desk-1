import React from 'react';
import { useGoogleLogout } from 'react-google-login';
import { useHistory } from "react-router-dom";
import google from '../../assets/images/google.png';
import '../../Styles/Login.css';

const clientId =
  '707788443358-u05p46nssla3l8tmn58tpo9r5sommgks.apps.googleusercontent.com';

function LogoutHooks() {
  const history = useHistory();

  const onLogoutSuccess = (res) => {
    console.log('Logged out Success');
    history.push("/");
  };

  const onFailure = () => {
    console.log('Handle failure cases');
  };

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure,
  });

  return (
    <button onClick={signOut} style={{backgroundColor: 'whitesmoke', border: '0px', color: 'black'}}>
      {/* <img src={google} alt="google login" className="icon"></img> */}

      <span style={{fontSize: '18px'}}>Sign Out</span>
    </button>
  );
}

export default LogoutHooks;
