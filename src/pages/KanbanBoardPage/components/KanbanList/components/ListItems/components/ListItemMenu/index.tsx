import { Backdrop, ButtonGroup, Paper } from '@mui/material'
import React from 'react'
import Button from '../../../../../../../../components/atoms/Button'
import useKanbanListItems from '../../../../../../../../hooks/useKabanListItems'
import executeCallbackIfValid from '../../../../../../../../shared/utils/executeCallbackIfValid'

export interface IListItemMenu {
  itemId: string
  isOpen: boolean
  top: number
  left: number
  onBackdropClick: React.MouseEventHandler<HTMLElement> | undefined
}

const ListItemMenu: React.FC<IListItemMenu> = ({ itemId, top, left, isOpen = false, onBackdropClick }) => {
  const { deleteListItem: deleteListItemFromContext, setIsEditing } = useKanbanListItems()

  const deleteListItem = () => {
    deleteListItemFromContext(itemId)
  }
  const editListItem = () => {
    setIsEditing(itemId)
  }

  const handleBackdropClick: IListItemMenu['onBackdropClick'] = (e) => {
    executeCallbackIfValid(onBackdropClick, e)
  }

  return (
    <Backdrop sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} open={isOpen} onClick={handleBackdropClick}>
      <Paper sx={{ position: 'absolute', top: `${top}px`, left: `${left}px` }}>
        <ButtonGroup orientation="vertical">
          <Button key="delete-list" onClick={deleteListItem}>
            Apagar
          </Button>
          <Button key="edit-list" onClick={editListItem}>
            Editar
          </Button>
        </ButtonGroup>
      </Paper>
    </Backdrop>
  )
}

export default ListItemMenu
