import constants from './constants'
import produce from 'immer'
import { IItem } from '../../types'
import { AnyAction } from 'redux'

const getStoredItems = () => {

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
}

const updateItemIds = (items: IItem[]): IItem[] => {
    return items.map((item, i) => {
        return {
            ...item,
            id: i + 1
        }
    })
}

const storeItems = (items: IItem[]): void => localStorage.setItem('todos', JSON.stringify(items))

const initialState = getStoredItems()

export default function reducer(state = initialState, action: AnyAction) {
    return produce(state, draft => {
        switch(action.type) {
            case constants.ADD_A_ITEM: {
                draft.push({
                    ...action.item,
                    id: draft.length + 1,
                    completed: false
                })
                storeItems(draft)
                break
            }
            case constants.REMOVE_A_ITEM: {
                const item = draft.find(item => item.id === action.id)
                if(item) {
                    const itemIndex = draft.indexOf(item)
                    if(itemIndex !== -1) {
                        draft.splice(itemIndex, 1)
                        draft = updateItemIds(draft)
                        storeItems(draft)
                    }
                }
                break
            }
            case constants.REMOVE_ALL_COMPLETED_ITEMS: {
                const notCompletedItems = draft.filter(item => !item.completed)
                draft = updateItemIds(notCompletedItems)
                storeItems(draft)
                return draft
            }
            case constants.TOGGLE_COMPLETED_ITEM: {
                const item = draft.find(item => item.id === action.id)
                if(item) {
                    const itemIndex = draft.indexOf(item)
                    if(itemIndex !== -1) {
                        draft[itemIndex].completed = !draft[itemIndex].completed
                        storeItems(draft)
                    }
                }
                break
            }
            case constants.EDIT_ITEM:
                const item = draft.find(item => item.id === action.id)
                if(item) {
                    const itemIndex = draft.indexOf(item)
                    if(itemIndex !== -1) {
                        draft[itemIndex].content = action.content
                        storeItems(draft)
                    }
                }
                break
            default:
                break
        }
    })
}