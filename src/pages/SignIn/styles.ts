import styled from 'styled-components'

export const Container = styled.form`
  display: flex;
  gap: 16px;
  padding: 20px;
  font-size: 24px !important;
  align-items: center;
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
`
