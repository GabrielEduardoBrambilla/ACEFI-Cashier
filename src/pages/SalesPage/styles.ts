import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-template-areas: 'items-wrapper right-section';

  height: 100vh;
  .items-wrapper {
    grid-area: 'items-wrapper';
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin: 15px 0;
    padding: 0 15px;
    align-content: flex-start;
    justify-content: center;
    max-height: 100vh;
    overflow-y: scroll;
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
      overflow-y: scroll;
      th {
        font-weight: bold;
        flex: 1; /* Allow the items to expand and share equal width */
        border-radius: 10px;
        padding: 2px;
      }
      tr {
        max-height: 44px;
        display: flex; /* Display the row items in a row */
        align-items: center;
        grid-column: 1 / -1;
        td {
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
      tr {
        display: flex; /* Display the row items in a row */
        align-items: center;
        grid-column: 1 / -1;
        text-align: right;
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
          padding: 0 10px 0 0;
        }
        &:nth-child(even) {
          background-color: ${({ theme }) =>
            theme.COLORS
              .CONTRAST[200]}; /* You can adjust the background color here */
          border-radius: 20px;
        }
      }

      button {
        background-color: ${({ theme }) => theme.COLORS.RED[100]};
        color: ${({ theme }) => theme.COLORS.CONTRAST[100]};
        height: 32px;
        border-radius: 60px;
        &:hover {
          opacity: 0.9;
        }
      }
    }
  }
`
