import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Todo = ({task,deleteTodo, editTodo, toggleComplete}) => {

  return (
    <div className='Todo'>
        <p onClick={() => toggleComplete(task.id)} 
        className={`${task.completed ? 'completed': ""}`}>{task.task}</p>
        <div>
            <FontAwesomeIcon className="edit-icon" icon={faEdit} onClick={() => editTodo(task.id)} />
            <FontAwesomeIcon className="delete-icon" icon={faTrashAlt} onClick={() => deleteTodo(task.id)} />
        </div>
    </div>
  )
}

export default Todo;