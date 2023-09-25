import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Play from './play';
import Game from './Game';
import Footer from './Footer';
import './App.css';

function App() {
  const [score, setScore] = useState(0); // Estado para armazenar a pontuação
  const [playerChoice, setPlayerChoice] = useState(''); // Estado para armazenar a escolha do jogador

  const updateScore = (newScore) => {
    setScore(newScore);
  };

  // Função para atualizar a escolha do jogador e iniciar o jogo
  const playGame = (choice) => {
    setPlayerChoice(choice); // Define a escolha do jogador
  };

  return (
    <Router>
      <div className="App">
        <Header score={score} /> {/* Passa a pontuação como propriedade para o Header */}
        <Routes>
          <Route exact path="/" element={<Play playGame={playGame} />} /> {/* Rota para o componente Play */}
          <Route path="/game" element={<Game playerChoice={playerChoice} updateScore={updateScore}/>} /> {/* Rota para o componente Game */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
