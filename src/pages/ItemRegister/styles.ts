import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  height: 100vh;
  .right-section {
    background-color: ${({ theme }) => theme.COLORS.CONTRAST[100]};
    padding: 50px;
    height: 100vh;
    justify-content: space-between;

    > nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 50px;
      color: ${({ theme }) => theme.COLORS.FONT[200]};
      .store-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        font-size: 20px;
        font-family: Inter;
        font-size: 26px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
      }
    }
    .form-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      > div {
        > form {
        }
      }
    }
  }
`
