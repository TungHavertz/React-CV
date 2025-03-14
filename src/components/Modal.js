import React from 'react'
import '../styles/modal.css'
function Modal(props) {
  const { modal, setModal } = props

  const checkModal = (idModal) => {
    let classModal = 'modal-item__' + idModal
    if (idModal === modal) {
      classModal = classModal + ' active';
    }
    return classModal;
  }

  const handleCloseClick = () => {
    setModal('')
  }
  

  return (
    <div 
      className={`modal-bg ${modal ? 'active' : ''}`}
      onClick={handleCloseClick}   
    >
      <div className={checkModal('html')}>
        
      </div>
      <div className={checkModal('respon')}>
        
      </div>
      <div className={checkModal('js')}>
        
      </div>
      
    </div>
  )
  
}

export default Modal