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

  .logo-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    margin: 10px;
    p {
      color: ${({ theme }) => theme.COLORS.FONT[200]};

      font-family: Inter;
      font-size: 48px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
    > img {
      align-self: center;
      flex-shrink: 0;
      width: 95%;
      margin: 0 0 0 10px;
      max-width: 489.365px;
      max-height: 225.424px;

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
