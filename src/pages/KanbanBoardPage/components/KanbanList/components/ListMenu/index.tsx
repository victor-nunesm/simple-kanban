import DeleteIcon from '@mui/icons-material/Delete'
import React from 'react'
import DropdownMenu from '../../../../../../components/molecules/DropdownMenu'
import useKanbanListItems from '../../../../../../hooks/useKabanListItems'
import useKanbanLists from '../../../../../../hooks/useKabanLists'

export interface IListMenu {
  listId: string
}

const ListMenu: React.FC<IListMenu> = ({ listId }) => {
  const { deleteList } = useKanbanLists()
  const { deleteAllListItems } = useKanbanListItems()

  const handleDeleteList = () => {
    deleteList(listId)
  }

  const menuItems = [
    { id: 'delete-list', label: 'Apagar', onClick: handleDeleteList, muiIcon: DeleteIcon },
    { id: 'delete-all-list=items', label: 'Apagar todos os cartões', onClick: deleteAllListItems, muiIcon: DeleteIcon },
  ]

  return <DropdownMenu menuItems={menuItems} />
}

export default ListMenu
