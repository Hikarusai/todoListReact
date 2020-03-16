import {combineReducers} from 'redux';
import * as types from '../consts/constAction';

export const todoreducer = (state= [], action) => {
    switch(action.type) {
          case types.ADD_TODO:
            const allItems= [
              ...state, {
                todoText: action.todoText,
                isCheck: action.isCheck,
                todoId: action.todoId,
                isVisible: action.isVisible
              }
            ]
            const makeItVisible = allItems.map(item => {return {...item, isVisible: true}})
            return makeItVisible
          case types.TOGGLE_TODO:
            return (
              state.map((item) => {
                return (
                  (item.todoId === action.todoId)
                  ? 
                  {...item, isCheck: !item.isCheck}
                  : 
                  item 
                )
            }))     
          case types.SHOW_ONGOING:
            const activeList = state.map((item) => {
                return (
                  (item.isCheck)
                  ? 
                  {...item, isVisible: false}
                  : 
                  {...item, isVisible: true}
                )
              })
            return activeList;
          case types.SHOW_COMPLETED:
            const completedList = state.map((item) => {
                return (
                  (!item.isCheck)
                  ? 
                  {...item, isVisible: false}
                  : 
                  {...item, isVisible: true}
               )
          })
            return completedList
        
          case types.SHOW_ALL:
            const totalList = state.map((item) => {
                return ( 
                  {...item, isVisible: true}      
                )
            })
             return totalList
        
          case types.DELETE_TODO:
             return state.filter(item => item.todoId !== action.todoId)
        //  return wholeList
          default:
            return state
     }
  }

  const allReducers= combineReducers({todoreducer});
  export default allReducers;