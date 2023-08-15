import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-template-areas: 'items-wrapper' 'right-section';
  height: 100vh;
  .items-wrapper {
    grid-area: 'items-wrapper';
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin: 15px 0;
    padding: 0 15px;
    align-content: flex-start;
    justify-content: center;
    max-height: 100vh;
    overflow-y: scroll;
  }
  .right-section {
    background-color: ${({ theme }) => theme.COLORS.CONTRAST[100]};
    padding: 50px;
    height: 100vh;
    justify-content: space-between;

    > nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 30px;
      color: ${({ theme }) => theme.COLORS.FONT[200]};
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
