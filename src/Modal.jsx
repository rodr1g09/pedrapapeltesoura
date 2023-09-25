import React from 'react';


// Este componente agora usa a propriedade isOpen para determinar se o modal deve ser exibido.
const rulesModal = ({ isOpen, onClose }) => {

  // Função para fechar o modal
  const closeModal = () => {
    onClose();
  };

  return (
    // Renderiza o modal apenas se isOpen for verdadeiro
    isOpen && (
      <div className="modal">
        <div className="modal-content">
          <h2>Regras do Jogo</h2>
          <p>1. Não é permitido mostrar pedra duas vezes seguidas.</p>
          <p>2. Se dois jogadores fizerem o mesmo gesto, ocorre um empate.</p>
          <button onClick={closeModal}>Fechar</button>
        </div>
      </div>
    )
  );
};

export default rulesModal;
