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
    background-color: ${({ theme }) => theme.COLORS.CONTRAST[100]};
    padding: 10px;
    height: 100vh;
    justify-content: space-between;
    color: ${({ theme }) => theme.COLORS.FONT[200]};

    table {
      display: grid;
      grid-template-columns: repeat(
        3,
        1fr
      ); /* Three columns with equal width */
      text-align: center;
      width: 100%;
    }

    th {
      font-weight: bold;
      flex: 1; /* Allow the items to expand and share equal width */
      border-radius: 10px;
      padding: 2px;
    }
    tr {
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
`
