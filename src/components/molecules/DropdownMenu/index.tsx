import DeleteIcon from '@mui/icons-material/Delete'
import MenuIcon from '@mui/icons-material/Menu'
import { Box } from '@mui/material'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import Grow from '@mui/material/Grow'
import IconButton from '@mui/material/IconButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import MenuItem from '@mui/material/MenuItem'
import MenuList from '@mui/material/MenuList'
import Paper from '@mui/material/Paper'
import Popper from '@mui/material/Popper'
import * as React from 'react'
import executeCallbackIfValid from '../../../shared/utils/executeCallbackIfValid'
import typeChecking from '../../../shared/utils/typeChecking'
import Typography from '../../atoms/Typography'

export interface IDropdownMenuItem {
  onClick: (menuItemId: string) => void
  label: string
  id: string
  muiIcon: typeof DeleteIcon
}

export interface IDropdownMenu {
  menuItems: IDropdownMenuItem[]
}

const DropdownMenu: React.FC<IDropdownMenu> = ({ menuItems }) => {
  const [open, setOpen] = React.useState(false)
  const anchorElRef = React.useRef<HTMLButtonElement>(null)

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  const handleClose = (event: Event | React.SyntheticEvent, item?: IDropdownMenuItem) => {
    if (anchorElRef.current && anchorElRef.current.contains(event.target as HTMLElement)) {
      return
    }

    if (item) {
      handleMenuItemClicked(item)
    }

    setOpen(false)
  }

  const handleMenuItemClicked = (item: IDropdownMenuItem) => {
    executeCallbackIfValid(item.onClick, item.id)
  }

  // restore focus to button element after closing the popper
  const prevOpen = React.useRef(open)
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorElRef.current!.focus()
    }

    prevOpen.current = open
  }, [open])

  const renderMenuItems = (items: IDropdownMenuItem[]) => {
    if (typeChecking.isValidArray(items)) {
      return items.map((item) => (
        <MenuItem onClick={(e) => handleClose(e, item)} key={item.id}>
          <ListItemIcon>{<item.muiIcon />}</ListItemIcon>
          <Typography variant="inherit">{item.label}</Typography>
        </MenuItem>
      ))
    }
  }

  return (
    <Box>
      <IconButton ref={anchorElRef} onClick={handleToggle}>
        <MenuIcon />
      </IconButton>
      <Popper
        sx={{ zIndex: 1 }}
        open={open}
        anchorEl={anchorElRef.current}
        placement="bottom-start"
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: placement === 'bottom-start' ? 'left top' : 'left bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={(e) => handleClose(e)}>
                <MenuList autoFocusItem={open}>{renderMenuItems(menuItems)}</MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Box>
  )
}

export default DropdownMenu
