import React, { ReactNode, useEffect, useRef, KeyboardEvent } from 'react'
import { CloseButton, ModalContainer, ModalOverlay } from './styles'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  // const handleClickOutside = (
  //   event: React.MouseEvent<HTMLDivElement, MouseEvent>
  // ) => {
  //   if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
  //     onClose()
  //   }
  // }

  const handleClickOutside = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (event.target === modalRef.current) {
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <ModalOverlay ref={modalRef} onClick={handleClickOutside}>
      <ModalContainer>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        {children}
      </ModalContainer>
    </ModalOverlay>
  )
}
