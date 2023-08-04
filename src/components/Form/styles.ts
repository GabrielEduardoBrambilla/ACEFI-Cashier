import styled from 'styled-components'

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
  padding: 20px 0;
  font-size: 24px !important;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND[100]};
  border-radius: 9px;
  > button {
    height: 42px;
    background-color: ${({ theme }) => theme.COLORS.BUTTON[100]};

    border-radius: 60px;

    font-weight: bold;

    margin: 4px 0 0 0;
  }
  > span {
    text-align: left;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;

  .warning {
    background-color: ${({ theme }) => theme.COLORS.CONTRAST[200]};

    margin: 0 0 32px 0;
    padding: 20px;
    text-align: center;
    border-radius: 90px;

    > p {
      color: ${({ theme }) => theme.COLORS.GREEN};
      font-family: Inter;

      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }
`
