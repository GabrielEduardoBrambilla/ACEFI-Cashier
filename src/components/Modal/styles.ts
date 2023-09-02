import styled from 'styled-components'

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

export const ModalContainer = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  max-width: 80%;
  width: 400px;
  padding: 16px;
`

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  top: 8px;
  right: 8px;
  font-size: 18px;
  cursor: pointer;
`
