import React from 'react';

const Header = ({ score }) => {
  return (
    <div className="header">
      <h2>Pedra<br/>Papel<br/>Tesoura</h2>
      <div>
        <h2>Score</h2>
        {score}
      </div>
    </div>
  );
};

export default Header;

