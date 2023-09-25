import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Play () {
  const [playerChoice, setPlayerChoice] = useState(null);
  const navigate = useNavigate();

  const handleChoice = (choice) => {
    setPlayerChoice(choice);
    navigate('/game');
  };

  return (
    <div className="play">
      <div className="topDiv">
        <button onClick={() => handleChoice('papel')}>Papel</button>
        <button onClick={() => handleChoice('pedra')}>Pedra</button>
      </div>
      <div>
        <button onClick={() => handleChoice('tesoura')}>Tesoura</button>
      </div>
    </div>
  );
};

export default Play;
