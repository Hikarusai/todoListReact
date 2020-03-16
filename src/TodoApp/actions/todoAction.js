import * as types from '../consts/constAction';

 export const addTodo = (value) => {
    return {
      type: types.ADD_TODO,
      todoText: value,
      isCheck: false,
      todoId: Date.now(),
      isVisible: true
    }
  }
  
 export const toggleTodo = (id) => {
    return {
      type: types.TOGGLE_TODO,
      todoId: id
    }
  }
  
 export const showAll = () => {
    return {
      type: types.SHOW_ALL
    }
  }
  
 export const showOngoing = () => {
    return {
      type: types.SHOW_ONGOING
    }
  }
  
 export const showCompleted = () => {
    return {
      type: types.SHOW_COMPLETED
    }
  }
  
export  const deleteTodo = (id) => {
    return {
      type: types.DELETE_TODO,
      todoId: id
    }
  }