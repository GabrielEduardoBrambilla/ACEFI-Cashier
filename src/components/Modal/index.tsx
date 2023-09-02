import { CloseButton, ModalContainer, ModalOverlay } from './styles'
import React, { ReactNode } from 'react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
}
export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        {children}
      </ModalContainer>
    </ModalOverlay>
  )
}
