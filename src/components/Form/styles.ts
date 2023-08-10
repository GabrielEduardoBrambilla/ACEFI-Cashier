import styled, { css } from 'styled-components'

export const FormContainer = styled.form<{ product?: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
  padding: 20px 0;
  font-size: 24px !important;
  background-color: ${props =>
    props.product
      ? props.theme.COLORS.CONTRAST[100]
      : props.theme.COLORS.BACKGROUND[100]};

  border-radius: 9px;
  .formTitle {
    font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: ${props =>
      props.product
        ? props.theme.COLORS.BACKGROUND[100]
        : props.theme.COLORS.CONTRAST[100]};
  }
  .newRegister {
    text-align: left;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  > div {
    position: relative;
    height: 4.4rem;
    width: 100%;
    min-width: 200px;
    > input {
      filter: ${props =>
        props.product
          ? 'unset'
          : 'drop-shadow(-2px 4px 4px rgba(0, 0, 0, 0.25))'};

      height: 100%;
      width: 100%;
      border-bottom: 5px solid
        ${props =>
          props.product
            ? props.theme.COLORS.BACKGROUND[100]
            : props.theme.COLORS.CONTRAST[100]};
      background-color: transparent;
      padding-top: 1.2rem;
      padding-bottom: 0.6rem;
      font-family: sans-serif;
      font-size: 20px;
      font-weight: normal;

      color: ${props =>
        props.product
          ? props.theme.COLORS.BACKGROUND[100]
          : props.theme.COLORS.CONTRAST[100]};

      outline: none;
      transition: all 0.3s;
      border-radius: 2px;
      &::placeholder {
        color: ${props =>
          props.product
            ? props.theme.COLORS.BACKGROUND[100]
            : props.theme.COLORS.CONTRAST[100]};

        filter: drop-shadow(
          -2px 4px 4px rgba(0, 0, 0, 0.25)
        ); /* Add drop-shadow here */
      }

      &:focus {
        border-color: ${({ theme }) => theme.COLORS.GREEN};
        color: ${props =>
          props.product
            ? props.theme.COLORS.BACKGROUND[100]
            : props.theme.COLORS.CONTRAST[200]};

        opacity: 0.9;
        outline: none;
      }
      &:disabled {
        border: none;
      }
    }
  }
  > button {
    height: 42px;
    background-color: ${({ theme }) => theme.COLORS.BUTTON[100]};

    border-radius: 60px;

    font-weight: bold;

    margin: 4px 0 0 0;
  }
  .uploadButton {
    display: flex;
    width: 100%;
    > svg {
      font-size: 20px;
    }
    gap: 10px;
    align-items: center;
    padding: 0 0 0 20px;
    border-radius: 10px;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND[100]};
  }
  @media (min-width: 1023px) {
    > button {
      align-self: flex-end;
      height: 42px;
      background-color: ${({ theme }) => theme.COLORS.BUTTON[100]};

      border-radius: 60px;

      font-weight: bold;
      width: 70%;
      margin: 4px 0 0 0;
    }
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 90%;
  max-width: 420px;

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
  @media (min-width: 1023px) {
    width: 90%;
    max-width: 490px;
  }
`
