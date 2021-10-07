import React from 'react'
import TodoInput from './TodoInput'
import Todo from './Todo'
import { useSelector, useDispatch } from "react-redux"
import { addTodo, removeTodo, updateTodo } from "../redux/Action"

const TodoList = () => {
    const state = useSelector((state) => ({ ...state.todos }))
    let dispatch = useDispatch()

    const create = (newTodo) => {
        dispatch(addTodo(newTodo))
    }

    const update = (id,updatedTask) => {
        dispatch(updateTodo({ id, updatedTask}))
    } 
    return (
        <div>
        <h3>Todo app with redux</h3>
        <TodoInput createTodo={create}/>
        <div>
        <div>
            {state.todos.map((todo) => {      
                return (
                    <div key={todo.id} classNames="todo">
                    <Todo 
                    key={todo.id}
                    id={todo.id}
                    task={todo.task}
                    completed={todo.completed}
                    removeTodo = {() => dispatch(removeTodo(todo))}
                    updateTodo = {update}
                    />
                    </div>
                )
            })}
        </div>
        </div>
        </div>
    )
}

export default TodoList
