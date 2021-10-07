import * as types from "./ActionTypes";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  todos: [{ id: 1, task: "Wake up", completed: false }],
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TODO:
      const newTodo = {
        id: uuidv4(),
        task: action.payload,
        completed: false,
      };
      const addedTodos = [...state.todos, newTodo];
      return {
        ...state,
        todos: addedTodos,
      };
    case types.REMOVE_TODO:
      const filterTodo = state.todos.filter((item) => item.id !== action.payload.id);
      return {
        ...state,
        todos: filterTodo,
      }
    case types.UPDATE_TODO:
      const updated = state.todos.map((todo) => {
        if(todo.id === action.payload.id) {
          return {...todo, task:action.payload.updatedTask}
        }
        return todo;
      })
      return {
        ...state,
        todos: updated
      }
    default:
      return state;
  }
};

export default todosReducer;
