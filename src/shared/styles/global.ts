import { css } from '@mui/material'

const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: transparent;
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }

  #root {
    display: block;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: transparent;
  }

  .full-height {
    height: 100%;
  }
`

export default globalStyles
