import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-template-areas: 'items-wrapper' 'right-section';
  height: 100vh;
  .items-wrapper {
    grid-area: 'items-wrapper';
    display: grid;
    grid-template-columns: repeat(
      auto-fit,
      minmax(150px, 1fr)
    ); /* Responsive columns */
    gap: 16px;
    padding: 16px;
    max-height: 100vh;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 12px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.COLORS.CONTRAST[200]};
      border-radius: 5px;
    }

    &::-webkit-scrollbar-track {
      background-color: transparent;
    }
  }
  .right-section {
    background-color: ${({ theme }) => theme.COLORS.CONTRAST[100]};
    padding: 10px;
    height: 100vh;
    justify-content: center;

    .form-wrapper {
      display: flex;
      align-items: center;
      height: 80%;
      justify-content: center;
    }
  }
`
