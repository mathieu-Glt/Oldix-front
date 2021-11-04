import React from 'react';
import { useState } from 'react';
import './modal.scss';
// const [show, setShow] = useState(false);
// export function handleClose () {setShow(false)}
// export function handleShow () {setShow(true)}

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
