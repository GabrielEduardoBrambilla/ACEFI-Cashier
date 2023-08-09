import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* height: 100vh; */
  gap: 16px;
  font-size: 24px !important;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.COLORS.CONTRAST[100]};

  div {
    p {
      color: ${({ theme }) => theme.COLORS.FONT[200]};

      font-family: Inter;
      font-size: 48px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }
  /* height: 100vh; */
  .logo-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    > img {
      flex-shrink: 0;

      width: 289.365px;
      height: 125.424px;

      font-weight: bold;

      object-fit: cover;
      border-radius: 90px;

      margin: 4px 0 0 0;
    }
  }
  .form-section {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: auto;
    padding: 0 12px;
    padding-bottom: 40px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND[100]};
  }

  @media (min-width: 1023px) {
    display: grid;
    grid-template-columns: 3fr 2fr;
    height: 100vh;

    .logo-section {
      margin: auto;
      > img {
        font-size: 32px;
        width: 586px;
        height: 254px;

        font-weight: bold;

        object-fit: cover;
        border-radius: 90px;

        margin: 4px 0 0 0;
      }
    }
    .form-section {
      display: flex;
      height: 100vh;
      padding: 0 12px;
      padding-bottom: 40px;
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND[100]};
    }
  }
`
