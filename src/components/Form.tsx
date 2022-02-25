import React, { useState } from 'react'
import { useTodos } from '../context/todosContext'

const Form = () => {

    const [value, setValue] = useState<string>('')

    const { addAItem } = useTodos()

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(value.trim() !== '') {
            addAItem({ content: value })
            setValue('')
        }
    }

    return (
        <form 
            className="todos-form"
            onSubmit={ onSubmit }
        >
            <div className="input-wrapper">
                <input 
                    type="text" placeholder="What needs to be done?" 
                    value={ value }
                    onChange={(e) => setValue(e.target.value)}
                />
                <span className="right-icon">❯</span>
                <span className="divider"></span>
            </div>
        </form>
    )
}

export default Form