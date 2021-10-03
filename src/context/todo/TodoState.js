import React, { useReducer, useContext } from 'react'
import { Alert } from 'react-native'
import { ScreenContext } from '../screen/screenContext'
import { ADD_TODO, DEL_TODO, UPDATE_TODO } from '../types'
import { TodoContext } from './todoContext'
import { todoReducer } from './todoReducer'

export const TodoState = ({ children }) => {
  const initialState = {
    todos: [],
  }
  const { changeScreen } = useContext(ScreenContext)
  const [state, dispatch] = useReducer(todoReducer, initialState)

  const addTodo = (title) => dispatch({ type: ADD_TODO, title })
  const delTodo = (id) => {
    Alert.alert(
      'Удаление элемента',
      `Вы уверены, что хотите удалить '${state.todos.find((t) => t.id === id).title}'?`,
      [
        {
          text: 'Отмена',
          style: 'cancel',
        },
        {
          text: 'Удалить',
          onPress: () => {
            changeScreen(null)
            dispatch({ type: DEL_TODO, id })
          },
        },
      ],
      { cancelable: true }
    )
  }
  const updateTodo = (id, title) => dispatch({ type: UPDATE_TODO, title, id })

  return (
    <TodoContext.Provider value={{ todos: state.todos, addTodo, delTodo, updateTodo }}>
      {children}
    </TodoContext.Provider>
  )
}
