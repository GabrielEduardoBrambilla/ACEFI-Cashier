import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-template-areas: 'items-wrapper right-section';

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
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.COLORS.CONTRAST[100]};
    padding: 10px;
    height: 100%;
    justify-content: space-between;
    color: ${({ theme }) => theme.COLORS.FONT[200]};

    .order-items {
      display: flex;
      flex-direction: column;
      text-align: center;
      width: 100%;
      height: 55vh;
      max-height: 56vh;
      tbody {
        max-height: 56vh;
        overflow-y: auto;
        &::-webkit-scrollbar {
          width: 10px;
        }

        &::-webkit-scrollbar-thumb {
          background-color: ${({ theme }) => theme.COLORS.FONT[200]};
          border-radius: 5px;
        }

        &::-webkit-scrollbar-track {
          background-color: ${({ theme }) => theme.COLORS.CONTRAST[100]};
        }
      }
      th {
        font-weight: bold;
        flex: 1;
        border-radius: 10px;
        padding: 2px;
        font-size: 14px;
      }
      tr {
        max-height: 44px;
        display: flex; /* Display the row items in a row */
        align-items: center;
        grid-column: 1 / -1;
        td {
          font-size: 14px;

          flex: 1; /* Allow the items to expand and share equal width */
          border-radius: 10px;
          padding: 2px; /* Adjust padding as needed */
        }
        &:nth-child(even) {
          background-color: ${({ theme }) =>
            theme.COLORS
              .CONTRAST[200]}; /* You can adjust the background color here */
          border-radius: 20px;
        }
      }
    }
    .order-info {
      display: flex;
      flex-direction: column;
      align-self: center;
      width: 90%;

      border-top: 3px solid black;

      .received {
        border: 3px solid black;
        width: 50%;
        border-radius: 10px;
        background-color: transparent;
        background-color: ${({ theme }) => theme.COLORS.CONTRAST[100]};
        opacity: 0.8;
        text-align: center;
        &::placeholder {
          color: ${({ theme }) => theme.COLORS.FONT[100]};
        }
      }
      tr {
        display: flex; /* Display the row items in a row */
        align-items: center;
        grid-column: 1 / -1;
        text-align: center;
        th {
          font-weight: bold;
          flex: 1; /* Allow the items to expand and share equal width */
          border-radius: 10px;
          padding: 0 0 0 10px;
          text-align: left;
        }
        td {
          flex: 1; /* Allow the items to expand and share equal width */
          border-radius: 10px;
          padding: 2px; /* Adjust padding as needed */
        }
      }
      button {
        background-color: ${({ theme }) => theme.COLORS.RED[100]};
        color: ${({ theme }) => theme.COLORS.CONTRAST[100]};
        height: 32px;
        border-radius: 60px;
        font-weight: bold;
        &:hover {
          opacity: 0.9;
        }
      }
    }
  }
`
