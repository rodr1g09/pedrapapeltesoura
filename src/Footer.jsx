import React, { useState } from 'react';
import Modal from './Modal';

const Footer = () => {
  const [modalOpen, setModalOpen] = useState(false);

  // Função para abrir o modal
  const openModal = () => {
    setModalOpen(true);
  };

  // Função para fechar o modal
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="footer">
      <button onClick={openModal}>Regras</button>
      <Modal isOpen={modalOpen} onClose={closeModal} />
    </div>
  );
};

export default Footer;