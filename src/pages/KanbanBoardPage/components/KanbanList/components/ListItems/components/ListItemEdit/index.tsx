import React, { useState } from 'react'
import ZoomInTextField from '../../../../../../../../components/molecules/ZoomInTextField'
import useKanbanListItems from '../../../../../../../../hooks/useKabanListItems'
import KanbanItem from '../../../../../../../../shared/models/kanbanItem'

export interface IListItemEdit {
  item: KanbanItem
}

const ListItemEdit: React.FC<IListItemEdit> = ({ item: initialItemValue }) => {
  const { updateListItem, setIsEditing } = useKanbanListItems()

  const [item, setItem] = useState(new KanbanItem({ ...initialItemValue }))

  const setItemTitle = React.useCallback((title: string) => {
    setItem((item) => ({ ...item, title }))
  }, [])

  const cancelEdit = () => {
    setIsEditing('')
  }

  const submit = () => {
    updateListItem(item)
  }

  return (
    <>
      <ZoomInTextField
        showTextFieldBtnLabel={'Editar Cartão'}
        submitBtnLabel={'Salvar'}
        value={item.title}
        onChange={setItemTitle}
        onSubmit={submit}
        overrideHideInput={cancelEdit}
        showInputOnMount
      />
    </>
  )
}

export default ListItemEdit
