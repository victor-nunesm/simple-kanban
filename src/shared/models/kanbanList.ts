import KanbanItem from './kanbanItem'

class KanbanList {
  id = new Date().toISOString()
  title = ''
  kanbanItems: KanbanItem[] = []
  createdAt: string = new Date().toISOString()
  archivedAt?: string
  deletedAt?: string

  constructor(list: Partial<KanbanList>) {
    if (list && typeof list === 'object' && !('length' in list)) {
      Object.getOwnPropertyNames(list).forEach((key) => {
        const value = list[key as keyof KanbanList]
        if (key in this) {
          ;(this as any)[key] = value
        }
      })
    }
  }
}

export default KanbanList
