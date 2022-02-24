import React from 'react'
import Item from '../components/Item'
import { useAppSelector } from '../redux/hooks'

const CompletedItems = () => {

    const todoItems = useAppSelector(state => state.todos)

    const completedItems = todoItems.filter(item => item.completed)

    return (
        <>
            {
                completedItems.map(item => (
                    <Item
                        key={ item.id }
                        {...item}
                    />
                ))
            }
        </>
    )
}

export default CompletedItems