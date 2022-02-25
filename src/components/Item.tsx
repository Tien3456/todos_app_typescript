import React, { useState } from 'react'
import { IItem } from '../types'
import { useTodos } from '../context/todosContext'

interface IProps extends IItem {}

const Item: React.FC<IProps> = (props) => {

    const [hovered, setHovered] = useState<boolean>(false)
    const [isEditting, setEditting] = useState<boolean>(false)
    const [content, setContent] = useState<string>(props.content)

    const {
      removeAItem,
      toggleCompletedItem,
      editAItem
    } = useTodos()

    const onBlurInput = () => {
      setEditting(false)
      setContent(props.content)
    }

    const onSubmitEditForm = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      editAItem(props.id, content)
      setEditting(false)
    }

    return (
      <div 
        className="todo-item"
        onMouseOver={() => setHovered(true)}
        onMouseOut={() => setHovered(false)}
      >
        <div className="checkbox-wrapper">
          <span
            className={
              props.completed
                ? "checkbox checked"
                : "checkbox not-checked"
            }
            onClick={() => toggleCompletedItem(props.id)}
          >
          </span>
        </div>
        <div 
          className={
            props.completed
              ? "content-wrapper completed"
              : "content-wrapper"
          }
        >
          {
            !isEditting
              ? <p 
                  onDoubleClick={() => setEditting(true)}
                >
                { content }
              </p>
              : <form onSubmit={ onSubmitEditForm }>
                  <input
                      type="text" 
                      value={ content } 
                      onBlur={ onBlurInput }
                      onChange={(e) => setContent(e.target.value)}
                  />
                </form>
          }
        </div>
        <div className="removed-btn-wrapper">
          <button
            className={
              hovered
                ? "removed-btn"
                : "removed-btn hidden"
            }
            onClick={() => removeAItem(props.id)}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>
    )
}

export default React.memo(Item)