import { Box, Grid } from '@mui/material'
import React from 'react'
import useKanbanLists from '../../hooks/useKabanLists'
import CreateList from './components/CreateList'
import KanbanList from './components/KanbanList'

export interface IKanbanPageProps {}

const KanbanPage: React.FC<IKanbanPageProps> = () => {
  const { lists } = useKanbanLists()

  const renderLists = () => {
    return lists?.map((list) => (
      <Grid key={list.id} item xs={2} width="250px" minWidth="250px" maxWidth="250px">
        <KanbanList title={list.title} listId={list.id} />
      </Grid>
    ))
  }

  return (
    <Box>
      <Grid container flexWrap={'nowrap'} spacing={1}>
        {renderLists()}
        <Grid item xs={1.5} width="200px" minWidth="200px" maxWidth="200px">
          <CreateList />
        </Grid>
      </Grid>
    </Box>
  )
}

export default KanbanPage
