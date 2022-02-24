import React, { useState } from 'react'
import './styles/Form.scss'
import { useAppDispatch } from '../redux/hooks'
import actions from '../redux/todos/actions'

const Form = () => {

    const dispatch = useAppDispatch()

    const [value, setValue] = useState<string>('')

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(value.trim() !== '') {
            dispatch(actions.doAddAItem({ content: value }))
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