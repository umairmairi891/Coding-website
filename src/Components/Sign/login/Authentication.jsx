import React, { useState } from 'react';
import Register from './Register';
import Login from './Login';
const AuthContainer = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const switchToSignUp = () => {
    setIsSignUp(true);
  };

  const switchToLogin = () => {
    setIsSignUp(false);
  };

  return (
    <div className="auth-wrapper">
      {isSignUp ? (
        <Register onSwitchToLogin={switchToLogin} />
      ) : (
        <Login onSwitchToSignUp={switchToSignUp} />
      )}
    </div>
  );
};

export default AuthContainer;
