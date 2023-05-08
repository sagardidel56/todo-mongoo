import React from 'react'
import { TodoButton } from './Client'

export const TodoItem = ({ title, description, comlpeted, id }) => {
    return (
        <div className="todo">
            <div>
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
            <div>
                <TodoButton id={id} comlpeted={comlpeted} />
            </div>
        </div>
    )
}