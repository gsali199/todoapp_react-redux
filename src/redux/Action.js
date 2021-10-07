import * as types from './ActionTypes'

export const addTodo = (todo) => ({
    type:types.ADD_TODO,
    payload:todo
})

export const removeTodo = (todo) => ({
    type: types.REMOVE_TODO,
    payload:todo
})

export const updateTodo = (todo) => ({
    type: types.UPDATE_TODO,
    payload:todo
})