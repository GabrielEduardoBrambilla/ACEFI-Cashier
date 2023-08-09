import styled from 'styled-components'

export const StyledInputWrapper = styled.div`
  position: relative;
  height: 4.4rem;
  width: 100%;
  min-width: 200px;
`

export const StyledInput = styled.input`
  filter: drop-shadow(-2px 4px 4px rgba(0, 0, 0, 0.25));
  height: 100%;
  width: 100%;
  border-bottom: 5px solid ${({ theme }) => theme.COLORS.CONTRAST[200]};
  background-color: transparent;
  padding-top: 1.2rem;
  padding-bottom: 0.6rem;
  font-family: sans-serif;
  font-size: 20px;
  font-weight: normal;
  color: ${({ theme }) => theme.COLORS.CONTRAST[100]};
  outline: none;
  transition: all 0.3s;
  border-radius: 2px;
  &::placeholder {
    color: ${({ theme }) => theme.COLORS.CONTRAST[100]};
    filter: drop-shadow(
      -2px 4px 4px rgba(0, 0, 0, 0.25)
    ); /* Add drop-shadow here */
  }

  &:focus {
    border-color: ${({ theme }) => theme.COLORS.GREEN};
    color: ${({ theme }) => theme.COLORS.CONTRAST[200]};

    opacity: 0.9;
    outline: none;
  }
  &:disabled {
    border: none;
    background-color: #f7fafc;
  }
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
  padding: 20px 0;
  font-size: 24px !important;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND[100]};
  border-radius: 9px;

  .form-input {
    > label {
      font-size: 16px !important;

      /* background-color: red; */
    }
  }

  .newRegister {
    text-align: left;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  > button {
    height: 42px;
    background-color: ${({ theme }) => theme.COLORS.BUTTON[100]};

    border-radius: 60px;

    font-weight: bold;

    margin: 4px 0 0 0;
  }
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;

  .warning {
    background-color: ${({ theme }) => theme.COLORS.CONTRAST[200]};

    margin: 1rem 0 1.2rem 0;
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
