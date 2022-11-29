import styled from '@emotion/styled'
import { Theme } from '@mui/material'
import MuiGrid from '@mui/material/Grid'

const StyledGrid = styled(MuiGrid)(
  ({ theme }) => `
  ::-webkit-scrollbar {
    width: 0.5rem;
  }

  ::-webkit-scrollbar-track {
    background-color: ${(theme as Theme).palette.grey['900']};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${(theme as Theme).palette.grey['700']};
    outline: none;
  }
  `
)

export default StyledGrid
