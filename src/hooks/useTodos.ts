import { useState } from 'react'
import { IItem, INewItem } from '../types'

const updateItemIds = (items: IItem[]): IItem[] => {
    return items.map((item, i) => {
        return {
            ...item,
            id: i + 1
        }
    })
}

const storeItems = (items: IItem[]): void => localStorage.setItem('todos', JSON.stringify(items))

export default function useTodos() {

    const [items, setItems] = useState<IItem[]>(() => {
        let items: IItem[] = []

        try {
            const storedItems = localStorage.getItem('todos')
            if(storedItems && Array.isArray(JSON.parse(storedItems))) {
                items = JSON.parse(storedItems)
            }
        } catch(err) {
            console.log(err)
            localStorage.setItem('todos', JSON.stringify([]))
        }

        return items
    })

    const addAItem = (item: INewItem): void => {
        setItems((prevItems: IItem[]) => {
            prevItems.push({
                ...item,
                id: prevItems.length + 1,
                completed: false
            })
            storeItems(prevItems)
            return [...prevItems]
        })
    }

    const removeAItem = (id: number): void => {
        const clonedItems = [...items]
        const removedItem = clonedItems.find(item => item.id === id)
        if(removedItem) {
            const removedItemIndex = clonedItems.indexOf(removedItem)
            if(removedItemIndex !== -1) {
                clonedItems.splice(removedItemIndex, 1)
                const updatedItems = updateItemIds(clonedItems)
                storeItems(updatedItems)
                setItems(updatedItems)
            }
        }
    }

    const removeAllCompletedItems = (): void => {
        setItems((prevItems: IItem[]) => {
            const items = [...prevItems]
            let activeItems = items.filter(item => !item.completed)
            activeItems = updateItemIds(activeItems)
            storeItems(activeItems)
            return activeItems
        })
    }

    const toggleCompletedItem = (id: number): void => {
        setItems((prevItems: IItem[]) => {
            const item = prevItems.find(item => item.id === id)
            console.log('item:', item)
            if(item) {
                const itemIndex = prevItems.indexOf(item)
                if(itemIndex !== -1) {
                    prevItems[itemIndex].completed = !prevItems[itemIndex].completed
                    storeItems(prevItems)
                    return [...prevItems]
                }
                return prevItems
            }
            return prevItems
        })
    }

    const editAItem = (id: number, content: string): void => {
        setItems((prevItems: IItem[]) => {
            const edittingItem = prevItems.find(item => item.id === id)
            if(edittingItem) {
                const edittingItemIndex = prevItems.indexOf(edittingItem)
                if(edittingItemIndex !== -1) {
                    prevItems[edittingItemIndex].content = content
                    storeItems(prevItems)
                    return [...prevItems]
                }
                return prevItems
            }
            return prevItems
        })
    }

    return {
        items,
        addAItem,
        removeAItem,
        removeAllCompletedItems,
        toggleCompletedItem,
        editAItem
    }
}