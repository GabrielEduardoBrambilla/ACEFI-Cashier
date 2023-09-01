import styled from 'styled-components'

export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 30px;
  color: ${({ theme }) => theme.COLORS.FONT[200]};
  margin: 5px;
  svg {
    cursor: pointer;
    &:active {
      opacity: 0.8;
    }
    &:hover {
      opacity: 0.8;
    }
  }
  .store-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-size: 20px;
    font-family: Inter;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`
