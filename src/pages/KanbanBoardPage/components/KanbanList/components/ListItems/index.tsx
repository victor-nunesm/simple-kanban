import styled from '@emotion/styled'
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

const ListItemContainer = styled(Paper)`
  display: flex;
  min-height: 40px;
  border-radius: 4px;
  background-color: transparent;
`

const MemoizedListItem = React.memo<IMemoizedListItem>(({ itemId, title }) => {
  return (
    <ListItemContainer elevation={3}>
      <ListItem itemId={itemId} title={title} />
    </ListItemContainer>
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
