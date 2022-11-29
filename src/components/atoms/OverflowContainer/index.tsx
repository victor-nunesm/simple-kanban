import styled from '@emotion/styled'
import { Theme } from '@mui/material'

const StyledOverflowContainer = styled('div')(
  ({ theme }) => `
  ::-webkit-scrollbar {
    width: 0.5rem;
    height: 0.5rem;
  }

  ::-webkit-scrollbar-button {
    display: block;
    width: 5px;
    height: 5px;
  }

  ::-webkit-scrollbar-corner {
    display: none;
  }

  ::-webkit-scrollbar-track {
    background-color: #00000026;
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${(theme as Theme).palette.grey['700']};
    outline: none;
    border-radius: 5px;
  }
  `
)

export default StyledOverflowContainer
