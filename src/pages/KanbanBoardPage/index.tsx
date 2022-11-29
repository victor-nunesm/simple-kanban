import styled from '@emotion/styled'
import React from 'react'
import Box from '../../components/atoms/Box'
import Grid from '../../components/atoms/Grid'
import StyledOverflowContainer from '../../components/atoms/OverflowContainer'
import useKanbanLists from '../../hooks/useKabanLists'
import CreateList from './components/CreateList'
import KanbanList from './components/KanbanList'

export interface IKanbanPageProps {}

const KanbanBoardPageContainer = styled(StyledOverflowContainer)`
  overflow: auto;
  padding: 1rem;
  flex: 1;
  margin-bottom: 0.5rem;
`.withComponent(Box)

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
    <KanbanBoardPageContainer sx={{ overflow: 'auto', p: 1, flex: 1 }}>
      <Grid container flexWrap={'nowrap'} spacing={1}>
        {renderLists()}
        <Grid item xs={1.5} width="200px" minWidth="200px" maxWidth="200px">
          <CreateList />
        </Grid>
      </Grid>
    </KanbanBoardPageContainer>
  )
}

export default KanbanPage
