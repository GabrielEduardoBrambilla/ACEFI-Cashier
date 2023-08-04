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
    > img {
      width: 586px;
      height: 254px;
      object-fit: fit;
      background-color: ${({ theme }) => theme.COLORS.BUTTON[100]};

      border-radius: 60px;

      font-weight: bold;

      margin: 4px 0 0 0;
    }
  }
  .section-2 {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: auto;
    padding: 0 12px;
    padding-bottom: 40px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND[100]};
  }
  form {
  }
`
