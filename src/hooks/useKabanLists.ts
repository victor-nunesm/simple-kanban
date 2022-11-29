import { useContextSelector } from 'use-context-selector'
import { KanbanListsContext } from '../contexts/KanbanListsContext'

export default function useKanbanLists() {
  const lists = useContextSelector(KanbanListsContext, (ctx) => ctx.lists)
  const setLists = useContextSelector(KanbanListsContext, (ctx) => ctx.setLists)
  const deleteList = useContextSelector(KanbanListsContext, (ctx) => ctx.deleteList)

  return {
    lists,
    setLists,
    deleteList,
  }
}
