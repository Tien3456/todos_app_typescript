import React from 'react'
import Item from '../components/Item'
import { useAppSelector } from '../redux/hooks'

const AllItems = () => {

    const todoItems = useAppSelector(state => state.todos)

    console.log(todoItems)

    return (
        <>
            {
                todoItems.map(item => (
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