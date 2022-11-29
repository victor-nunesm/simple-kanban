import styled from '@emotion/styled'
import { List, Paper } from '@mui/material'
import React from 'react'
import Grid from '../../../../components/atoms/Grid'
import Typography from '../../../../components/atoms/Typography'
import KanbanListItemsProvider from '../../../../contexts/KanbanListItemsContext'
import CreateListItem from './components/CreateListItem'
import ListItems from './components/ListItems'
import ListMenu from './components/ListMenu'

export interface IKanbanList {
  title: string
  listId: string
}

const GridWithOverflow = styled(Grid)`
  max-height: 90vh;
  overflow: auto;
  padding: 0px 5px;
`

const KanbanList: React.FC<IKanbanList> = ({ title, listId }) => {
  return (
    <Paper elevation={3}>
      <Grid container p={1}>
        <Grid item xs={10}>
          <Typography variant="h6" style={{ overflowWrap: 'anywhere' }}>
            {title}
          </Typography>
        </Grid>

        <KanbanListItemsProvider listId={listId}>
          <Grid item xs={2}>
            <ListMenu listId={listId} />
          </Grid>

          <GridWithOverflow item xs={12}>
            <List id={listId} key={listId} sx={{ display: 'flex', gap: 1, flexDirection: 'column' }}>
              <ListItems />
            </List>
            <CreateListItem listId={listId} />
          </GridWithOverflow>
        </KanbanListItemsProvider>
      </Grid>
    </Paper>
  )
}

export default KanbanList
