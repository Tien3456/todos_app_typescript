import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTodos } from '../context/todosContext'

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
    
    const { 
        items,
        removeAllCompletedItems
    } = useTodos()

    const leftItemsQty = items.reduce((qty, item) => {
        if(!item.completed) {
            qty ++
        }
        return qty
    }, 0)

    const completedItemsQty = items.length - leftItemsQty

    return (
        <>
            {
                items.length > 0
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
                            onClick={() => removeAllCompletedItems()}
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