import React, { useCallback, useState } from 'react'
import ZoomInTextField from '../../../../components/molecules/ZoomInTextField'
import useKanbanLists from '../../../../hooks/useKabanLists'
import KanbanList from '../../../../shared/models/kanbanList'

export interface ICreateList {
  list?: KanbanList
}

const CreateList: React.FC<ICreateList> = ({ list: initialListValue = {} }) => {
  const { setLists } = useKanbanLists()
  const [list, setList] = useState(new KanbanList(initialListValue))

  const setListTitle = (title: string) => {
    setList((list) => ({ ...list, title }))
  }
  const resetListValue = () => {
    setList(new KanbanList({}))
  }

  const addList = useCallback((list: KanbanList) => {
    setLists((lists) => [...lists, list])
  }, [])

  const submit = () => {
    resetListValue()
    addList(list)
  }

  return (
    <>
      <ZoomInTextField
        showTextFieldBtnLabel={'Nova Lista'}
        submitBtnLabel={'Criar Lista'}
        value={list.title}
        onChange={setListTitle}
        onSubmit={submit}
      />
    </>
  )
}

export default CreateList
