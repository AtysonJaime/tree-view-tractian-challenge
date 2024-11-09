import { TreeList } from "@/interfaces/companies.interface"

export const findItemOnArray = (
	array: TreeList[],
	id: string
): TreeList | undefined => {
	const item = array.find((itemChild) => {
		if (itemChild.id === id) return itemChild
		else if (itemChild.children.length > 0)
			return findItemOnArray(itemChild.children, id)
    else return undefined
  })

  if(item !== undefined) {
    return getMatchItemWithId(item, id)
  }
  return undefined
}

const getMatchItemWithId = (item: TreeList, id: string) : TreeList => {
  if(item.id === id) return item
  if(item.children.length > 0) return getMatchItemWithId(item.children[0], id)
  return item
}
