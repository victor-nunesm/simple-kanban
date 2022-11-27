import React from 'react'
import { createContext } from 'use-context-selector'
import KanbanItem from '../shared/models/kanbanItem'
import usePersistedState from '../shared/utils/usePersistedState'

interface KanbanListItemsContextType {
  items: KanbanItem[]
  isEditing: string
  setIsEditing: React.Dispatch<React.SetStateAction<string>>
  addNewListItem: (item: KanbanItem) => void
  editListItem: (item: KanbanItem) => void
  deleteListItem: (itemId: string) => void
  deleteAllListItems: () => void
}

interface IKanbanListItemsProvider {
  children: React.ReactNode
  listId: string
}

export const KanbanListItemsContext = createContext({} as KanbanListItemsContextType)

const KanbanListItemsProvider: React.FC<IKanbanListItemsProvider> = ({ children, listId }) => {
  const [items, setListItems] = usePersistedState<KanbanListItemsContextType['items']>(`${listId}-kanbanItems`, [])
  const [isEditing, setIsEditing] = React.useState('')

  const handleSetListItem = React.useCallback((item: KanbanItem) => {
    setListItems((items) => {
      if (!item) {
        return items
      }

      return [...items, item]
    })
  }, [])

  const handleEditListItem = React.useCallback((item: KanbanItem) => {
    setListItems((items) => {
      if (!item) {
        return items
      }

      return items.map((_item) => {
        if (_item.id === item.id) {
          return { ..._item, ...item }
        }

        return item
      })
    })
    setIsEditing('')
  }, [])

  const handleDeleteListItem = React.useCallback((itemId: string) => {
    setListItems((items) => {
      return items.filter((item) => item.id !== itemId)
    })
  }, [])

  const handleDeleteAllListItems = React.useCallback(() => {
    setListItems([])
  }, [])

  return (
    <KanbanListItemsContext.Provider
      value={{
        items,
        isEditing,
        setIsEditing,
        addNewListItem: handleSetListItem,
        editListItem: handleEditListItem,
        deleteListItem: handleDeleteListItem,
        deleteAllListItems: handleDeleteAllListItems,
      }}
    >
      {children}
    </KanbanListItemsContext.Provider>
  )
}

export default KanbanListItemsProvider
