// import ListIcon from '@mui/icons-material/List'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Tooltip from '@mui/material/Tooltip'
import Box from '../../../../components/atoms/Box'
import ThemeSwitcher from '../../../../components/atoms/ThemeSwitcher'
import Typography from '../../../../components/atoms/Typography'

function Header() {
  return (
    <AppBar position="static" sx={{ padding: '0 1rem' }}>
      <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
          {/* <ListIcon sx={{ mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Kanban Simples
          </Typography>
        </Box>

        <Box sx={{ display: { xs: 'flex', md: 'none' }, flexGrow: 1, alignItems: 'center' }}>
          {/* <ListIcon sx={{ mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Kanban Simples
          </Typography>
        </Box>

        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Trocar Tema">
            <div>
              <ThemeSwitcher></ThemeSwitcher>
            </div>
          </Tooltip>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
export default Header
