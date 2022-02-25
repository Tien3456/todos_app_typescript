import React from 'react'
import Item from '../components/Item'
import { useTodos } from '../context/todosContext'

const CompletedItems = () => {

    const todos = useTodos()

    const completedItems = todos.items.filter(item => item.completed)

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