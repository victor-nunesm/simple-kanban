class KanbanItem {
  id = new Date().toISOString()
  title = ''
  listId!: string
  createdAt: string = new Date().toISOString()
  archivedAt?: string
  deletedAt?: string

  constructor(item: Partial<KanbanItem>) {
    if (item && typeof item === 'object' && !('length' in item)) {
      Object.getOwnPropertyNames(item).forEach((key) => {
        const value = item[key as keyof KanbanItem]
        if (key in this) {
          ;(this as any)[key] = value
        }
      })
    }
  }
}

export default KanbanItem
