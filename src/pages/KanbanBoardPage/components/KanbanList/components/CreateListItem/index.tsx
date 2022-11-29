import React, { useCallback, useState } from 'react'
import ZoomInTextField from '../../../../../../components/molecules/ZoomInTextField'
import useKanbanListItems from '../../../../../../hooks/useKabanListItems'
import KanbanItem from '../../../../../../shared/models/kanbanItem'

export interface ICreateListItem {
  listId: string
  item?: KanbanItem
}

const CreateListItem: React.FC<ICreateListItem> = ({ listId, item: initialItemValue = {} }) => {
  const { addNewListItem } = useKanbanListItems()
  const [item, setItem] = useState(new KanbanItem({ ...initialItemValue, listId }))

  const setItemTitle = useCallback((title: string) => {
    setItem((item) => ({ ...item, title }))
  }, [])
  const resetItemValue = () => {
    setItem(new KanbanItem({ listId }))
  }

  const addListItem = useCallback((item: KanbanItem) => {
    addNewListItem(item)
  }, [])

  const submit = () => {
    resetItemValue()
    addListItem(item)
    console.log('submit')
  }

  return (
    <>
      <ZoomInTextField
        showTextFieldBtnLabel={'Novo Cartão'}
        submitBtnLabel={'Criar Cartão'}
        value={item.title}
        onChange={setItemTitle}
        onSubmit={submit}
      />
    </>
  )
}

export default CreateListItem
