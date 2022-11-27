import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import ErrorPage from '../pages/ErrorPage'
import KanbanBoardPageRouter from './KanbanBoardPageRouter'

const defaultErrorData = {
  title: 'Ops, parece que estamos com algum problema!',
  message: 'Tente novamente mais tarde.',
}

export const AppRouter = createBrowserRouter(
  createRoutesFromElements(
    <React.Fragment>
      <Route path="*" element={<KanbanBoardPageRouter />} errorElement={<ErrorPage {...defaultErrorData} />} />
    </React.Fragment>
  )
)

export default AppRouter
