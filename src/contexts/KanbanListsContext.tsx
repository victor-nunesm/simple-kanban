import React from 'react'
import { createContext } from 'use-context-selector'
import KanbanList from '../shared/models/kanbanList'
import usePersistedState from '../shared/utils/usePersistedState'

interface KanbanListsContextType {
  lists: KanbanList[]
  setLists: React.Dispatch<React.SetStateAction<KanbanList[]>>
  deleteList: (listId: string) => void
}

interface IKanbanProvider {
  children: React.ReactNode
}

export const KanbanListsContext = createContext({} as KanbanListsContextType)

const KanbanProvider: React.FC<IKanbanProvider> = ({ children }) => {
  const [lists, setLists] = usePersistedState<KanbanListsContextType['lists']>('kanbanLists', [])

  const deleteList = (listId: string) => {
    setLists((lists) => lists.filter((_list) => _list.id !== listId))
  }

  return <KanbanListsContext.Provider value={{ lists, setLists, deleteList }}>{children}</KanbanListsContext.Provider>
}

export default KanbanProvider
