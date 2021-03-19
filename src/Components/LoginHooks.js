import React from 'react';
import { useGoogleLogin } from 'react-google-login';
// import { Redirect } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import google from '../assets/images/google.png';
import '../Styles/Login.css';

// refresh token
// import { refreshTokenSetup } from '../utils/refreshToken';

const clientId =
  '707788443358-u05p46nssla3l8tmn58tpo9r5sommgks.apps.googleusercontent.com';

function LoginHooks() {
  const history = useHistory();

  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    // <div class="alert alert-success">Logged in successfully welcome ${res.profileObj.name}</div>
    // alert(
    //   `Logged in successfully welcome ${res.profileObj.name}`
    // );
    // <Redirect to="/desk"></Redirect>
    // refreshTokenSetup(res);
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
    // responseType: 'code',
    // prompt: 'consent',
  });

  return (
    <div class='Card'>
      <button onClick={signIn} className="button">
        <img src={google} alt="google login" className="icon"></img>
        <span className="buttonText">Sign in with Google</span>
      </button>
    </div>
  );
}

export default LoginHooks;