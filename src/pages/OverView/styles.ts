import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-template-areas: 'items-wrapper' 'right-section';
  height: 100vh;
  .items-wrapper {
    grid-area: 'items-wrapper';
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    margin: 15px 0;
    padding: 0 16px 16px 15px;
    align-content: space-between;
    justify-content: center;
    max-height: 100vh;
    overflow-y: auto;
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
  .MuiTablePagination-root,
  .MuiSvgIcon-root {
    color: #fff !important;
  }
  .table-title {
    display: flex;
    gap: 1rem;
    align-items: center;
    font-size: 18px;
    font-weight: 500;
    text-align: left;
    justify-self: start;
    margin: 16px 0;
    svg {
      cursor: pointer;
    }
  }
`
