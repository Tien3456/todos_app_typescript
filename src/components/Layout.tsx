import React from 'react'
import Form from './Form'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import { TodosProvider } from '../context/todosContext'
import useTodos from '../hooks/useTodos'

const Layout = () => {

    const todosContext = useTodos()

    return (
        <div className="container-fluid">
            <div className="full-screen">
                <div className="container">
                    <h1 className="heading">todos</h1>
                    <div className="center">
                        <div className="main-content">
                                <div className="form-wrapper">
                                    <TodosProvider value={ todosContext }>
                                        <Form />
                                        <ul>
                                            <Outlet />
                                        </ul>
                                        <Navbar />
                                    </TodosProvider>
                                </div>
                        </div>
                    </div>
                    <div className="footer">
                        <p>Double-click to edit a todo</p>
                        <p>Created by petehunt</p>
                        <p>Part of TodoMVC</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout