import { useContext, createContext } from 'react'
import { IItem, INewItem } from '../types'

interface IContext {
    items: IItem[],
    addAItem(item: INewItem): void,
    removeAItem(id: number): void,
    removeAllCompletedItems(): void,
    toggleCompletedItem(id: number): void,
    editAItem(id: number, content: string): void
}

const context: IContext = {
    items: [],
    addAItem(item: INewItem) {},
    removeAItem(id: number) {},
    removeAllCompletedItems() {},
    toggleCompletedItem(id: number) {},
    editAItem(id: number, content: string) {}
}

const TodosContext = createContext(context)

export const TodosProvider = TodosContext.Provider
export const useTodos = () => useContext(TodosContext)