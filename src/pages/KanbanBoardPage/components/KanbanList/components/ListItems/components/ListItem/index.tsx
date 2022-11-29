import styled from '@emotion/styled'
import { ListItem as MuiListItem, ListItemText } from '@mui/material'
import React, { useState } from 'react'
import ListItemMenu from '../ListItemMenu'

export interface IListItem {
  itemId: string
  title: string
}

const StyledListItem = styled(MuiListItem)({
  overflowWrap: 'anywhere',
  borderRadius: '4px',
  cursor: 'pointer',
  '&:hover, &:focus': {
    backgroundColor: '#15273921',
  },
})

const ListItem: React.FC<IListItem> = ({ itemId, title }) => {
  const [showListItemMenu, setShowListItemMenu] = useState(false)
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 })

  const displayMenu: React.MouseEventHandler<HTMLElement> = (e) => {
    positionMenu(e?.target as HTMLElement)
    setShowListItemMenu(true)
  }
  const hideMenu = () => {
    setShowListItemMenu(false)
  }

  const positionMenu = (element: HTMLElement) => {
    if (!element || !('getBoundingClientRect' in element)) {
      return
    }

    if (element.localName.toLowerCase().includes('span') && element.offsetParent) {
      element = element.offsetParent as HTMLElement
    }

    const rect = element.getBoundingClientRect()
    const top = rect.top
    const left = rect.left + rect.width + 5
    setMenuPosition({ top, left })
  }

  return (
    <>
      <StyledListItem id={itemId} key={itemId} onClick={displayMenu}>
        <ListItemText id={`label-${itemId}`} primary={title} sx={{ '.MuiTypography-root': { fontSize: '1rem' } }} />
      </StyledListItem>
      <ListItemMenu
        isOpen={showListItemMenu}
        itemId={itemId}
        top={menuPosition.top}
        left={menuPosition.left}
        onBackdropClick={hideMenu}
      />
    </>
  )
}

export default ListItem
