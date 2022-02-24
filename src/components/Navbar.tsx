import React from 'react'
import { useAppSelector, useAppDispatch } from '../redux/hooks'
import { Link, useLocation } from 'react-router-dom'
import actions from '../redux/todos/actions'
import './styles/Navbar.scss'

interface ILinkProps {
    to: string,
    link: string
}

const SuiLink: React.FC<ILinkProps> = ({ to, link }) => {
    
    const location = useLocation()

    return (
        <div 
            className={
                location.pathname === to
                    ? "link-wrapper active"
                    : "link-wrapper"
            }
        >
            <Link to={ to }>{ link }</Link>
        </div>
    )
}

const Navbar = () => {

    const dispatch = useAppDispatch()

    const todoItems = useAppSelector(state => state.todos)

    const leftItemsQty = todoItems.reduce((qty, item) => {
        if(!item.completed) {
            qty ++
        }
        return qty
    }, 0)

    const completedItemsQty = todoItems.length - leftItemsQty

    return (
        <>
            {
                todoItems.length > 0
                    ? <div className="nav">
                        <span>{ leftItemsQty } items left</span>
                        <div className="links-wrapper">
                            <SuiLink to="/" link="all" />
                            <SuiLink to="/active" link="active" />
                            <SuiLink to="/completed" link="completed" />
                        </div>
                        <button 
                            className={
                                completedItemsQty
                                    ? "clear-btn"
                                    : "clear-btn hidden"
                            }
                            onClick={() => dispatch(actions.doRemoveAllCompletedItems())}
                        >
                            Clear completed
                        </button>
                    </div>
                    : <></>
            }
        </>
    )
}

export default Navbar