import { Paper } from '@mui/material'
import React from 'react'
import useKanbanListItems from '../../../../../../hooks/useKabanListItems'
import ListItem from './components/ListItem'
import ListItemEdit from './components/ListItemEdit'

export interface IListItems {}

interface IMemoizedListItem {
  itemId: string
  title: string
}

const MemoizedListItem = React.memo<IMemoizedListItem>(({ itemId, title }) => {
  return (
    <Paper
      sx={{ display: 'flex', minHeight: '40px', borderRadius: '4px', backgroundColor: 'transparent' }}
      elevation={3}
    >
      <ListItem itemId={itemId} title={title} />
    </Paper>
  )
})

const ListItems: React.FC<IListItems> = () => {
  const { listItems, isEditing } = useKanbanListItems()

  return (
    <>
      {listItems.map((item) =>
        isEditing && isEditing === item.id ? (
          <ListItemEdit key={`edit-layout-listitem-${item.id}`} item={item} />
        ) : (
          <MemoizedListItem key={item.id} itemId={item.id} title={item.title} />
        )
      )}
    </>
  )
}

export default ListItems
