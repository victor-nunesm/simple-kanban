import React from 'react'
import { createContext } from 'use-context-selector'
import KanbanItem from '../shared/models/kanbanItem'
import typeChecking from '../shared/utils/typeChecking'
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

type KanbanListItemsProviderConsumer = (value: KanbanListItemsContextType) => React.ReactNode

interface IKanbanListItemsProvider {
  children: React.ReactNode | KanbanListItemsProviderConsumer
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

  const handleEditListItem = (item: KanbanItem) => {
    setListItems((items) => {
      if (!item) {
        return items
      }

      let foundItem = items.find((i) => i.id === item.id)

      if (foundItem && item) {
        Object.keys(item).forEach((keyOfItem) => {
          if (foundItem && keyOfItem in foundItem && keyOfItem in item) {
            foundItem[keyOfItem as keyof KanbanItem] = item[keyOfItem as keyof KanbanItem] as any
          }
        })
      }

      return [...items]
    })
    setIsEditing('')
  }

  const handleDeleteListItem = (itemId: string) => {
    setListItems((items) => {
      return items.filter((item) => item.id !== itemId)
    })
  }

  const handleDeleteAllListItems = () => {
    setListItems([])
  }

  const contextValue = {
    items,
    isEditing,
    setIsEditing,
    addNewListItem: handleSetListItem,
    editListItem: handleEditListItem,
    deleteListItem: handleDeleteListItem,
    deleteAllListItems: handleDeleteAllListItems,
  }

  const renderChildren = () => {
    if (children && typeChecking.isValidFunction(children)) {
      return (children as KanbanListItemsProviderConsumer)(contextValue)
    } else {
      return children as React.ReactNode
    }
  }

  return <KanbanListItemsContext.Provider value={contextValue}>{renderChildren()}</KanbanListItemsContext.Provider>
}

export default KanbanListItemsProvider
