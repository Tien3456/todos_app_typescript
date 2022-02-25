import React from 'react'
import Item from '../components/Item'
import { useTodos } from '../context/todosContext'

const ActiveItems = () => {

    const todos = useTodos()
    const activeItems = todos.items.filter(item => !item.completed)

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