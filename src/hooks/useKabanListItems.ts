import { useContextSelector } from 'use-context-selector'
import { KanbanListItemsContext } from '../contexts/KanbanListItemsContext'

export default function useKanbanListItems() {
  const listItems = useContextSelector(KanbanListItemsContext, (ctx) => ctx.items)
  const isEditing = useContextSelector(KanbanListItemsContext, (ctx) => ctx.isEditing)
  const setIsEditing = useContextSelector(KanbanListItemsContext, (ctx) => ctx.setIsEditing)
  const addNewListItem = useContextSelector(KanbanListItemsContext, (ctx) => ctx.addNewListItem)
  const updateListItem = useContextSelector(KanbanListItemsContext, (ctx) => ctx.editListItem)
  const deleteListItem = useContextSelector(KanbanListItemsContext, (ctx) => ctx.deleteListItem)
  const deleteAllListItems = useContextSelector(KanbanListItemsContext, (ctx) => ctx.deleteAllListItems)

  return {
    listItems,
    addNewListItem,
    deleteListItem,
    deleteAllListItems,
    updateListItem,
    isEditing,
    setIsEditing,
  }
}
