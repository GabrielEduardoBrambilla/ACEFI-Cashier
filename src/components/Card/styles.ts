import styled from 'styled-components'

export const Container = styled.div`
  width: 165px;
  height: 165px;
  padding: 15px 10px 10px 10px;
  position: relative;

  background-color: ${({ theme }) => theme.COLORS.CONTRAST[100]};
  color: ${({ theme }) => theme.COLORS.FONT[100]};

  font-size: 18px;
  font-weight: 500;

  border-radius: 9px;
  /* Black shadow with 10px blur */

  box-shadow: -5px 2px 5px 2px rgba(0, 0, 0, 0.5);

  margin: 12px;
  .counter {
    font-weight: bold;
    font-size: 26px;
    position: absolute;
  }
  > img {
    width: 100%;
    height: 50%;
    object-fit: fill;
    /* background-color: red; */
  }

  .title {
    margin: 10px 0 0 0;
    font-weight: bold;
  }
`
