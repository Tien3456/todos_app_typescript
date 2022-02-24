import React from 'react'
import Item from '../components/Item'
import { useAppSelector } from '../redux/hooks'

const ActiveItems = () => {

    const todoItems = useAppSelector(state => state.todos)
    const activeItems = todoItems.filter(item => !item.completed)

    return (
        <>
            {
                activeItems.map(item => (
                    <Item
                        key={ item.id }
                        {...item}
                    />
                ))
            }
        </>
    )
}

export default ActiveItems