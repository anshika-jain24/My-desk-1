import React from 'react';
import { useGoogleLogout } from 'react-google-login';
import { useHistory } from "react-router-dom";

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
    <button onClick={signOut}>
      <span>Sign Out</span>
    </button>
  );
}

export default LogoutHooks;
