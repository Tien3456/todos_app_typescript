import React from 'react'
import './styles/Layout.scss'
import Form from './Form'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div className="container-fluid">
            <div className="full-screen">
                <div className="container">
                    <h1 className="heading">todos</h1>
                    <div className="center">
                        <div className="main-content">
                            <div className="form-wrapper">
                                <Form />
                                <ul>
                                    <Outlet />
                                </ul>
                                <Navbar />
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