import React from 'react';

const loading = () => {
  const loaderStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontSize: '24px',
    color: '#ffffff',
    background: '#000000',
  };

  const spinnerStyle = {
    display: 'inline-block',
    width: '50px',
    height: '50px',
    borderTop: '5px solid #ffffff',
    borderRight: '5px solid transparent',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  };

  return (
    <div style={loaderStyle}>
      <div style={spinnerStyle}></div>
      <span style={{ marginLeft: '10px' }}>Loading...</span>
    </div>
  );
};

export default loading;
