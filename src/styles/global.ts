import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
html:root{
   /* Set base font size to 62.5% (10px) of the default 16px */
   font-size: 62.5%;
}

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Inter;

  }

  body{
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND[100]};
    color: ${({ theme }) => theme.COLORS.CONTRAST[100]};

    -webkitfont-smoothing: antialiased

  }

  body, input, button, textarea, select{
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    outline: none;
  }

  a{
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  #toggleButton{
    display: none;
  }
  transition: all 2.5s ease-in;

  button:hover, a:hover {
    filter: brightness(0.9)
  }

  @media (min-width: 1300px) {
    .mobile {
      display: none !important;
    }
    .desktop {
      display: flex !important;
    }
  }
  @media (max-width: 1300px) {
    .mobile {
      display: flex !important;
    }
    .desktop {
      display: none!important;
    }
  }
`
