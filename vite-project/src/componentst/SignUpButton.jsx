import React from 'react';

function SignUpButton({ onClick }) {
  return (
    <button className="signup-button" onClick={onClick}>
      Sign Up
    </button>
  );
}

export default SignUpButton;
