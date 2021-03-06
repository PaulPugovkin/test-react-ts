import React from 'react'
import {ITodo} from '../../interface'

type TodoListProps = {
    todos: ITodo[],
    onToggle(id: number): void,
    onRemove: (id: number) => void
}

const TodoList: React.FC<TodoListProps> = ({ todos, onRemove, onToggle }) => {
    
    const removeHandler = (event: React.MouseEvent, id: number) => {
        event.preventDefault()
        onRemove(id)
    }

    return (
        <ul>
            {todos.length > 0 ? todos.map(todo => {
                const classes = ['todo']
                if (todo.completed) {
                    classes.push('completed')
                }

                return (
                    <li className={classes.join(' ')} key={todo.id}>
                        <label>
                            <input 
                            type="checkbox" 
                            checked={todo.completed} 
                            onChange={onToggle.bind(null, todo.id)} />
                            <span>{todo.title}</span>
                            <i 
                            className="material-icons red-text"
                            onClick={event => removeHandler(event, todo.id)}
                            >
                                delete
                            </i>
                        </label>
                    </li>
                )
            }) : (<p className="center">Пока дел нет!</p>)}
            
        </ul>
    )
}

export default TodoList
