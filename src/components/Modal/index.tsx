import { CloseButton, ModalContainer, ModalOverlay } from './styles'
import React, { ReactNode } from 'react'

interface ModalProps {
  isOpen: boolean
  children: ReactNode
}
export const Modal: React.FC<ModalProps> = ({ isOpen, children }) => {
  if (!isOpen) return null

  function onClose() {
    isOpen = false
  }

  return (
    <ModalOverlay>
      <ModalContainer>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        {children}
      </ModalContainer>
    </ModalOverlay>
  )
}
