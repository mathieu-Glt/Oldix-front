import React from 'react';
import { useState } from 'react';
import './modal.scss';


const Modal = ({ showModal, children, closeModal }) => {

  return (
    showModal && (
      <div className="modal" onClick = { closeModal }>       
        { children }
      </div>
    )
  )
}

export default Modal;
