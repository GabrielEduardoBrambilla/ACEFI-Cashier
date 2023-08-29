import styled, { css } from 'styled-components'

export const Container = styled.div<{ deleteHover?: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100px;
  height: 100px;
  padding: 15px 10px 10px 10px;
  position: relative;

  background-color: ${({ theme }) => theme.COLORS.CONTRAST[100]};
  color: ${({ theme }) => theme.COLORS.FONT[100]};

  font-size: 12px;
  font-weight: 500;

  border-radius: 9px;
  /* Black shadow with 10px blur */

  box-shadow: -5px 2px 5px 2px rgba(0, 0, 0, 0.5);
  cursor: pointer;

  .counter {
    font-weight: bold;
    font-size: 18px;
    position: absolute;
  }
  > img {
    width: 100%;
    height: 50%;
    background-color: transparent;
    object-fit: fill;
  }

  > p {
    text-transform: capitalize;
  }
  .title {
    margin: 10px 0 0 0;
    font-weight: bold;
  }

  ${props =>
    props.deleteHover &&
    css`
      &:hover {
        > svg {
          display: flex;
          position: absolute;
          align-items: center;
          justify-content: center;
          top: 25%;
          left: 25%;
          font-size: 45px;
          border-radius: 50px;
        }
        background-color: ${({ theme }) => theme.COLORS.CONTRAST[100]};
        &:active {
          background-color: ${({ theme }) => theme.COLORS.RED[100]};
        }
      }
    `}
`
