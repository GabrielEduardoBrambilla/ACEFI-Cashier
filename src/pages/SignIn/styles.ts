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

  .text-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: left;
  }
  .logo-section {
    display: flex;
    /* flex-direction: column; */
    justify-content: center;
    align-items: center;
    height: 100%;

    .logo-text {
      display: flex;
      justify-content: left;
      color: ${({ theme }) => theme.COLORS.FONT[200]};
      width: 100%;
      gap: 20px;
      letter-spacing: normal;
      font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
      font-size: 48px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
    > img {
      justify-content: center;
      width: 400px;
      min-height: 400px;
      object-fit: contain;
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

  @media (min-width: 723px) {
    display: grid;
    grid-template-columns: 3fr 2fr;
    height: 100vh;

    .logo-section {
      margin: auto;
      > img {
        font-size: 32px;

        height: 254px;
        max-width: 586px;
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
