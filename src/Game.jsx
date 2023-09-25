import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Game = ({ playerChoice, updateScore }) => {
  const [player1, setPlayer1] = useState(''); // Inicialize player1 com a escolha do jogador
  const [player2, setPlayer2] = useState(''); // Estado para armazenar a escolha do Jogador 2 (Máquina)
  const [result, setResult] = useState(''); // Estado para armazenar o resultado do jogo

  const choices = ['pedra', 'papel', 'tesoura']; // Possíveis escolhas

  const player2Choice = () => {
    // Lógica para determinar a escolha do Jogador 2 (Máquina)
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setPlayer2(randomChoice); // Define a escolha do Jogador 2 (Máquina)
  };

  const gameResult = () => {
    // Lógica para determinar o resultado do jogo
    if (player1 === player2) {
      setResult('Empate!'); // Empate
    } else if (
      (player1 === 'pedra' && player2 === 'tesoura') ||
      (player1 === 'papel' && player2 === 'pedra') ||
      (player1 === 'tesoura' && player2 === 'papel')
    ) {
      setResult('Você Ganhou!'); // Jogador 1 ganha
      updateScore(score + 1); // Incrementa a pontuação do Jogador 1
    } else {
      setResult('Você Perdeu!'); // Jogador 2 (Máquina) ganha
    }
  };

  // hook useEffect será executado quando o componente for montado
  useEffect(() => {
    setPlayer1(playerChoice);  // Exibe o valor atualizado de playerChoice
    player2Choice();
    gameResult();
  }, [playerChoice]); 
  
  console.log(playerChoice);

  const navigate = useNavigate();

  const playAgain = () => {
    // Limpar escolhas e resultado para jogar novamente
    setPlayer1(''); 
    setPlayer2('');
    setResult('');
    // Navegar para a página inicial
    navigate('/');
  };

  return (
    <div className="game">
      <div>
        <p>Player1</p>
          {player1}
      </div>
      <div>
        <p>{result}</p>
        <button onClick={playAgain}>Jogar<br/>Denovo</button>
      </div>
      <div>
        <p>Player2<br/>(Máquina)</p>
          {player2}
      </div>
    </div>
  );
};

export default Game;
