import React from 'react'
import KanbanProvider from '../contexts/KanbanListsContext'
import KanbanBoardPage from '../pages/KanbanBoardPage'

const KanbanBoardPageRouter: React.FC<any> = () => {
  return (
    <KanbanProvider>
      <KanbanBoardPage />
    </KanbanProvider>
  )
}

export default KanbanBoardPageRouter
