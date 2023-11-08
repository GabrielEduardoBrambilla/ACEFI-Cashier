import styled from 'styled-components'

export const FormContainer = styled.form<{ product?: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
  padding: 5px 0;
  font-size: 14px !important;
  text-align: center;
  background-color: ${props =>
    props.product ? null : props.theme.COLORS.BACKGROUND[100]};

  border-radius: 9px;
  .formTitle {
    font-family: Inter;
    font-size: 16px;
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
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .userOptions {
    display: flex;
    width: 100%;
    gap: 5px;

    justify-content: space-between;
    flex-direction: column;
  }

  > div {
    position: relative;
    width: 100%;
    min-width: 200px;
    > input {
      filter: ${props =>
        props.product
          ? 'unset'
          : 'drop-shadow(-2px 4px 4px rgba(0, 0, 0, 0.25))'};
      text-transform: capitalize;
      height: 100%;
      width: 100%;
      border-bottom: 5px solid
        ${props =>
          props.product
            ? props.theme.COLORS.BACKGROUND[100]
            : props.theme.COLORS.CONTRAST[100]};
      background-color: transparent;
      font-family: sans-serif;
      font-size: 14px;
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
  .newProd {
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: end;
    gap: 10px;
    border-bottom: 5px solid
      ${props =>
        props.product
          ? props.theme.COLORS.BACKGROUND[100]
          : props.theme.COLORS.CONTRAST[100]};
    border-radius: 2px;
    font-family: sans-serif;
    font-size: 14px;
    font-weight: normal;

    &:focus {
      border-color: ${({ theme }) => theme.COLORS.GREEN};
      opacity: 0.9;
      outline: none;
    }
    label {
      p {
        width: 100%;
        color: ${({ theme }) => theme.COLORS.BACKGROUND[100]};
      }
    }
    #color_input {
      width: 50px;
      height: 20px;
      border-radius: 5px;
      border: none;
      background-color: transparent;
      cursor: pointer;
    }
    #color_input::-webkit-color-swatch {
      border-radius: 5px;
      border: none;
    }
    #color_input::-moz-color-swatch {
      border-radius: 5px;
      border: none;
    }
  }
  .uploadButton {
    display: flex;
    width: 100%;
    > input {
      display: none;
    }
    > svg {
      font-size: 20px;
    }
    font-family: Inter;
    font-size: 14px;
    height: 30px;
    cursor: pointer;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    gap: 10px;
    align-items: center;
    justify-content: center;
    border-radius: 10px;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND[100]};
  }
`

export const Container = styled.div<{ warning?: boolean }>`
  display: flex;
  flex-direction: column;
  max-height: 500px;
  height: 100%;
  width: 90%;
  max-width: 420px;
  justify-content: space-between;

  .buttons {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .icon {
      color: ${({ theme }) => theme.COLORS.FONT[100]};
      font-size: 35px;
      cursor: pointer;
      &:hover {
        color: ${({ theme }) => theme.COLORS.RED[100]};
      }
    }
    button {
      flex-grow: 1; /* Occupy 2/3 of the width */
      flex-basis: 50%; /* 2/3 of the width */
      height: 42px;
      background-color: ${({ theme }) => theme.COLORS.BUTTON[100]};
      font-size: 16px;
      border-radius: 60px;

      font-weight: bold;
    }
  }

  @media (min-width: 1023px) {
  }
  .warning {
    /* background-; */
    display: ${props => (props.warning ? 'unset' : 'hidden')};
    background-color: ${props => (props.warning ? 'green' : null)};

    opacity: 0.9;
    margin: 5px 0;
    padding: 5px;
    text-align: center;
    border-radius: 90px;

    > p {
      color: ${({ theme }) => theme.COLORS.CONTRAST[100]};
      font-family: Inter;

      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
  }
  @media (min-width: 1023px) {
    width: 90%;
    max-width: 490px;
  }
`
