import React from 'react'
import Item from '../components/Item'
import { useTodos } from '../context/todosContext'

const AllItems = () => {

    const todos = useTodos()

    return (
        <>
            {
                todos.items.map(item => (
                    <Item
                        key={ item.id }
                        {...item}
                    />
                ))
            }
        </>
    )
}

export default AllItems