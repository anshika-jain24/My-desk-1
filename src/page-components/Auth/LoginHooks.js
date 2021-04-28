import React from 'react';
import { useGoogleLogin } from 'react-google-login';
import { useHistory } from "react-router-dom";
import google from '../../assets/images/google.png';
import './styles.css'

const clientId =
  '707788443358-u05p46nssla3l8tmn58tpo9r5sommgks.apps.googleusercontent.com';

function LoginHooks() {
  const history = useHistory();

  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    history.push("/desk");
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert(
      `Failed to login!`
    );
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: 'offline',
  });

  return (
    <div className="login_container">
      <button onClick={signIn} className="login_button">
        <img src={google} alt="google login" height="40px" width="40px"></img>
        <span className="login_span">Sign in with Google</span>
      </button>
    </div>
  );
}

export default LoginHooks;