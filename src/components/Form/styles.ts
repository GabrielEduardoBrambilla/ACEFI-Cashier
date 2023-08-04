import styled from 'styled-components'

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  width: 320px;
  gap: 16px;
  padding: 20px;
  font-size: 24px !important;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND[100]};
  border-radius: 9px;
  > button {
    height: 42px;
    background-color: ${({ theme }) => theme.COLORS.BUTTON[100]};

    border-radius: 60px;

    font-weight: bold;

    margin: 4px 0 0 0;
  }
`
