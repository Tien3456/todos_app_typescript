import constants from './constants'
import { INewItem } from '../../types'

const actions = {
    doAddAItem: (item: INewItem) => {
        return {
            type: constants.ADD_A_ITEM,
            item
        }
    },
    doRemoveAItem: (id: number) => {
        return {
            type: constants.REMOVE_A_ITEM,
            id
        }
    },
    doRemoveAllCompletedItems: () => ({ type: constants.REMOVE_ALL_COMPLETED_ITEMS }),
    doToggleCompletedItem: (id: number) => {
        return {
            type: constants.TOGGLE_COMPLETED_ITEM,
            id
        }
    },
    doEditItem: (id: number, content: string) => {
        return {
            type: constants.EDIT_ITEM,
            id,
            content
        }
    }
}

export default actions