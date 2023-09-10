import styled, { css } from 'styled-components'

export const Container = styled.div<{ deleteHover?: boolean }>`
  display: flex;
  flex-direction: column;
  width: 150px;
  height: 150px;
  gap: 10px;
  padding: 10px;
  position: relative;

  background-color: ${({ theme }) => theme.COLORS.CONTRAST[100]};
  color: ${({ theme }) => theme.COLORS.FONT[100]};

  font-size: 14px;
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
    background-color: red;
    object-fit: fill;
  }
  > .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50%;
    font-size: 40px;
    color: red;
    object-fit: fill;
  }

  .text {
    overflow: hidden;
  }
  > p {
    text-transform: capitalize;
  }
  .title {
    font-weight: bold;
    height: 18px;
    width: 100px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.GREEN};
    opacity: 0.9;
    &:active {
      opacity: 1;
    }
  }

  > svg {
    display: none;
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
